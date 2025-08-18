class Payment:
    def pay(self, amount): 
        raise NotImplementedError

class CreditCardPayment(Payment):
    def pay(self, amount):
        print(f"Paid {amount} with credit card.")

class PayPalPayment(Payment):
    def pay(self, amount):
        print(f"Paid {amount} with PayPal.")

if __name__ == "__main__":
    payment: Payment = PayPalPayment()
    payment.pay(100)
