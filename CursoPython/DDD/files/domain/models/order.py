from dataclasses import dataclass
from typing import List, Optional
from datetime import datetime

@dataclass
class OrderItem:
    product_id: str
    quantity: int
    price: float

@dataclass
class Order:
    order_id: str
    customer_id: str
    items: List[OrderItem]
    created_at: datetime
    updated_at: Optional[datetime] = None

    def add_item(self, item: OrderItem):
        self.items.append(item)
        self.updated_at = datetime.now()

    def remove_item(self, product_id: str):
        self.items = [item for item in self.items if item.product_id != product_id]
        self.updated_at = datetime.now()

    def total_price(self) -> float:
        return sum(item.quantity * item.price for item in self.items)