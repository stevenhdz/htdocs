class Node:
    """Representa un nodo en una lista doblemente enlazada circular."""
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None


class CircularDoubleLinkedList:
    """Implementación de una lista doblemente enlazada circular."""
    def __init__(self):
        self.head = None

    def is_empty(self):
        """Verifica si la lista está vacía."""
        return self.head is None

    def append(self, data):
        """Añade un nodo al final de la lista."""
        new_node = Node(data)
        if self.head is None:
            # Si la lista está vacía, el nodo apunta a sí mismo
            self.head = new_node
            new_node.next = new_node
            new_node.prev = new_node
        else:
            tail = self.head.prev  # El último nodo actual
            tail.next = new_node
            new_node.prev = tail
            new_node.next = self.head
            self.head.prev = new_node

    def prepend(self, data):
        """Añade un nodo al principio de la lista."""
        new_node = Node(data)
        if self.head is None:
            # Si la lista está vacía, el nodo apunta a sí mismo
            self.head = new_node
            new_node.next = new_node
            new_node.prev = new_node
        else:
            tail = self.head.prev  # El último nodo actual
            new_node.next = self.head
            new_node.prev = tail
            self.head.prev = new_node
            tail.next = new_node
            self.head = new_node  # Actualizar la cabeza

    def delete(self, data):
        """Elimina el primer nodo con el valor especificado."""
        if self.head is None:
            print("La lista está vacía.")
            return

        current = self.head
        while True:
            if current.data == data:
                if current.next == current:  # Caso único nodo
                    self.head = None
                else:
                    # Reconectar los nodos adyacentes
                    current.prev.next = current.next
                    current.next.prev = current.prev
                    if current == self.head:  # Si es el primer nodo
                        self.head = current.next
                return
            current = current.next
            if current == self.head:
                break  # Si hemos dado la vuelta completa
        print(f"El valor {data} no se encuentra en la lista.")

    def display(self):
        """Muestra los elementos de la lista en orden."""
        if self.head is None:
            print("La lista está vacía.")
            return

        current = self.head
        while True:
            print(current.data, end=" <-> ")
            current = current.next
            if current == self.head:  # Regresar al inicio
                break
        print("(circular)")

    def reverse_display(self):
        """Muestra los elementos de la lista en orden inverso."""
        if self.head is None:
            print("La lista está vacía.")
            return

        tail = self.head.prev  # El último nodo
        current = tail
        while True:
            print(current.data, end=" <-> ")
            current = current.prev
            if current == tail:  # Regresar al final
                break
        print("(circular)")


# Ejemplo de uso:
cdll = CircularDoubleLinkedList()
cdll.append(10)
cdll.append(20)
cdll.append(30)
cdll.display()  # Output: 10 <-> 20 <-> 30 <-> (circular)

cdll.prepend(5)
cdll.display()  # Output: 5 <-> 10 <-> 20 <-> 30 <-> (circular)

cdll.delete(20)
cdll.display()  # Output: 5 <-> 10 <-> 30 <-> (circular)

cdll.reverse_display()  # Output: 30 <-> 10 <-> 5 <-> (circular)
