package stevenalexander.hernandezjimenez.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.ReadOnlyProperty;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import java.math.BigDecimal;

@Table("order_items")
public class OrderItem {
    @Id
    private Long id;
    private Long orderId;
    private Long productId;
    private Integer quantity;
    private Double unitPrice;
    private Double subtotal;

    public OrderItem() {}

    public OrderItem(Long id, Long orderId, Long productId, Integer quantity, Double unitPrice) {
        this.id = id; this.orderId = orderId; this.productId = productId; this.quantity = quantity; this.unitPrice = unitPrice; 
        this.subtotal = quantity * unitPrice;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Long getOrderId() { return orderId; }
    public void setOrderId(Long orderId) { this.orderId = orderId; }
    public Long getProductId() { return productId; }
    public void setProductId(Long productId) { this.productId = productId; }
    public Integer getQuantity() { return quantity; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }
    public Double getUnitPrice() { return unitPrice; }
    public void setUnitPrice(Double unitPrice) { this.unitPrice = unitPrice; }
    public Double getSubtotal() { return subtotal; }
    public void setSubtotal(Double subtotal) { this.subtotal = subtotal; }
}