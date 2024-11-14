# Mala práctica: Una interfaz que obliga a implementar métodos innecesarios
class Trabajo:
    def trabajar(self):
        pass

    def descansar(self):
        pass

# Buena práctica: Interfaces más pequeñas y específicas


class Trabajador:
    def trabajar(self):
        pass


class Descanso:
    def descansar(self):
        pass


class Empleado(Trabajador, Descanso):
    def trabajar(self):
        print("Trabajando")

    def descansar(self):
        print("Descansando")


class Contratista(Trabajador):
    def trabajar(self):
        print("Trabajando como contratista")


# Uso
empleado = Empleado()
empleado.trabajar()
empleado.descansar()

contratista = Contratista()
contratista.trabajar()
