class File:
    def __init__(self, name):
        self.name = name

    def display(self):
        print(f"Archivo: {self.name}")

class Folder:
    def __init__(self, name):
        self.name = name
        self.children = []

    def add(self, item):
        self.children.append(item)

    def display(self):
        print(f"Carpeta: {self.name}")
        for child in self.children:
            child.display()

# Uso
file1 = File("archivo1.txt")
file2 = File("archivo2.txt")

folder = Folder("Mis Documentos")
folder.add(file1)
folder.add(file2)

folder.display()
