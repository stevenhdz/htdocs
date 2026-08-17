package stevenalexander.hernandezjimenez.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import stevenalexander.hernandezjimenez.model.Order;

public interface OrderRepository extends ReactiveCrudRepository<Order, Long> {
    Flux<Order> findByUserId(Long userId);
    Mono<Order> findById(Long id);
}