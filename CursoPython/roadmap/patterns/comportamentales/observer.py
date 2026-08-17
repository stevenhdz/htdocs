class Subject:
    def __init__(self):
        self.observers = []

    def add_observer(self, observer):
        self.observers.append(observer)

    def notify_observers(self, message):
        for observer in self.observers:
            observer.update(message)

class Observer:
    def update(self, message):
        print(f"Notificación recibida: {message}")

# Uso
subject = Subject()
observer1 = Observer()
observer2 = Observer()

subject.add_observer(observer1)
subject.add_observer(observer2)

subject.notify_observers("Nuevo evento disponible")
