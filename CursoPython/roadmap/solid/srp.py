# Mala práctica: Una clase con múltiples responsabilidades
class Orden:
    def __init__(self, productos, cliente):
        self.productos = productos
        self.cliente = cliente

    def calcular_total(self):
        return sum(producto['precio'] for producto in self.productos)

    def imprimir_factura(self):
        print("Factura para:", self.cliente)
        for producto in self.productos:
            print(f"{producto['nombre']} - {producto['precio']}")
        print("Total:", self.calcular_total())

    def guardar_en_base_datos(self):
        # Código para guardar la orden en una base de datos
        print("Orden guardada en la base de datos")

# Buena práctica: Separar responsabilidades en clases diferentes


class Orden:
    def __init__(self, productos, cliente):
        self.productos = productos
        self.cliente = cliente

    def calcular_total(self):
        return sum(producto['precio'] for producto in self.productos)


class Factura:
    def __init__(self, orden):
        self.orden = orden

    def imprimir(self):
        print("Factura para:", self.orden.cliente)
        for producto in self.orden.productos:
            print(f"{producto['nombre']} - {producto['precio']}")
        print("Total:", self.orden.calcular_total())


class RepositorioOrdenes:
    def guardar(self, orden):
        # Código para guardar la orden en una base de datos
        print("Orden guardada en la base de datos")


# Uso
productos = [{'nombre': 'Producto1', 'precio': 100},
             {'nombre': 'Producto2', 'precio': 150}]
cliente = "Cliente1"
orden = Orden(productos, cliente)
factura = Factura(orden)
factura.imprimir()
repositorio = RepositorioOrdenes()
repositorio.guardar(orden)
