
clase Persona():

def __init__(self, id, nombre):
    self.id = id
    self._nombre = nombre

def setNombre(self, nombre):
    self._nombre = nombre

def getNombre(self):
    return self._nombre

def __str__(self):
    return "Persona: {"+ str(self.id) +":}" + self.getNombre