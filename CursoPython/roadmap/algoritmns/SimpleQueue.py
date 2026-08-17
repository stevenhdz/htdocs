class SimpleQueue:
    """Implementación de una cola simple."""
    def __init__(self):
        self.queue = []

    def is_empty(self):
        """Verifica si la cola está vacía."""
        return len(self.queue) == 0

    def enqueue(self, data):
        """Añade un elemento al final de la cola."""
        self.queue.append(data)
        print(f"{data} ha sido añadido a la cola.")

    def dequeue(self):
        """Elimina y devuelve el elemento al frente de la cola."""
        if self.is_empty():
            print("La cola está vacía, no se puede eliminar.")
            return None
        return self.queue.pop(0)

    def peek(self):
        """Devuelve el elemento al frente de la cola sin eliminarlo."""
        if self.is_empty():
            print("La cola está vacía.")
            return None
        return self.queue[0]

    def size(self):
        """Devuelve el número de elementos en la cola."""
        return len(self.queue)

    def display(self):
        """Muestra los elementos de la cola."""
        if self.is_empty():
            print("La cola está vacía.")
        else:
            print("Cola:", " -> ".join(map(str, self.queue)))


# Ejemplo de uso:
q = SimpleQueue()
q.enqueue(1)  # Output: 1 ha sido añadido a la cola.
q.enqueue(2)  # Output: 2 ha sido añadido a la cola.
q.enqueue(3)  # Output: 3 ha sido añadido a la cola.

q.display()  # Output: Cola: 1 -> 2 -> 3

print("Elemento al frente:", q.peek())  # Output: Elemento al frente: 1

q.dequeue()  # Output: (sin mensaje, elimina el primero)
q.display()  # Output: Cola: 2 -> 3

print("Tamaño de la cola:", q.size())  # Output: Tamaño de la cola: 2
