package stevenalexander.hernandezjimenez.repository;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import stevenalexander.hernandezjimenez.model.Product;

public interface ProductRepository extends ReactiveCrudRepository<Product, Long> {
    Flux<Product> findByNameContainingIgnoreCase(String namePart);
    Flux<Product> findByCategoryId(Long categoryId);

    @Query("""
        SELECT p.* FROM products p
        JOIN categories c ON p.category_id = c.id
        WHERE LOWER(c.name) = LOWER(:name)
    """)
    Flux<Product> findByCategoryName(String name);

    Mono<Product> findById(Long id);
}
