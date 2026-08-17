import asyncio
import websockets

# Function to handle the chat client


async def chat():
    async with websockets.connect(
        'ws://127.0.0.1:8765/channel/1',
        ping_interval=100,
        ping_timeout=100
        ) as websocket:
            while True:
                # Prompt the user for a message
                message = input("Enter message: ")
                # Send the message to the server
                await websocket.send(message)
                print(f"client send message: {message}")
                # Receive a message from the server
                response = await websocket.recv()
                print(f"Client received: {response}")

# Run the client
if __name__ == "__main__":
    asyncio.run(chat())
