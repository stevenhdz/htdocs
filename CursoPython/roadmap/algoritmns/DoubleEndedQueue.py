class DoubleEndedQueue:
    """Implementación de una cola doble (deque)."""
    def __init__(self):
        self.queue = []

    def is_empty(self):
        """Verifica si la cola está vacía."""
        return len(self.queue) == 0

    def enqueue_front(self, data):
        """Añade un elemento al frente de la cola."""
        self.queue.insert(0, data)
        print(f"{data} ha sido añadido al frente de la cola.")

    def enqueue_rear(self, data):
        """Añade un elemento al final de la cola."""
        self.queue.append(data)
        print(f"{data} ha sido añadido al final de la cola.")

    def dequeue_front(self):
        """Elimina y devuelve el elemento al frente de la cola."""
        if self.is_empty():
            print("La cola está vacía, no se puede eliminar.")
            return None
        return self.queue.pop(0)

    def dequeue_rear(self):
        """Elimina y devuelve el elemento al final de la cola."""
        if self.is_empty():
            print("La cola está vacía, no se puede eliminar.")
            return None
        return self.queue.pop()

    def peek_front(self):
        """Devuelve el elemento al frente de la cola sin eliminarlo."""
        if self.is_empty():
            print("La cola está vacía.")
            return None
        return self.queue[0]

    def peek_rear(self):
        """Devuelve el elemento al final de la cola sin eliminarlo."""
        if self.is_empty():
            print("La cola está vacía.")
            return None
        return self.queue[-1]

    def size(self):
        """Devuelve el número de elementos en la cola."""
        return len(self.queue)

    def display(self):
        """Muestra los elementos de la cola."""
        if self.is_empty():
            print("La cola está vacía.")
        else:
            print("Cola:", " <- ".join(map(str, self.queue)))


# Ejemplo de uso:
deque = DoubleEndedQueue()

# Añadir elementos al frente y al final
deque.enqueue_front(10)  # Output: 10 ha sido añadido al frente de la cola.
deque.enqueue_rear(20)   # Output: 20 ha sido añadido al final de la cola.
deque.enqueue_front(5)   # Output: 5 ha sido añadido al frente de la cola.
deque.enqueue_rear(30)   # Output: 30 ha sido añadido al final de la cola.

deque.display()  # Output: Cola: 5 <- 10 <- 20 <- 30

# Eliminar elementos del frente y del final
deque.dequeue_front()  # Output: Elimina el 5
deque.display()  # Output: Cola: 10 <- 20 <- 30

deque.dequeue_rear()   # Output: Elimina el 30
deque.display()  # Output: Cola: 10 <- 20

# Ver el frente y el final
print("Elemento al frente:", deque.peek_front())  # Output: Elemento al frente: 10
print("Elemento al final:", deque.peek_rear())   # Output: Elemento al final: 20

print("Tamaño de la cola:", deque.size())  # Output: Tamaño de la cola: 2
