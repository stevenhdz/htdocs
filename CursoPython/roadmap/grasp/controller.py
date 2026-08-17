class OrderController:
    def __init__(self, order_service):
        self.order_service = order_service

    def create_order(self, items):
        return self.order_service.create_order(items)

class OrderService:
    def create_order(self, items):
        return f"Order with {len(items)} items created."
    
if __name__ == "__main__":
    order_service = OrderService()
    order_controller = OrderController(order_service)

    items = [
        {"product": "Laptop", "quantity": 1},
        {"product": "Mouse", "quantity": 2}
    ]

    result = order_controller.create_order(items)
    print(result)
