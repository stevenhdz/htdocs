class Element:
    def __init__(self, value):
        self.value = value

class Array:
    def __init__(self, size):
        self.size = size
        self.data = [None] * size

    def get(self, index):
        """Obtiene el valor en el índice especificado."""
        if 0 <= index < self.size:
            return self.data[index].value if self.data[index] else None
        else:
            raise IndexError("Índice fuera de rango")

    def set(self, index, value):
        """Asigna un valor en el índice especificado."""
        if 0 <= index < self.size:
            self.data[index] = Element(value)
        else:
            raise IndexError("Índice fuera de rango")

    def print(self):
        """Imprime los valores del array."""
        for item in self.data:
            print(item.value if item else None, end=" ")
        print()  # Salto de línea al final de la impresión

# Ejemplo de uso:
array = Array(10)
array.set(0, 1)
array.set(1, 2)
array.set(2, 3)
array.set(3, 4)
array.set(4, 5)
array.print()

# Obtener valor en el índice 2
print("Valor en el índice 2:", array.get(2))
