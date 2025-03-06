from infrastructure.models.order_model import Order
from domain.ports.order_repository import OrderRepository
from typing import Optional

class InMemoryOrderRepository(OrderRepository):
    def __init__(self):
        self.orders = {}

    def save(self, order: Order):
        self.orders[order.order_id] = order

    def find_by_id(self, order_id: str) -> Optional[Order]:
        return self.orders.get(order_id)