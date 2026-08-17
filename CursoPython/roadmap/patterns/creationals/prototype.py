import copy

class Shape:
    def __init__(self, name, color):
        self.name = name
        self.color = color

    def clone(self):
        return copy.deepcopy(self)

# Crear una figura original
circle = Shape("Círculo", "Rojo")
print(f"Original: {circle.name}, {circle.color}")
<
# Crear un clon de la figura
circle_clone = circle.clone()
circle_clone.color = "Azul"  # Modificar el clon sin afectar el original

print(f"Clon: {circle_clone.name}, {circle_clone.color}")
print(f"Original después de clonar: {circle.name}, {circle.color}")
