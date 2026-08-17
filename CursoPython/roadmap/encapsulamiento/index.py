class CuentaBancaria:
    def __init__(self, titular, saldo):
        self.titular = titular        # Atributo público
        self.__saldo = saldo          # Atributo privado

    # Método público para consultar el saldo
    def consultar_saldo(self):
        return f"El saldo de {self.titular} es ${self.__saldo}"

    # Método público para depositar dinero
    def depositar(self, cantidad):
        if cantidad > 0:
            self.__saldo += cantidad
            print(
                f"Se han depositado ${cantidad}. Saldo actual: ${self.__saldo}")
        else:
            print("La cantidad debe ser mayor que cero.")

    # Método público para retirar dinero
    def retirar(self, cantidad):
        if cantidad > 0 and cantidad <= self.__saldo:
            self.__saldo -= cantidad
            print(
                f"Se han retirado ${cantidad}. Saldo actual: ${self.__saldo}")
        else:
            print("Fondos insuficientes o cantidad inválida.")


# Crear una cuenta bancaria
cuenta = CuentaBancaria("Alice", 1000)

# Acceder a métodos públicos
print(cuenta.consultar_saldo())  # El saldo de Alice es $1000
cuenta.depositar(500)            # Se han depositado $500. Saldo actual: $1500
cuenta.retirar(200)              # Se han retirado $200. Saldo actual: $1300

# Intentar acceder directamente al atributo privado
print(cuenta.__saldo)  # Esto generará un error de atributo
