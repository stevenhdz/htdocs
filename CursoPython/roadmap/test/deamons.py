import threading
import time

def tarea_daemon():
    while True:
        print("Daemon en ejecución...")
        time.sleep(1)

# Crear un hilo daemon que se ejecutará en segundo plano
hilo = threading.Thread(target=tarea_daemon, daemon=True)
hilo.start()

print("El programa principal sigue ejecutando otras tareas...")
time.sleep(5)
print("El programa principal finaliza. El daemon se detendrá automáticamente.")
