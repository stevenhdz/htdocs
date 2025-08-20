package stevenalexander.hernandezjimenez.dto;

import java.util.List;

public class CreateOrderRequest {
    private List<OrderItemRequest> items;
    private String note; // optional

    public CreateOrderRequest() {}

    public List<OrderItemRequest> getItems() { return items; }
    public void setItems(List<OrderItemRequest> items) { this.items = items; }
    public String getNote() { return note; }
    public void setNote(String note) { this.note = note; }
}