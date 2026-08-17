
#funciones para agregar a la lista
def adicionar(lista, elemento):
  #siempre adiciona al final
  lista.append(elemento)

def agregar(lista, lugar, elemento):
    lista.insert(lugar, elemento)


#funciones para retirar
def retirarValor(lista, elemento):
  try:
    lista.remove(elemento)
  except:
    pass

def retirarLugar(lista, lugar):
  try:
    lista.pop(lugar)
  except:
    pass

def retirarUltimo(lista):
  try:
    lista.pop()
    #lista.pop(-1)
  except:
    pass

def retirarPrimero(lista):
  try:
    lista.pop(0)
  except:
    pass

def retirarTodos(lista):
  lista.clear()

def actualizarPosicion(lista, lugar, elemento):
  try:
    lista.pop(lugar)
    lista.insert(lugar, elemento)
  except:
    pass


#otras funciones
def posicionValor(lista, elemento):
  try:
    return lista.index(elemento)
  except:
    return None

#ordenar
def ordenar(lista):
  lista.sort()

def ordenar2(lista):
  return sorted(lista)


#ver la lista, ciclo
def verlista(lista):
  texto = ""
  i=0
  for elemento in lista:
    texto += f"[{i}]: {elemento}\n"
    i+=1
  return texto

def main():
  lista1 = []
  adicionar(lista1, 45)
  adicionar(lista1, 13)
  adicionar(lista1, 93)
  agregar(lista1,1,100)

  print('lista original')
  print(verlista(lista1))

  lista1cpy = lista1.copy()
  adicionar(lista1cpy,123)
  actualizarPosicion(lista1cpy,2,5000)


  print('Ordenar lista')
  ordenar(lista1)
  #xyz = ordenar2(lista1)
  print('lista1')
  print(verlista(lista1))
  print('lista1cpy')
  print(verlista(lista1cpy))

  elemento = 93
  x = posicionValor(lista1, elemento)
  if x:
    print(f"el elemento {elemento} esta en la posicion {x} en la lista.")
  else:
    print(f"el elemento {elemento} no esta en la lista.")

  #print('Retirar el valor 100')
  #retirarValor(lista1, 100)
  #print(verlista(lista1))
  
  #print('Adiciona el valor 100 en la segunda posicion')
  #agregar(lista1,1,100)
  #print(verlista(lista1))

  #print('retirar la segunda posicion')
  #retirarLugar(lista1,1)
  #print(verlista(lista1))

  #print('retirar la segunda posicion')
  #retirarPrimero(lista1)
  #print(verlista(lista1))




if __name__=='__main__':
  main()
