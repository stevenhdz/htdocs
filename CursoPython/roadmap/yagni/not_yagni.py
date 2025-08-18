class Calculadora:
    def sumar(self, a, b):
        return a + b

    # Métodos agregados "por si acaso"
    def restar(self, a, b):
        return a - b

    def multiplicar(self, a, b):
        return a * b

    def dividir(self, a, b):
        if b == 0:
            raise ValueError("No se puede dividir entre 0")
        return a / b

# Uso actual del sistema:
calc = Calculadora()
print(calc.sumar(2, 3))  # solo usan sumar
