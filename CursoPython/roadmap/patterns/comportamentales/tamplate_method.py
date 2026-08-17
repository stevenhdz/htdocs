class UserRegistration:
    def register(self):
        self.validate_data()
        self.save_to_db()
        self.send_notification()

    def validate_data(self):
        pass

    def save_to_db(self):
        print("Guardando usuario en la base de datos")

    def send_notification(self):
        print("Enviando notificación al usuario")

class AdminRegistration(UserRegistration):
    def validate_data(self):
        print("Validando datos del administrador")

class GuestRegistration(UserRegistration):
    def validate_data(self):
        print("Validando datos del invitado")

# Uso
admin = AdminRegistration()
guest = GuestRegistration()

admin.register()
guest.register()
