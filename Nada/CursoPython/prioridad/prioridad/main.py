
def quitarCondicionPersonaDiscapacitada(indiscapacitado):
    try:
        personaAtendida = indiscapacitado.pop(0)
        return(personaAtendida)
    except:
        pass

def desencolar(persona):
    try:
        personaAtendida = persona.pop(0)
        return(personaAtendida)
    except:
        pass

prioridad = []
fila = []
names = []
indiscapacitado = []
persona = []

def menu():
    while True:
        opcion = int(input(
        '''
        **************************************
        |           PRIORIDADES             x|
        **************************************
        1. Agregar personas a la fila        | 
        2. Atender personas normal           | 
        3. Omitir no hare fila               |
        **************************************

        Ingrese una opcion numerica existente:
        \n
        '''
        ))
        if opcion == 1:
          print("¿Ingrese su cedula o tarjeta identidad? ")
          indicativo = input()
          print("¿cual es su nombre?")
          names = input()
          print(names + ",  ¿Posee alguna condicion de discapacidad?")
          print("SI?")
          afirmacion = input()
          if afirmacion != "":
              indiscapacitado.append(names +" "+ indicativo)
          else:
              persona.append(names +" "+ indicativo)
        elif opcion == 2:
            if len(indiscapacitado) == 0 and len(persona) == 0:
                print("Fila 0 personas")
            else:
                if len(indiscapacitado) != 0:
                    personaAtendida = quitarCondicionPersonaDiscapacitada(indiscapacitado)
                    print("Atencion a: ", personaAtendida)
                else:
                    personaAtendida = desencolar(persona)
                    print("Atencion a: ", personaAtendida)
        elif opcion == 3:
            print("Vuelve la proxima")
            break
        else:       
            print("La opcion no existe")
            break
        

        print("con indiscapacidad: ", indiscapacitado)
        print("las personas de la fila: ", persona)


if __name__=='__main__':
   menu()