package stevenalexander.hernandezjimenez.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.Instant;

@Table("orders")
public class Order {
    @Id
    private Long id;
    private Long userId;
    private Double total;
    private String status; // PLACED, PREPARING, ON_THE_WAY, DELIVERED, CANCELLED
    private Instant createdAt;
    private Instant updatedAt;

    public Order() {}

    public Order(Long id, Long userId, Double total, String status, Instant createdAt, Instant updatedAt) {
        this.id = id; this.userId = userId; this.total = total; this.status = status; this.createdAt = createdAt; this.updatedAt = updatedAt;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public Double getTotal() { return total; }
    public void setTotal(Double total) { this.total = total; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
    public Instant getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Instant updatedAt) { this.updatedAt = updatedAt; }
}