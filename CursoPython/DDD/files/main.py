from application.use_cases.create_order import CreateOrder
from application.use_cases.add_item_to_order import AddItemToOrder
from domain.models.order import OrderItem
from infrastructure.repository.in_memory_repository import InMemoryOrderRepository

if __name__ == "__main__":
    order_repository = InMemoryOrderRepository()

    create_order_use_case = CreateOrder(order_repository)
    add_item_to_order_use_case = AddItemToOrder(order_repository)

    item1 = OrderItem(product_id="product1", quantity=2, price=10.0)
    item2 = OrderItem(product_id="product2", quantity=1, price=20.0)

    order = create_order_use_case.execute(order_id="order1", customer_id="customer1", items=[item1])
    print(f"Order created: {order}")

    add_item_to_order_use_case.execute(order_id="order1", item=item2)
    order = order_repository.find_by_id("order1")
    print(f"Order after adding item: {order}")
    print(f"Total price: {order.total_price()}")