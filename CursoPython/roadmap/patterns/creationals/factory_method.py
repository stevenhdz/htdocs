from abc import ABC, abstractmethod

# Clase Producto: Define la interfaz común
class Notification(ABC):
    @abstractmethod
    def send(self, message):
        pass

# Productos concretos
class EmailNotification(Notification):
    def send(self, message):
        print(f"Enviando email con mensaje: {message}")

class SMSNotification(Notification):
    def send(self, message):
        print(f"Enviando SMS con mensaje: {message}")

class PushNotification(Notification):
    def send(self, message):
        print(f"Enviando notificación push con mensaje: {message}")

# Clase Factory: Define el método para crear el objeto
class NotificationFactory(ABC):
    @abstractmethod
    def create_notification(self):
        pass

# Factories concretos
class EmailNotificationFactory(NotificationFactory):
    def create_notification(self):
        return EmailNotification()

class SMSNotificationFactory(NotificationFactory):
    def create_notification(self):
        return SMSNotification()

class PushNotificationFactory(NotificationFactory):
    def create_notification(self):
        return PushNotification()

# Cliente
def send_notification(factory: NotificationFactory, message: str):
    notification = factory.create_notification()  # Se usa el Factory Method
    notification.send(message)

# Uso
send_notification(EmailNotificationFactory(), "Hola por email")
send_notification(SMSNotificationFactory(), "Hola por SMS")
send_notification(PushNotificationFactory(), "Hola por push")
