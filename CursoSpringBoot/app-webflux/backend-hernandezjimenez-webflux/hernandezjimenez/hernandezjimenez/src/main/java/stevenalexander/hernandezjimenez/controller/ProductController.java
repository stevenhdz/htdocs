package stevenalexander.hernandezjimenez.controller;

import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import stevenalexander.hernandezjimenez.model.Product;
import stevenalexander.hernandezjimenez.service.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService svc;
    public ProductController(ProductService svc) { this.svc = svc; }

    @GetMapping
    public Flux<Product> all(@RequestParam(required = false) String category) {
        if (category == null || category.isBlank()) return svc.listAll();
        return svc.findByCategory(category);
    }

    @GetMapping("/{id}")
    public Mono<Product> get(@PathVariable Long id) {
        return svc.getById(id);
    }

    @GetMapping("/search")
    public Flux<Product> search(@RequestParam("q") String q) {
        return svc.searchByName(q);
    }

    @PostMapping
    public Mono<Product> create(@RequestBody Product p) {
        return svc.save(p);
    }
}
