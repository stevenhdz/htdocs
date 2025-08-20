package stevenalexander.hernandezjimenez.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.Instant;

@Table("order_status_history")
public class OrderStatusHistory {
    @Id
    private Long id;
    private Long orderId;
    private String status;
    private String note;
    private Instant changedAt;

    public OrderStatusHistory() {}

    public OrderStatusHistory(Long id, Long orderId, String status, String note, Instant changedAt) {
        this.id = id; this.orderId = orderId; this.status = status; this.note = note; this.changedAt = changedAt;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Long getOrderId() { return orderId; }
    public void setOrderId(Long orderId) { this.orderId = orderId; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getNote() { return note; }
    public void setNote(String note) { this.note = note; }
    public Instant getChangedAt() { return changedAt; }
    public void setChangedAt(Instant changedAt) { this.changedAt = changedAt; }
}