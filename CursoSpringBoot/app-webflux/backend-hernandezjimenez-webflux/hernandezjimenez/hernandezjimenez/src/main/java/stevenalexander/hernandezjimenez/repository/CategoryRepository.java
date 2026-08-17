package stevenalexander.hernandezjimenez.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Mono;
import stevenalexander.hernandezjimenez.model.Category;

public interface CategoryRepository extends ReactiveCrudRepository<Category, Long> {
    Mono<Category> findByNameIgnoreCase(String name);
}
