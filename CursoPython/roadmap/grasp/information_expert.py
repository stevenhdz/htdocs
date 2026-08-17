class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class OrderItem:
    def __init__(self, product, quantity):
        self.product = product
        self.quantity = quantity

    # El experto en subtotal es el que tiene cantidad y precio
    def subtotal(self):
        print(f"Calculando subtotal {self.product.price} x {self.quantity}")
        return self.product.price * self.quantity


if __name__ == "__main__":
    product1 = Product("Laptop", 1000)
    product2 = Product("Mouse", 50)

    item1 = OrderItem(product1, 1)
    item2 = OrderItem(product2, 2)

    print(f"Subtotal for {item1.product.name}: {item1.subtotal()}")
    print(f"Subtotal for {item2.product.name}: {item2.subtotal()}")