package stevenalexander.hernandezjimenez.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Mono;
import stevenalexander.hernandezjimenez.model.PasswordResetToken;

public interface PasswordResetTokenRepository extends ReactiveCrudRepository<PasswordResetToken, Long> {
    Mono<PasswordResetToken> findByToken(String token);
}
