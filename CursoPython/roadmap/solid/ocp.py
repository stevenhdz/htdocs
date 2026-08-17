# Mala práctica: Modificar la clase cada vez que se agregan nuevos tipos de descuento
class CalculadoraDescuento:
    def calcular_descuento(self, tipo_descuento, precio):
        if tipo_descuento == 'porcentaje':
            return precio * 0.1
        elif tipo_descuento == 'fijo':
            return precio - 50
        return precio

# Buena práctica: Extender la clase con nuevas implementaciones sin modificarla


class Descuento:
    def aplicar_descuento(self, precio):
        pass


class DescuentoPorcentaje(Descuento):
    def aplicar_descuento(self, precio):
        return precio * 0.1


class DescuentoFijo(Descuento):
    def aplicar_descuento(self, precio):
        return precio - 50


class CalculadoraDescuento:
    def __init__(self, descuento: Descuento):
        self.descuento = descuento

    def calcular_descuento(self, precio):
        return self.descuento.aplicar_descuento(precio)


# Uso
precio = 500
calculadora = CalculadoraDescuento(DescuentoPorcentaje())
print(calculadora.calcular_descuento(precio))  # 450
calculadora = CalculadoraDescuento(DescuentoFijo())
print(calculadora.calcular_descuento(precio))  # 450
