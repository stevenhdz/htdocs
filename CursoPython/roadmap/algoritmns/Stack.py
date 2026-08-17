class Stack:
    """Implementación de una pila (stack)."""
    def __init__(self):
        self.stack = []

    def is_empty(self):
        """Verifica si la pila está vacía."""
        return len(self.stack) == 0

    def push(self, item):
        """Añade un elemento a la parte superior de la pila."""
        self.stack.append(item)
        print(f"{item} ha sido añadido a la pila.")

    def pop(self):
        """Elimina y devuelve el elemento de la parte superior de la pila."""
        if self.is_empty():
            print("La pila está vacía, no se puede eliminar.")
            return None
        return self.stack.pop()

    def peek(self):
        """Devuelve el elemento de la parte superior de la pila sin eliminarlo."""
        if self.is_empty():
            print("La pila está vacía.")
            return None
        return self.stack[-1]

    def size(self):
        """Devuelve el número de elementos en la pila."""
        return len(self.stack)

    def display(self):
        """Muestra los elementos de la pila."""
        if self.is_empty():
            print("La pila está vacía.")
        else:
            print("Pila:", " -> ".join(map(str, self.stack)))


# Ejemplo de uso:
stack = Stack()

# Añadir elementos a la pila
stack.push(10)  # Output: 10 ha sido añadido a la pila.
stack.push(20)  # Output: 20 ha sido añadido a la pila.
stack.push(30)  # Output: 30 ha sido añadido a la pila.
stack.push(40)  # Output: 40 ha sido añadido a la pila.

stack.display()
# Output: Pila: 10 -> 20 -> 30 -> 40

# Eliminar elementos de la pila
print("\nElemento eliminado:", stack.pop())  # Output: Elimina el 40
stack.display()
# Output: Pila: 10 -> 20 -> 30

print("\nElemento en la parte superior:", stack.peek())  # Output: Elemento en la parte superior: 30
print("Tamaño de la pila:", stack.size())  # Output: Tamaño de la pila: 3
