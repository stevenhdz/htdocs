# Este archivo puede incluir consultas específicas relacionadas con las órdenes.from datetime import datetime
import datetime
from typing import List, Optional
from infrastructure.models.order_model import Order
from infrastructure.adapters.in_memory_order_repository import InMemoryOrderRepository

class OrderQueryService:
    def __init__(self, order_repository: InMemoryOrderRepository):
        self.order_repository = order_repository

    def get_orders_by_customer(self, customer_id: str) -> List[Order]:
        return [order for order in self.order_repository.orders.values() if order.customer_id == customer_id]

    def get_orders_in_date_range(self, start_date: datetime, end_date: datetime) -> List[Order]:
        return [
            order for order in self.order_repository.orders.values()
            if start_date <= order.created_at <= end_date
        ]

    def get_order_by_id(self, order_id: str) -> Optional[Order]:
        return self.order_repository.find_by_id(order_id)