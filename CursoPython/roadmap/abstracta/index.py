from abc import ABC, abstractmethod

# Clase abstracta Cuenta


class Cuenta(ABC):
    def __init__(self, titular, saldo=0):
        self.titular = titular
        self.saldo = saldo

    @abstractmethod
    def depositar(self, cantidad):
        pass  # Método abstracto, sin implementación

    @abstractmethod
    def retirar(self, cantidad):
        pass  # Método abstracto, sin implementación

# Clase concreta CuentaCorriente que hereda de Cuenta


class CuentaCorriente(Cuenta):
    def depositar(self, cantidad):
        self.saldo += cantidad
        print(
            f"Depósito de ${cantidad} en la Cuenta Corriente. Saldo actual: ${self.saldo}")

    def retirar(self, cantidad):
        if cantidad <= self.saldo:
            self.saldo -= cantidad
            print(
                f"Retiro de ${cantidad} en la Cuenta Corriente. Saldo actual: ${self.saldo}")
        else:
            print("Fondos insuficientes en la Cuenta Corriente")

# Clase concreta CuentaAhorro que hereda de Cuenta


class CuentaAhorro(Cuenta):
    def depositar(self, cantidad):
        self.saldo += cantidad
        print(
            f"Depósito de ${cantidad} en la Cuenta de Ahorros. Saldo actual: ${self.saldo}")

    def retirar(self, cantidad):
        if cantidad <= self.saldo:
            self.saldo -= cantidad
            print(
                f"Retiro de ${cantidad} en la Cuenta de Ahorros. Saldo actual: ${self.saldo}")
        else:
            print("Fondos insuficientes en la Cuenta de Ahorros")


# Crear instancias de las clases concretas
cuenta_corriente = CuentaCorriente("Alice", 1000)
cuenta_ahorro = CuentaAhorro("Bob", 2000)

# Llamar a los métodos de las clases concretas
cuenta_corriente.depositar(500)
cuenta_corriente.retirar(300)

cuenta_ahorro.depositar(800)
cuenta_ahorro.retirar(1000)
