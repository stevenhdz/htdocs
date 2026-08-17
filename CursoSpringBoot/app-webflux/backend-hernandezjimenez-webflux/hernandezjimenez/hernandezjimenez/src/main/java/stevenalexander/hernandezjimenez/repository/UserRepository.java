package stevenalexander.hernandezjimenez.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Mono;
import stevenalexander.hernandezjimenez.model.User;

public interface UserRepository extends ReactiveCrudRepository<User, Long> {
    Mono<User> findByEmail(String email);
    Mono<Boolean> existsByEmail(String email);
}
