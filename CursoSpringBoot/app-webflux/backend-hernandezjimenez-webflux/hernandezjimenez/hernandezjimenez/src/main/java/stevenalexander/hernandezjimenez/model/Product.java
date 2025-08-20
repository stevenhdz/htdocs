package stevenalexander.hernandezjimenez.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("products")
public class Product {
    @Id
    private Long id;
    private String name;
    private String description;
    private Double price;
    private String imageUrl;
    private Long categoryId; // FK to categories.id

    public Product() {}

    public Product(Long id, String name, String description, Double price, String imageUrl, Long categoryId) {
        this.id=id; this.name=name; this.description=description; this.price=price; this.imageUrl=imageUrl; this.categoryId=categoryId;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public Long getCategoryId() { return categoryId; }
    public void setCategoryId(Long categoryId) { this.categoryId = categoryId; }
}
