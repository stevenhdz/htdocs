import socketio
from flask import Flask

# Crear una instancia de Flask
app = Flask(__name__)

# Crear una instancia de Socket.IO
sio = socketio.Server(cors_allowed_origins="http://127.0.0.1:3000")

# Asociar Socket.IO con Flask
app.wsgi_app = socketio.WSGIApp(sio, app.wsgi_app)

# Crear un manejador de eventos cuando un cliente se conecta


@sio.event
def connect(sid, environ):
    print(f"Client {sid} connected")
    sio.send(sid, "Welcome to the server!")

# Crear un manejador de eventos para recibir mensajes de chat


@sio.event
def chat_message(sid, message):
    print(f"Message from {sid}: {message}")
    # Responder al cliente con el mismo mensaje
    sio.send(sid, f"Echo from server: {message}")

# Crear un manejador de eventos cuando un cliente se desconecta


@sio.event
def disconnect(sid):
    print(f"Client {sid} disconnected")


# Iniciar el servidor Flask en el puerto 5000
if __name__ == '__main__':
    app.run(port=5000)
