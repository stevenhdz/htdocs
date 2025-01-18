import asyncio
import websockets

# Diccionario para mantener los canales y sus clientes
channels = {}


async def handle_client(websocket):
    # Extraer el identificador del canal desde el path
    # Ejemplo: ws://localhost:8765/channel/123 -> "123"
    channel_id = websocket.request.path.split("/")[-1]
    print(f"Client connected to channel: {channel_id}")

    if channel_id not in channels:
        channels[channel_id] = []  # Crear un canal si no existe

    # Agregar el cliente al canal
    channels[channel_id].append(websocket)

    try:
        while True:
            # Recibir mensajes del cliente
            message = await websocket.recv()
            print(f"Channel {channel_id} received: {message}")

            # Enviar el mensaje a todos los clientes del canal
            for client in channels[channel_id]:
                await client.send(f"[Channel {channel_id}] {message}")
                # if client != websocket:  # No reenviar el mensaje al remitente
                # await client.send(f"[Channel {channel_id}] {message}")
    except websockets.exceptions.ConnectionClosedOK:
        print("Connection closed gracefully by client.")
    except websockets.exceptions.ConnectionClosedError as e:
        print(f"Connection closed unexpectedly: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        # Remover el cliente del canal al desconectarse
        channels[channel_id].remove(websocket)
        if not channels[channel_id]:  # Si el canal queda vacío, eliminarlo
            del channels[channel_id]


async def main():
    async with websockets.serve(handle_client, "localhost", 8765):
        print("WebSocket server running on ws://localhost:8765")
        await asyncio.Future()

if __name__ == "__main__":
    asyncio.run(main())
