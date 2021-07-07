from stack import *
from clasePersona import *


def main():
    personas = Pila()

    personas.apilar(Persona('Edi', 1972, 'Python'))
    personas.apilar(Persona('Ana Nova', 1987, 'Java'))
    personas.apilar(Persona('Lucas', 1962, 'Python'))

    print(personas)

    print(personas , f" Sale: {personas.desapilar()}\n{'-'*10}\n")

if __name__ == '__main__':
    main()