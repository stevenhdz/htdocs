

class Stack:
    def __init__(self):
        self.collection = []
    
    def push(self, data):
        self.collection.append(data)

    def pop(self):
        try: 
            return self.collection.pop()
        except:
            print('Error in pop.')

    def __str__(self):
        text = 'List \n'
        i = 0
        if len(self.collection) > 0:
            for item in self.collection:
                text += f"[{i}]: {item} \n"
                i+=1
            return text
        else:
            return "This list is empty. \n"



class Pila:
    def __init__(self):
        self.conjunto = []
    
    def apilar(self, dato):
        self.conjunto.append(dato)
    
    def desapilar(self):
        try:
          return self.conjunto.pop()
        except:
          return "Error en desapilar\n"

    def __str__(self):
        texto = 'Lista \n'
        i = 0
        if len(self.conjunto) > 0:
            for item in self.conjunto:
                texto += f"[{i}]: {item} \n"
                i+=1
            return texto
        else:
            return "La lista está vacia \n"



class Cola:
    def __init__(self):
        self.conjunto = []
    
    def encolar(self, dato):
        self.conjunto.append(dato)
    
    def desencolar(self):
        try:
          return self.conjunto.pop(0)
        except:
          return "Error en desencolar\n"

    def __str__(self):
        texto = 'Lista (Cola) \n'
        i = 0
        if len(self.conjunto) > 0:
            for item in self.conjunto:
                texto += f"[{i}]: {item} \n"
                i+=1
            return texto
        else:
            return "La lista está vacia \n"

