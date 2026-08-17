# Interfaz Servicio de Notificación (Define el contrato)
class ServicioNotificacion:
    def enviar_notificacion(self, mensaje):
        raise NotImplementedError("Este método debe ser implementado")

# Implementación de Servicio de Notificación por Correo


class NotificacionCorreo(ServicioNotificacion):
    def enviar_notificacion(self, mensaje):
        print(f"Enviando correo: {mensaje}")

# Implementación de Servicio de Notificación por SMS


class NotificacionSMS(ServicioNotificacion):
    def enviar_notificacion(self, mensaje):
        print(f"Enviando SMS: {mensaje}")

# Clase Usuario que depende del servicio de notificación


class Usuario:
    def __init__(self, nombre, servicio_notificacion):
        self.nombre = nombre
        self.servicio_notificacion = servicio_notificacion  # Inyección de dependencia

    def notificar(self, mensaje):
        self.servicio_notificacion.enviar_notificacion(
            f"Notificación para {self.nombre}: {mensaje}")


# Inyección de dependencias al crear la instancia de Usuario
servicio_correo = NotificacionCorreo()
servicio_sms = NotificacionSMS()

# Pasamos el servicio deseado al Usuario
usuario1 = Usuario("Alice", servicio_correo)
usuario2 = Usuario("Bob", servicio_sms)

# Llamamos al método notificar para cada usuario
usuario1.notificar("Tienes un nuevo mensaje")
usuario2.notificar("Tu pedido ha sido enviado")
