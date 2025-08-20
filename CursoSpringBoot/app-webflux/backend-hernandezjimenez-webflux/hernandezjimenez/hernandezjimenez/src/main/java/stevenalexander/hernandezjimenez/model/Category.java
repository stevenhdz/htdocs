package stevenalexander.hernandezjimenez.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("categories")
public class Category {
    @Id
    private Long id;
    private String name;

    public Category() {}
    public Category(Long id, String name) { this.id=id; this.name=name; }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
