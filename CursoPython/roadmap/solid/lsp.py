# Clase base
class Vehiculo:
    def conducir(self):
        raise NotImplementedError(
            "Este método debe ser implementado por la subclase")


class Coche(Vehiculo):
    def conducir(self):
        return "El coche está conduciendo."


class Bicicleta(Vehiculo):
    def conducir(self):
        return "La bicicleta está pedaleando."


class Avion(Vehiculo):
    def conducir(self):
        # Esto viola LSP
        raise Exception("El avión no se puede conducir de esta manera.")

# Uso


def iniciar_viaje(vehiculo: Vehiculo):
    print(vehiculo.conducir())


iniciar_viaje(Coche())  # Funciona bien
iniciar_viaje(Bicicleta())  # Funciona bien
# iniciar_viaje(Avion())  # Rompería el principio LSP
