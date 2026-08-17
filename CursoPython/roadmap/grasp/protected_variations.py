class PaymentProcessor:
    def process(self, amount): 
        raise NotImplementedError

class StripeProcessor(PaymentProcessor):
    def process(self, amount):
        print(f"Stripe processing {amount}")

class PayPalProcessor(PaymentProcessor):
    def process(self, amount):
        print(f"PayPal processing {amount}")

# Order no depende de un proveedor fijo
class Order:
    def __init__(self, processor: PaymentProcessor):
        self.processor = processor

    def checkout(self, amount):
        self.processor.process(amount)


if __name__ == "__main__":
    stripe_processor = StripeProcessor()
    paypal_processor = PayPalProcessor()

    order1 = Order(stripe_processor)
    order1.checkout(100)

    order2 = Order(paypal_processor)
    order2.checkout(200)
