class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
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

    def add_first(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node

    def remove(self, value):
        if not self.head:
            return

        if self.head.value == value:
            self.head = self.head.next
            return

        current = self.head
        while current.next:
            if current.next.value == value:
                current.next = current.next.next
                return
            current = current.next

    def search(self, value):
        current = self.head
        while current:
            if current.value == value:
                return True
            current = current.next
        return False

    def print(self):
        current = self.head
        while current:
            next = current.next.value["age"] if current.next else "None"
            print(f"Node --> {current.value} pointing to --> {next}")
            current = current.next

    def length(self):
        count = 0
        current = self.head
        while current:
            count += 1
            current = current.next
        print(f"Length: {count}")


list = LinkedList()
list.add({"name": "John", "age": 30})
list.add({"name": "Jane", "age": 25})
list.add({"name": "Bob", "age": 40})

list.remove({"name": "Jane", "age": 25})
list.add_first({"name": "Alice", "age": 35})

if list.search({"name": "Alice", "age": 3}):
    print("Element found")
else:
    print("Element not found")

list.length()

list.print()
