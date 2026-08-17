package stevenalexander.hernandezjimenez.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;
import stevenalexander.hernandezjimenez.dto.CreateOrderRequest;
import stevenalexander.hernandezjimenez.dto.OrderResponse;
import stevenalexander.hernandezjimenez.dto.UpdateStatusRequest;
import stevenalexander.hernandezjimenez.model.Order;
import stevenalexander.hernandezjimenez.service.OrderService;
import stevenalexander.hernandezjimenez.service.UserService;
import stevenalexander.hernandezjimenez.repository.UserRepository;
import stevenalexander.hernandezjimenez.model.User;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.context.MessageSource;


import java.util.Locale;
import java.util.Map;


@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;
    private final UserRepository userRepository;
    private final MessageSource messageSource;

    public OrderController(OrderService orderService, UserRepository userRepository, MessageSource messageSource) {
        this.orderService = orderService;
        this.userRepository = userRepository;
        this.messageSource = messageSource;
    }

    @PostMapping
    public Mono<ResponseEntity<OrderResponse>> create(@RequestBody CreateOrderRequest req) {
        return ReactiveSecurityContextHolder.getContext()
                .map(ctx -> ctx.getAuthentication())
                .map(Authentication::getName)
                .flatMap(email -> orderService.createOrder(email, req))
                .map(resp -> ResponseEntity.status(HttpStatus.CREATED).body(resp));
    }

    @GetMapping("/{id}")
    public Mono<ResponseEntity<OrderResponse>> get(@PathVariable Long id) {
        return orderService.getOrder(id)
                .map(ResponseEntity::ok);
    }

    @PatchMapping("/{id}/status")
    public Mono<ResponseEntity<Map<String, String>>> updateStatus(@PathVariable Long id,
                                                                @RequestBody UpdateStatusRequest req) {
        Locale locale = LocaleContextHolder.getLocale();

        return orderService.updateStatus(id, req)
                .map(u -> ResponseEntity.ok(Map.of(
                        "message", messageSource.getMessage("order.status.updated", null, locale)
                )))
                .onErrorResume(ex -> Mono.just(ResponseEntity.badRequest().body(Map.of(
                        "error", messageSource.getMessage("order.status.update.failed", null, locale)
                ))));
    }

    @GetMapping("/me")
    public Mono<ResponseEntity<Flux<Order>>> myOrders() {
        return ReactiveSecurityContextHolder.getContext()
                .map(ctx -> ctx.getAuthentication().getName())
                .flatMap(email -> userRepository.findByEmail(email))
                .map(user -> ResponseEntity.ok(orderService.listOrdersForUser(user.getId())));
    }
}