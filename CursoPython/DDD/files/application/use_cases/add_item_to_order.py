from domain.models.order import OrderItem
from domain.ports.order_repository import OrderRepository

class AddItemToOrder:
    def __init__(self, order_repository: OrderRepository):
        self.order_repository = order_repository

    def execute(self, order_id: str, item: OrderItem):
        order = self.order_repository.find_by_id(order_id)
        if order:
            order.add_item(item)
            self.order_repository.save(order)