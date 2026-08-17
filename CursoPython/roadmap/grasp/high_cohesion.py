class OrderCalculator:
    def calculate_total(self, items):
        return sum(item["price"] * item["quantity"] for item in items)

class OrderRepository:
    def save(self, order):
        print("Order saved to database")

class OrderNotifier:
    def send_email(self, order):
        print("Order confirmation email sent")

if __name__ == "__main__":
    items = [
        {"product": "Laptop", "price": 1000, "quantity": 1},
        {"product": "Mouse", "price": 50, "quantity": 2}
    ]

    calculator = OrderCalculator()
    total = calculator.calculate_total(items)
    print(f"Total order amount: {total}")

    order = {"items": items, "total": total}

    repository = OrderRepository()
    repository.save(order)

    notifier = OrderNotifier()
    notifier.send_email(order)
