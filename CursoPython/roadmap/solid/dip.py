# Mala práctica: El módulo de alto nivel depende directamente del módulo de bajo nivel

class ServicioCorreo:
    def enviar_correo(self, mensaje):
        print(f"Enviando correo: {mensaje}")


class Notificador:
    def __init__(self):
        # Dependencia directa de ServicioCorreo
        self.servicio_correo = ServicioCorreo()

    def notificar(self, mensaje):
        # Uso de la implementación concreta
        self.servicio_correo.enviar_correo(mensaje)


# Uso de la mala práctica
notificador = Notificador()
notificador.notificar("¡Mensaje importante!")


# **Buena práctica: Siguiendo el Dependency Inversion Principle (DIP)**

# Abstracción: Interfaz para los servicios de notificación
class ServicioNotificacion:
    def enviar(self, mensaje):
        pass  # Método abstracto que debe implementarse

# Implementación concreta de un servicio de notificación (Correo)


class ServicioCorreo(ServicioNotificacion):
    def enviar(self, mensaje):
        print(f"Enviando correo: {mensaje}")

# Implementación concreta de otro servicio de notificación (SMS)


class ServicioSMS(ServicioNotificacion):
    def enviar(self, mensaje):
        print(f"Enviando SMS: {mensaje}")

# Clase Notificador que depende de la abstracción (ServicioNotificacion)


class Notificador:
    def __init__(self, servicio_notificacion: ServicioNotificacion):
        self.servicio_notificacion = servicio_notificacion  # Dependencia de la abstracción

    def notificar(self, mensaje):
        self.servicio_notificacion.enviar(mensaje)


# Uso de la buena práctica (Siguiendo DIP)
correo = ServicioCorreo()  # Implementación concreta de correo
notificador = Notificador(correo)  # Pasamos la implementación a Notificador
notificador.notificar("¡Mensaje importante por correo!")

sms = ServicioSMS()  # Implementación concreta de SMS
notificador_sms = Notificador(sms)  # Pasamos la implementación a Notificador
notificador_sms.notificar("¡Mensaje importante por SMS!")
