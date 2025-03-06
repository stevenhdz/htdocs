import threading
import time

def tarea(nombre, espera, dependiente=None):
    if dependiente:
        dependiente.join()  # Espera a que la tarea dependiente termine antes de iniciar
    print(f"Iniciando {nombre}...")
    time.sleep(espera)  # Simula tiempo de ejecución
    print(f"Finalizando {nombre}")

# Crear tareas con dependencias
tarea0 = threading.Thread(target=tarea, args=("Tarea 0 (independiente)", 1))
tarea1 = threading.Thread(target=tarea, args=("Tarea 1", 3))
tarea2 = threading.Thread(target=tarea, args=("Tarea 2 (depende de 1)", 2, tarea1))
tarea3 = threading.Thread(target=tarea, args=("Tarea 3 (independiente)", 1))

# Iniciar tareas
tarea0.start()
tarea1.start()
tarea2.start()
tarea3.start()

# Esperar a que todas terminen
tarea0.join()
tarea1.join()
tarea2.join()
tarea3.join()

print("Todas las tareas han finalizado.")
