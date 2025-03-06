from typing import List
from infrastructure.models.order_model import Order, OrderItem
from domain.ports.order_repository import OrderRepository
from datetime import datetime

class OrderService:
    def __init__(self, order_repository: OrderRepository):
        self.order_repository = order_repository

    def create_order(self, order_id: str, customer_id: str, items: List[OrderItem]) -> Order:
        order = Order(order_id=order_id, customer_id=customer_id, items=items, created_at=datetime.now())
        self.order_repository.save(order)
        return order

    def add_item_to_order(self, order_id: str, item: OrderItem):
        order = self.order_repository.find_by_id(order_id)
        if order:
            order.add_item(item)
            self.order_repository.save(order)

    def remove_item_from_order(self, order_id: str, product_id: str):
        order = self.order_repository.find_by_id(order_id)
        if order:
            order.remove_item(product_id)
            self.order_repository.save(order)

    def get_order_total_price(self, order_id: str) -> float:
        order = self.order_repository.find_by_id(order_id)
        if order:
            return order.total_price()
        return 0.0