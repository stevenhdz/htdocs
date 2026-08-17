import pyaudio
import numpy as np
import wave

p = pyaudio.PyAudio()


for i in range(p.get_device_count()):
    device_info = p.get_device_info_by_index(i)
    input_channels = device_info['maxInputChannels']
    output_channels = device_info['maxOutputChannels']
    print(f"Index {i}: {device_info['name']}, Input Channels: {input_channels}, Output Channels: {output_channels}")


def initialize_audio_stream_input(device, format, channels, rate, chunk_size):
    pa = pyaudio.PyAudio()
    stream = pa.open(input_device_index=device, format=format, channels=1, rate=rate, input=True, frames_per_buffer=chunk_size)
    return pa, stream

def initialize_audio_stream_output(device, format, channels, rate, chunk_size):
    pa = pyaudio.PyAudio()
    stream = pa.open(output_device_index=device, format=format, channels=1, rate=rate, input=True, frames_per_buffer=chunk_size)
    return pa, stream

def close_audio_stream(pa, stream):
    stream.stop_stream()
    stream.close()
    pa.terminate()

format = pyaudio.paInt16
channels = 2
rate = 8000
chunk_size = 1024
duration = 10

device_index_microphone = 12  # Índice del dispositivo de entrada (micrófono)
device_index_speaker = 20    # Índice del dispositivo de salida (altavoces)

pa1, stream1 = initialize_audio_stream_input(device_index_microphone, format, channels, rate, chunk_size)
pa2, stream2 = initialize_audio_stream_output(device_index_speaker, format, channels, rate, chunk_size)

frames_combined = []

try:
    for _ in range(int(rate / chunk_size * duration)):
        audio_data_bytes1 = stream1.read(chunk_size)
        audio_data_bytes2 = stream2.read(chunk_size)
        
        # Convierte los datos de bytes a un arreglo numpy
        audio_array1 = np.frombuffer(audio_data_bytes1, dtype=np.int16)
        audio_array2 = np.frombuffer(audio_data_bytes2, dtype=np.int16)

        # Crea un arreglo de audio combinado con micrófono en el canal izquierdo y audio del PC en el canal derecho
        # combined_audio = np.add(np.frombuffer(b"".join(audio_array1), dtype=np.int16), np.frombuffer(b"".join(audio_array2), dtype=np.int16))
        # combined_audio = audio_array1 + audio_array2
        # combined_audio = np.concatenate((audio_array1, audio_array2))
        # combined_audio = np.column_stack((audio_array1, audio_array2))
        
        min_length = min(len(audio_array1), len(audio_array2))
        audio_array1 = audio_array1[:min_length]
        audio_array2 = audio_array2[:min_length]

        combined_audio = np.vstack((audio_array1, audio_array2)).T

        # Almacena los datos en frames_combined
        frames_combined.append(combined_audio.tobytes())

except KeyboardInterrupt:
    pass

close_audio_stream(pa1, stream1)
close_audio_stream(pa2, stream2)

# Crea un archivo WAV con el flujo de audio unificado (micrófono en el canal izquierdo y audio del PC en el canal derecho)
with wave.open("unified_audio.wav", "wb") as wf:
    wf.setnchannels(2)
    wf.setsampwidth(np.dtype(np.int16).itemsize)
    wf.setframerate(rate)
    wf.writeframes(b"".join(frames_combined))
