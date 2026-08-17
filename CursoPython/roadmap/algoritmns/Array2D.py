class Element:
    def __init__(self, value):
        self.value = value  # Almacena el valor del elemento

class Array2D:
    def __init__(self, rows, cols):
        self.rows = rows  # Número de filas
        self.cols = cols  # Número de columnas
        self.data = [[None] * cols for _ in range(rows)]  # Crear la matriz 2D con None como valores iniciales

    def get(self, row, col):
        """Obtiene el valor en una posición específica (fila, columna)."""
        if 0 <= row < self.rows and 0 <= col < self.cols:
            return self.data[row][col].value if self.data[row][col] else None
        else:
            raise IndexError("Índice fuera de rango")

    def set(self, row, col, value):
        """Asigna un valor a una posición específica (fila, columna)."""
        if 0 <= row < self.rows and 0 <= col < self.cols:
            self.data[row][col] = Element(value)
        else:
            raise IndexError("Índice fuera de rango")

    def print(self):
        """Imprime todos los valores del array 2D."""
        for row in self.data:
            for item in row:
                print(item.value if item else None, end=" ")
            print()  # Salto de línea al final de cada fila

# Ejemplo de uso:
array_2d = Array2D(3, 3)  # Crear un array 2D de 3x3

# Establecer valores en el array 2D
array_2d.set(0, 0, 1)
array_2d.set(0, 1, 2)
array_2d.set(0, 2, 3)

array_2d.set(1, 0, 4)
array_2d.set(1, 1, 5)
array_2d.set(1, 2, 6)

array_2d.set(2, 0, 7)
array_2d.set(2, 1, 8)
array_2d.set(2, 2, 9)

# Imprimir el contenido del array 2D
array_2d.print()

print("Valor en la posición (2, 2):", array_2d.get(1, 2))  # Output: 6
