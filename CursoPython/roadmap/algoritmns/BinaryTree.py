"""
 Casos de uso actuales del codigo:
    - Crear un arbol binario de busqueda
    - Buscar un valor en el arbol
    - Imprimir el arbol
    - Insertar un valor en el arbol ( BST si es menor se inserta a la izquierda, si es mayor se inserta a la derecha)
    - Crear un nodo
"""


class Node:
    def __init__(self, data):
        self.data = data
        self.leftChild = None
        self.rightChild = None

    def insert(self, data):
        if data < self.data:
            if self.leftChild:
                self.leftChild.insert(data)
            else:
                self.leftChild = Node(data)
        else:
            if self.rightChild:
                self.rightChild.insert(data)
            else:
                self.rightChild = Node(data)

    def search(self, val, parent=None):
        if val == self.data:
            if parent:
                return f"{val} is found. Parent: {parent.data}, Node: {self.data}"
            else:
                return f"{val} is found. It is the root node."
        elif val < self.data:
            if self.leftChild:
                return self.leftChild.search(val, self)
            else:
                return f"{val} is not found"
        else:
            if self.rightChild:
                return self.rightChild.search(val, self)
            else:
                return f"{val} is not found"

    def PrintTree(self):
        print("Tree: ", self, self.data).to_string()
        if self.leftChild:
            self.leftChild.PrintTree()
        if self.rightChild:
            self.rightChild.PrintTree()


# Creando el nodo raíz
root = Node(50)
# Insertando valores en el mismo orden que en el BST original
root.insert(30)
root.insert(70)
root.insert(20)
root.insert(40)
root.insert(60)
root.insert(80)

root.PrintTree()

# Buscando los valores
print(root.search(50))  # Buscando el nodo raíz
print(root.search(30))  # Buscando 30
print(root.search(70))  # Buscando 70
print(root.search(20))  # Buscando 20
print(root.search(40))  # Buscando 40
print(root.search(60))  # Buscando 60
print(root.search(80))  # Buscando 80


"""
Resultado esperado:
     50
    /  \
  30    70
 /  \   /  \
20  40 60  80
"""
