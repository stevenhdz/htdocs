class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.Head = None


myLinkedList = LinkedList()
myNode1 = Node("A")
myNode2 = Node("B")
myNode3 = Node("C")
myNode4 = Node("D")
myLinkedList.Head = myNode1
myNode1.next = myNode2
myNode2.next = myNode3
myNode3.next = myNode4

print("Head: ", myLinkedList.Head.data)
print("Next:", end=" ")
print("->", myLinkedList.Head.next.data, end=" ")
print("Next:", end=" ")
print("->", myLinkedList.Head.next.next.data, end=" ")
print("Next:", end=" ")
print("->", myLinkedList.Head.next.next.next.data)
print("Next:", myLinkedList.Head.next.next.next.next)
