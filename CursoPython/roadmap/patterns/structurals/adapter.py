class EuropeanSocket:
    def voltage(self):
        return "220V"

class USASocket:
    def voltage(self):
        return "110V"

class SocketAdapter:
    def __init__(self, socket):
        self.socket = socket

    def voltage(self):
        return f"Adaptado: {self.socket.voltage()} convertido a 110V"

# Uso
european_socket = EuropeanSocket()
adapter = SocketAdapter(european_socket)
print(adapter.voltage())