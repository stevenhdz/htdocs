package stevenalexander.hernandezjimenez.dto;

import stevenalexander.hernandezjimenez.model.Order;
import stevenalexander.hernandezjimenez.model.OrderItem;
import stevenalexander.hernandezjimenez.model.OrderStatusHistory;

import java.util.List;

public class OrderResponse {
    private Order order;
    private List<OrderItem> items;
    private List<OrderStatusHistory> history;

    public OrderResponse() {}

    public OrderResponse(Order order, List<OrderItem> items, List<OrderStatusHistory> history) {
        this.order = order; this.items = items; this.history = history;
    }

    public Order getOrder() { return order; }
    public void setOrder(Order order) { this.order = order; }
    public List<OrderItem> getItems() { return items; }
    public void setItems(List<OrderItem> items) { this.items = items; }
    public List<OrderStatusHistory> getHistory() { return history; }
    public void setHistory(List<OrderStatusHistory> history) { this.history = history; }
}