from typing import List
from infrastructure.models.order_model import Order, OrderItem
from domain.ports.order_repository import OrderRepository
from datetime import datetime

class CreateOrder:
    def __init__(self, order_repository: OrderRepository):
        self.order_repository = order_repository

    def execute(self, order_id: str, customer_id: str, items: List[OrderItem]) -> Order:
        order = Order(order_id=order_id, customer_id=customer_id, items=items, created_at=datetime.now())
        self.order_repository.save(order)
        return order