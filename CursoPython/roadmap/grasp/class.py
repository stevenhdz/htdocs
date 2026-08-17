class OrderItem:
    def __init__(self, product, quantity):
        self.product = product
        self.quantity = quantity

    def __repr__(self):
        return f"OrderItem(product='{self.product}', quantity={self.quantity})"

class Order:
    def __init__(self):
        self.items = []

    # Order crea sus propios OrderItems
    def add_item(self, product, quantity):
        return self.items.append(OrderItem(product, quantity))

    def __repr__(self):
        return f"Order(items={self.items})"


if __name__ == "__main__":
    order = Order()
    order.add_item("Laptop", 1)
    order.add_item("Mouse", 2)

    print(order)
