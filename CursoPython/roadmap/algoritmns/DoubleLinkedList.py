class Node:
    """Representa un nodo en una lista doblemente enlazada."""
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None


class DoubleLinkedList:
    """Implementación de una lista doblemente enlazada."""
    def __init__(self):
        self.head = None

    def is_empty(self):
        """Verifica si la lista está vacía."""
        return self.head is None

    def append(self, data):
        """Añade un nodo al final de la lista."""
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
            new_node.prev = current

    def prepend(self, data):
        """Añade un nodo al principio de la lista."""
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node

    def delete(self, data):
        """Elimina el primer nodo con el valor especificado."""
        if self.head is None:
            print("La lista está vacía.")
            return

        current = self.head
        while current:
            if current.data == data:
                if current.prev:
                    current.prev.next = current.next
                if current.next:
                    current.next.prev = current.prev
                if current == self.head:  # Si es el primer nodo
                    self.head = current.next
                return
            current = current.next

        print(f"El valor {data} no se encuentra en la lista.")

    def display(self):
        """Muestra los elementos de la lista de izquierda a derecha."""
        if self.head is None:
            print("La lista está vacía.")
            return

        current = self.head
        while current:
            print(current.data, end=" <-> ")
            current = current.next
        print("None")

    def reverse_display(self):
        """Muestra los elementos de la lista de derecha a izquierda."""
        if self.head is None:
            print("La lista está vacía.")
            return

        # Encontrar el último nodo
        current = self.head
        while current.next:
            current = current.next

        # Recorrer la lista en reversa
        while current:
            print(current.data, end=" <-> ")
            current = current.prev
        print("None")


# Ejemplo de uso:
dll = DoubleLinkedList()
dll.append(10)
dll.append(20)
dll.append(30)
dll.display()  # Output: 10 <-> 20 <-> 30 <-> None

dll.prepend(5)
dll.display()  # Output: 5 <-> 10 <-> 20 <-> 30 <-> None

dll.delete(20)
dll.display()  # Output: 5 <-> 10 <-> 30 <-> None

dll.reverse_display()  # Output: 30 <-> 10 <-> 5 <-> None
