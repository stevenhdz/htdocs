package stevenalexander.hernandezjimenez.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import stevenalexander.hernandezjimenez.dto.CreateOrderRequest;
import stevenalexander.hernandezjimenez.dto.OrderResponse;
import stevenalexander.hernandezjimenez.dto.UpdateStatusRequest;
import stevenalexander.hernandezjimenez.model.Order;
import stevenalexander.hernandezjimenez.model.OrderItem;
import stevenalexander.hernandezjimenez.model.OrderStatusHistory;
import stevenalexander.hernandezjimenez.model.Product;
import stevenalexander.hernandezjimenez.model.User;
import stevenalexander.hernandezjimenez.repository.*;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Instant;
import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final OrderStatusHistoryRepository historyRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final EmailService emailService;

    public OrderService(OrderRepository orderRepository,
                        OrderItemRepository orderItemRepository,
                        OrderStatusHistoryRepository historyRepository,
                        ProductRepository productRepository,
                        UserRepository userRepository,
                        EmailService emailService) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        this.historyRepository = historyRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    // Calcula subtotal con redondeo a 2 decimales y devuelve Double (porque tus modelos usan Double)
    private Double calcSubtotal(Integer qty, Double unitPrice) {
        if (qty == null || unitPrice == null) return 0.0d;
        BigDecimal sub = BigDecimal.valueOf(unitPrice)
                .multiply(BigDecimal.valueOf(qty))
                .setScale(2, RoundingMode.HALF_UP);
        return sub.doubleValue();
    }

    @Transactional
    public Mono<OrderResponse> createOrder(String userEmail, CreateOrderRequest req) {
        if (req.getItems() == null || req.getItems().isEmpty()) {
            return Mono.error(new IllegalArgumentException("No items"));
        }

        return userRepository.findByEmail(userEmail)
                .switchIfEmpty(Mono.error(new IllegalStateException("User not found")))
                .flatMap(user -> computeTotalAndPersist(user, req));
    }

    private Mono<OrderResponse> computeTotalAndPersist(User user, CreateOrderRequest req) {
        Instant now = Instant.now();

        // 1) Construir OrderItems con precio desde Product (AÚN sin orderId)
        Mono<List<OrderItem>> itemsMono = Flux.fromIterable(req.getItems())
            .flatMap(itemReq ->
                productRepository.findById(itemReq.getProductId())
                    .switchIfEmpty(Mono.error(new IllegalArgumentException("Product not found: " + itemReq.getProductId())))
                    .map(product -> {
                        OrderItem i = new OrderItem();
                        i.setProductId(product.getId());
                        i.setQuantity(itemReq.getQuantity());
                        // Asumo Product.getPrice() devuelve Double
                        i.setUnitPrice(product.getPrice());
                        // subtotal calculado en código (Double)
                        i.setSubtotal(calcSubtotal(i.getQuantity(), i.getUnitPrice()));
                        return i;
                    })
            )
            .collectList();

        return itemsMono.flatMap(items -> {
            // 2) Total = suma de subtotales (Double)
            double total = items.stream()
                    .map(OrderItem::getSubtotal)
                    .mapToDouble(Double::doubleValue)
                    .sum();

            // 3) Crear y guardar la Order
            Order order = new Order();
            order.setUserId(user.getId());
            order.setTotal(total);            // <- total es Double en tu modelo
            order.setStatus("PLACED");
            order.setCreatedAt(now);
            order.setUpdatedAt(now);

            return orderRepository.save(order).flatMap(saved -> {
                // 4) Asigna orderId y guarda items
                items.forEach(i -> i.setOrderId(saved.getId()));

                return orderItemRepository.saveAll(items).collectList()
                    // 5) Guarda historial
                    .then(historyRepository.save(new OrderStatusHistory(
                            null, saved.getId(), "PLACED", req.getNote(), now)))
                    // 6) Armar respuesta
                    .then(assembleResponse(saved.getId()))
                    // 7) Enviar correo (no bloquea)
                    .flatMap(resp ->
                        userRepository.findById(resp.getOrder().getUserId())
                            .flatMap(u -> emailService.sendPasswordRecoveryEmail(
                                    u.getEmail(),
                                    "Order Confirmation",
                                    "Your order #" + resp.getOrder().getId() +
                                            " has been placed. Total: " + resp.getOrder().getTotal()
                            ))
                            .thenReturn(resp)
                    );
            });
        });
    }

    public Mono<OrderResponse> getOrder(Long orderId) {
        return assembleResponse(orderId);
    }

    public Flux<Order> listOrdersForUser(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    @Transactional
    public Mono<OrderResponse> updateStatus(Long orderId, UpdateStatusRequest req) {
        Instant now = Instant.now();
        return orderRepository.findById(orderId)
                .switchIfEmpty(Mono.error(new IllegalArgumentException("Order not found")))
                .flatMap(order -> {
                    order.setStatus(req.getStatus());
                    order.setUpdatedAt(now);
                    return orderRepository.save(order)
                            .then(historyRepository.save(new OrderStatusHistory(
                                    null, orderId, req.getStatus(), req.getNote(), now)))
                            .then(assembleResponse(orderId));
                });
    }

    private Mono<OrderResponse> assembleResponse(Long orderId) {
        Mono<Order> orderMono = orderRepository.findById(orderId);
        Mono<List<OrderItem>> itemsMono = orderItemRepository.findByOrderId(orderId).collectList();
        Mono<List<OrderStatusHistory>> historyMono = historyRepository
                .findByOrderIdOrderByChangedAtAsc(orderId).collectList();

        return Mono.zip(orderMono, itemsMono, historyMono)
                .map(t -> new OrderResponse(t.getT1(), t.getT2(), t.getT3()));
    }
}
