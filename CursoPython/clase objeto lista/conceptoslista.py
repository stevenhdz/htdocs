from stack import *

def basico():
    #coleccion es un conjunto de datos
    frutas = ['Manzana', 'Pera', 'Banana', 'Uva', 'Lulo', 'Guayaba', 'Mango', 'Nispero']
    #print(f"Todas las frutas: {frutas}")
    fOrdenadas = sorted(frutas)
    #print(f"{frutas} :ordenadas: {fOrdenadas}")
    frutas.sort()
    #print(f"Todas las frutas ordenadas: {frutas}")
    frutas.reverse()
    print(f"Todas las frutas ordenadas invertida: {frutas}")
    print(f"primera fruta: {frutas[0]}")
    print(f"primera fruta: {frutas[-2]}")
    print(f"para obtener los n ultimos {frutas[-2:]}")
    print(f"para obtener los n primeros (Julieth) {frutas[-1:]}")
    print(f"para obtener los n primeros (Cluadia){frutas[:4]}")
    print(f"para obtener los n primeros (Cluadia){frutas[4:]}")


def ejemploPila():
    pila = Pila()
    pila.apilar('Manzana')
    pila.apilar('Pera')
    pila.apilar('Lulo')

    print(pila)


    print(pila , f" Sale: {pila.desapilar()}\n{'-'*10}\n")
    print(pila , f" Sale: {pila.desapilar()}\n{'-'*10}\n")
    print(pila , f" Sale: {pila.desapilar()}\n{'-'*10}\n")
    print(pila , f" Sale: {pila.desapilar()}\n{'-'*10}\n")
 
def ejemploCola():
    cola = Cola()
    cola.encolar('Manzana')
    cola.encolar('Pera')
    cola.encolar('Lulo')

    print(cola)


    print(cola , f" Sale: {cola.desencolar()}\n{'-'*10}\n")
    print(cola , f" Sale: {cola.desencolar()}\n{'-'*10}\n")
    print(cola , f" Sale: {cola.desencolar()}\n{'-'*10}\n")
    print(cola , f" Sale: {cola.desencolar()}\n{'-'*10}\n")

def main():
    ejemploCola()
    ejemploPila()

if __name__=='__main__':
    main()