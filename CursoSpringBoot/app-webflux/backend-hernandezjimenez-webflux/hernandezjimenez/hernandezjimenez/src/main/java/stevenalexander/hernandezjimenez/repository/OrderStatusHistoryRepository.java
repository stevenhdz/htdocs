package stevenalexander.hernandezjimenez.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import stevenalexander.hernandezjimenez.model.OrderStatusHistory;

public interface OrderStatusHistoryRepository extends ReactiveCrudRepository<OrderStatusHistory, Long> {
    Flux<OrderStatusHistory> findByOrderIdOrderByChangedAtAsc(Long orderId);
}