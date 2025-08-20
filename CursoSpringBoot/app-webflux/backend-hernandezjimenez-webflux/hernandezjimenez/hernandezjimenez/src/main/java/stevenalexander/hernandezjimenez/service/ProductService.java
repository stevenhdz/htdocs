package stevenalexander.hernandezjimenez.service;

import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import stevenalexander.hernandezjimenez.model.Product;
import stevenalexander.hernandezjimenez.repository.ProductRepository;

@Service
public class ProductService {
    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public Flux<Product> listAll() { return repo.findAll(); }
    public Flux<Product> findByCategory(String categoryName) { return repo.findByCategoryName(categoryName); }
    public Flux<Product> searchByName(String query) { return repo.findByNameContainingIgnoreCase(query); }
    public Mono<Product> getById(Long id) { return repo.findById(id); }
    public Mono<Product> save(Product product) { return repo.save(product); }
}
