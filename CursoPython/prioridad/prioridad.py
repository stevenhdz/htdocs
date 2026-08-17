import heapq

class prioridad:
	def __init__(self):
		self.cola = []
		self.indice = 0
		
	def push(self, elemento, prioridad):
		heapq.heappush(self.cola, (-prioridad, self.indice, elemento))
		self.indice += 1
		
	def pop(self):
		return heapq.heappop(self.cola)[-1]

""" TODO: heapq.heappop(heap)Pop and return the smallest item from the heap, maintaining the heap invariant. If the heap is empty, IndexError is raised. """
		

class Fila:
	def __init__(self, nombre):
		self.nombre = nombre
		
	""" TODO: FORMATEA LA VARIABLE CON REPR Y !r """	
	def __str__(self):
		return self.nombre
		

persona = prioridad()
persona.push(Fila('Ana'), 20)
persona.push(Fila('Pedro'), 32)
persona.push(Fila('Carlos'), 18)
persona.push(Fila('Juanita'), 90)

print(persona.pop())
print(persona.pop())
print(persona.pop())
print(persona.pop())

if __name__=='__main__':
   prioridad()