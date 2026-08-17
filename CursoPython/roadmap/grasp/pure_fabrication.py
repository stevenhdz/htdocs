# Clase de persistencia no existe en el dominio, pero ayuda a separar responsabilidades
class OrderRepository:
    def save(self, order):
        print("Order saved to database")

if __name__ == "__main__":
    repository = OrderRepository()
    repository.save("Order 1")