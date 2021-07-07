

class Persona:
    def __init__(self, nombre, ano, lenguaje):
        self.nombre = nombre
        self.ano = ano
        self.lenguaje = lenguaje

    def __str__(self):
        texto = f"Persona: [{self.nombre}, {self.ano}, {self.lenguaje}]"
        return texto