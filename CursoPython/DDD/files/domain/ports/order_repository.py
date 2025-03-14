from abc import ABC, abstractmethod
from typing import Optional
from infrastructure.models.order_model import Order

class OrderRepository(ABC):
    @abstractmethod
    def save(self, order: Order):
        pass

    @abstractmethod
    def find_by_id(self, order_id: str) -> Optional[Order]:
        pass