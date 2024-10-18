class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class SimpleLinkedList:
    def __init__(self):
        self.head = None

    def add(self, value):
        new_node = Node(value)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def print(self):
        current = self.head
        while current:
            next = current.next.value if current.next else "None"
            print(f"Node: {current.value}, next: {next}")
            current = current.next


lista = SimpleLinkedList()
lista.add(1)
lista.add(2)
lista.add(4)
lista.add(3)

print("Content:")
lista.print()
