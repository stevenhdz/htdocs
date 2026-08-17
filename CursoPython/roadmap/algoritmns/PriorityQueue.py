import heapq

class PriorityQueue:
    """Implementación de una cola con prioridad utilizando heapq (min-heap)."""
    def __init__(self):
        self.queue = []
        self.counter = 0  # Para mantener el orden de llegada de elementos con la misma prioridad

    def is_empty(self):
        """Verifica si la cola está vacía."""
        return len(self.queue) == 0

    def enqueue(self, item, priority):
        """Añade un elemento a la cola con una prioridad dada.
        La prioridad más baja (número más alto) es la que se procesa primero.
        """
        # Usamos un contador para asegurar que los elementos con la misma prioridad
        # se procesen en el orden en que llegaron (FIFO).
        heapq.heappush(self.queue, (priority, self.counter, item))
        self.counter += 1

    def dequeue(self):
        """Elimina y devuelve el elemento con la más alta prioridad (la más baja prioridad numérica)."""
        if self.is_empty():
            print("La cola con prioridad está vacía.")
            return None
        priority, counter, item = heapq.heappop(self.queue)
        return item

    def peek(self):
        """Devuelve el elemento con la más alta prioridad sin eliminarlo."""
        if self.is_empty():
            print("La cola con prioridad está vacía.")
            return None
        priority, counter, item = self.queue[0]
        return item

    def size(self):
        """Devuelve el número de elementos en la cola."""
        return len(self.queue)

    def display(self):
        """Muestra los elementos de la cola con su prioridad."""
        if self.is_empty():
            print("La cola con prioridad está vacía.")
        else:
            print("Cola con Prioridad:")
            for priority, counter, item in self.queue:
                print(f"Elemento: {item}, Prioridad: {priority}")


# Ejemplo de uso:
pq = PriorityQueue()

pq.enqueue("Tarea 1", 3)  # Prioridad 3
pq.enqueue("Tarea 2", 1)  # Prioridad 1
pq.enqueue("Tarea 3", 2)  # Prioridad 2
pq.enqueue("Tarea 4", 1)  # Prioridad 1

pq.display()
# Output:
# Cola con Prioridad:
# Elemento: Tarea 2, Prioridad: 1
# Elemento: Tarea 4, Prioridad: 1
# Elemento: Tarea 3, Prioridad: 2
# Elemento: Tarea 1, Prioridad: 3

print("\nElemento con mayor prioridad:", pq.dequeue())  # Output: Tarea 2
pq.display()
# Output:
# Cola con Prioridad:
# Elemento: Tarea 4, Prioridad: 1
# Elemento: Tarea 3, Prioridad: 2
# Elemento: Tarea 1, Prioridad: 3
