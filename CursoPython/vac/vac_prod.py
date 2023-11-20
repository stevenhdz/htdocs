import numpy as np
from uuid import uuid4
import pyaudio
import ssl
import asyncio
import websockets
import os
import boto3
import json
import traceback
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE
server_uri = "wss://athenabancolombiaLB-1495732229.us-east-1.elb.amazonaws.com"
kinesis_client = boto3.client('kinesis', region_name='us-east-1')

pa = pyaudio.PyAudio()

def initialize_audio_stream_input(device, format, channels, rate, chunk_size):
    stream = pa.open(input_device_index=device, format=format, channels=channels, rate=rate, input=True, frames_per_buffer=chunk_size)
    return pa, stream

def initialize_audio_stream_output(device, format, channels, rate, chunk_size):
    stream = pa.open(output_device_index=device, format=format, channels=channels, rate=rate, input=True, frames_per_buffer=chunk_size)
    return pa, stream

def close_audio_stream(pa, stream):
    stream.stop_stream()
    stream.close()
    pa.terminate()

def message(nameTxt, response):
    with open(nameTxt+'.txt', 'w') as f: 
        f.write(response)
            
def generateIdCall():
    callid = os.getlogin()+str(uuid4())

    message('callID', callid)
        
    metadata = {
        "callId": callid,
        "fromNumber": "+9165551234",
        "toNumber": "+8001112222",
        "agentId": os.getlogin(),
    }

    return metadata

def get_device_index_by_name(name):
    for i in range(pa.get_device_count()):
        device_info = pa.get_device_info_by_index(i)
        if name.lower() in device_info['name'].lower():
            return i
    return False
 
async def send_audio():
    
    for file in ['response.txt', 'callID.txt', 'error.txt']:
        if os.path.exists(file):
            os.remove(file)
            break
        else:
            print('ninguno')
        
    format = pyaudio.paInt16
    channels = 1
    rate = 8000
    chunk_size = 1024
    
    device_index_microphone = get_device_index_by_name("CABLE Output")  # Índice del dispositivo de entrada (micrófono)
    device_index_speaker = get_device_index_by_name("CABLE Input")  # Índice del dispositivo de salida (altavoces)
        
    pa1, stream1 = initialize_audio_stream_input(device_index_microphone, format, channels, rate, chunk_size)
    pa2, stream2 = initialize_audio_stream_output(device_index_speaker, format, channels, rate, chunk_size)

    message('response','started')
    
    async with websockets.connect(server_uri, ssl=ssl_context) as websocket:
        
        websocket.ping_timeout = 600
        
        await websocket.send(json.dumps(generateIdCall()))
        
        try:
                    
            while True:
                
                audio_array1 = np.frombuffer(stream1.read(chunk_size), dtype=np.int16)
                audio_array2 = np.frombuffer(stream2.read(chunk_size), dtype=np.int16)
                
                min_length = min(len(audio_array1), len(audio_array2))
                audio_array1 = audio_array1[:min_length]
                audio_array2 = audio_array2[:min_length]
                
                combined_audio = np.vstack((audio_array1, audio_array2)).T
                
                await websocket.send(combined_audio.tobytes())
                
        except websockets.exceptions.WebSocketException as ws_exception:
            message('error', str(ws_exception))
        except Exception as e:
            message('error', str(e))
            traceback.print_exc()
        finally:
            close_audio_stream(pa1, stream1)
            close_audio_stream(pa2, stream2)

if __name__ == "__main__":
    asyncio.get_event_loop().run_until_complete(send_audio())