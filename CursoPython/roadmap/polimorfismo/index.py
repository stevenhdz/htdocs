# Clase base (superclase)
class Vehiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

    def acelerar(self):
        raise NotImplementedError(
            "Este método debe ser implementado en las subclases")

# Clase derivada (subclase) Coche


class Coche(Vehiculo):
    def acelerar(self):
        print(
            f"El coche {self.marca} {self.modelo} acelera suavemente en la carretera.")

# Clase derivada (subclase) Moto


class Moto(Vehiculo):
    def acelerar(self):
        print(
            f"La moto {self.marca} {self.modelo} acelera rápidamente en la pista.")

# Clase derivada (subclase) Bicicleta


class Bicicleta(Vehiculo):
    def acelerar(self):
        print(
            f"La bicicleta {self.marca} {self.modelo} acelera con la fuerza del ciclista.")

# Función que demuestra el polimorfismo


def probar_aceleracion(vehiculo):
    vehiculo.acelerar()


# Crear instancias de las clases derivadas
mi_coche = Coche("Toyota", "Corolla")
mi_moto = Moto("Yamaha", "MT-07")
mi_bici = Bicicleta("Giant", "Escape 3")

# Llamar a la función polimórfica
probar_aceleracion(mi_coche)  # El coche acelera
probar_aceleracion(mi_moto)   # La moto acelera
probar_aceleracion(mi_bici)   # La bicicleta acelera
