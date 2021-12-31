""" 
def suma(a,b):
  c = a+b """
  

class Persona:
    #TODO: CONSTRUCTOR
    def __init__(self, nombre, identificacion, telefono, edad, peso, sexo, estatura):
        self.nombre = nombre
        self.identificacion = identificacion
        self.telefono = telefono
        self.edad = edad
        self.peso = peso
        self.sexo = sexo
        self.estatura = estatura
        
    def imc(self):
      return round(self.peso/(self.estatura**2),2)

    def __eq__(self, persona):
      if self.edad == persona.edad and self.peso == persona.peso and self.estatura == persona.estatura:
        return True
      return False

    def __str__(self):
      texto = f"""
      Clase Persona
        Nombre: {self.nombre}  
        ID: {self.identificacion}
        Teléfono: {self.telefono}
        Edad: {self.edad}
        Sexo: {self.sexo}
        Peso: {self.peso}
        Estatura: {self.estatura}
        IMC: {self.imc()}
      """
      return texto

        