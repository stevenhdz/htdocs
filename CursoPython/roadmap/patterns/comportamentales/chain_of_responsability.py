class Handler:
    def __init__(self, successor=None):
        self.successor = successor

    def handle_request(self, request):
        if self.successor:
            return self.successor.handle_request(request)
        return None

class AuthHandler(Handler):
    def handle_request(self, request):
        if request.get("authenticated", False):
            print("Autenticación correcta")
            return super().handle_request(request)
        print("Error: Usuario no autenticado")
        return False

class DataValidationHandler(Handler):
    def handle_request(self, request):
        if "data" in request and isinstance(request["data"], dict):
            print("Datos validados")
            return super().handle_request(request)
        print("Error: Datos inválidos")
        return False

# Uso
handler_chain = AuthHandler(DataValidationHandler())
request = {"authenticated": True, "data": {"key": "value"}}
handler_chain.handle_request(request)
