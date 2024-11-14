# Clase base (superclase)
class Vehiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

    def encender(self):
        print(f"{self.marca} {self.modelo} está encendido.")

    def apagar(self):
        print(f"{self.marca} {self.modelo} está apagado.")

# Clase derivada (subclase) que hereda de Vehiculo


class Coche(Vehiculo):
    def __init__(self, marca, modelo, puertas):
        super().__init__(marca, modelo)  # Llama al constructor de la clase base
        self.puertas = puertas

    def tocar_claxon(self):
        print("¡Beep beep!")

# Clase derivada (subclase) que hereda de Vehiculo


class Moto(Vehiculo):
    def __init__(self, marca, modelo, tipo):
        super().__init__(marca, modelo)
        self.tipo = tipo

    def hacer_wheelie(self):
        print(f"{self.marca} {self.modelo} está haciendo un caballito.")


# Crear instancias de las clases derivadas
mi_coche = Coche("Toyota", "Corolla", 4)
mi_moto = Moto("Yamaha", "MT-07", "Deportiva")

# Llamar a métodos heredados
mi_coche.encender()
mi_moto.encender()

# Llamar a métodos específicos de cada clase derivada
mi_coche.tocar_claxon()
mi_moto.hacer_wheelie()
