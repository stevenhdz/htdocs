import redis

client = redis.Redis(host='localhost', port=6379, db=0)

client.set("usuario:1:nombre", "Juan Pérez")

nombre = client.get("usuario:1:nombre")

print(nombre.decode("utf-8"))


client.lpush("tareas", "Hacer mercado")
client.lpush("tareas", "Estudiar Python")
client.lpush("tareas", "Ir al gimnasio")

tareas = client.lrange("tareas", 0, -1)
print([t.decode("utf-8") for t in tareas])

ultima_tarea = client.rpop("tareas")
print("Última tarea realizada:", ultima_tarea.decode("utf-8"))


client.hset("usuario:2", mapping={
    "nombre": "Ana",
    "edad": 25,
    "email": "ana@example.com"
})

print(client.hget("usuario:2", "nombre").decode("utf-8"))

usuario = client.hgetall("usuario:2")
print({k.decode("utf-8"): v.decode("utf-8") for k, v in usuario.items()})


#Cachear resultados (ej. consultas SQL).
#Almacenar sesiones.
#Filas de trabajo (queues).
#Contadores y rankings.