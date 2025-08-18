from abc import ABC, abstractmethod


class Notifier(ABC):
    """Interfaz de notificación"""
    
    @abstractmethod
    def notify(self, message: str) -> None:
        raise NotImplementedError("Subclasses must implement this method")


class EmailNotifier(Notifier):
    def notify(self, message: str) -> None:
        print(f"📧 Email: {message}")


class SMSNotifier(Notifier):
    def notify(self, message: str) -> None:
        print(f"📱 SMS: {message}")


class Order:
    def __init__(self, notifier: Notifier) -> None:
        self.notifier = notifier

    def complete_order(self) -> None:
        """Completa la orden y notifica"""
        self.notifier.notify("✅ Order completed successfully!")


if __name__ == "__main__":
    # Se puede cambiar el mecanismo de notificación sin tocar la clase Order
    email_notifier = EmailNotifier()
    sms_notifier = SMSNotifier()

    order1 = Order(email_notifier)
    order1.complete_order()

    order2 = Order(sms_notifier)
    order2.complete_order()
