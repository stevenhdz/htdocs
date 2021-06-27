import os

list = []
nombre = ""
id = 0
estrato = 0
grado = 0
promedio = 0.0
continuar = "S"
while (continuar == "S"):
    os.system('cls')
    print('    ')
    print(
        """
    -------------------------------------
        MENU PRINCIPAL
    -------------------------------------
        1. Registrar estudiantes
        2. Estudiantes registrados
        3. Consultar y actualizar datos
        4. Consultar y eliminar datos
        5. Salir
    -------------------------------------  
    """
    )
    print('    ')
    opcion = int(input("Digite opción: "))
    print('    ')
    if (opcion < 1 or opcion > 5):
        input("Opcion incorrecta, presione <ENTER>")
    elif (opcion == 1):
        os.system('cls')
        seguir = "S"
        while (seguir == "S"):
            conf = input("Deseas registrar Y/N? ").upper()
            if conf == "Y":
                nombre = (input("Nombre completo: "))
                id = (int(input("Numero de documento de identidad: ")))
                estrato = (int(input("Cual es su estrato 1,2 o 3: ")))
                grado = (int(input("Numero del grado a cual va:: ")))
                promedio = (float(input("Promedio ponderado: ")))
                list.append([id, nombre, estrato, grado, promedio])
                seguir = input("Desea continuar S/N? ").upper()
            else:
                seguir = "N"
    elif (opcion == 2):
        os.system('cls')
        print(list)
    elif (opcion == 3):
        input("Consultar y actualizar datos")
        print('    ')
        os.system('cls')
        seguir = "S"
        while (seguir == "S"):
            print('    ')
            entrada6 = int(input("Ingrese la cedula del registro a mirar: "))
            for x3 in list:
                if x3[0] == entrada6:
                    print(x3)
                    if list != "":
                        print('    ')
                        entrada2 = input("Ingrese nombre a reemplazar: ")
                        entrada10 = input("Ingrese nombre nuevo: ")
                        print('    ')
                        entrada3 = input("Ingrese el estrato a cambiar: ")
                        entrada4 = input(
                            "Ingrese el estrato nuevo entre 1,2 o 3: ")
                        print('    ')
                        entrada7 = input(
                            "Numero del grado del cual va a cambiar: ")
                        entrada8 = input("Numero nuevo del grado: ")
                        print('    ')
                        entrada01 = input("Promedio ponderado a cambiar: ")
                        entrada33 = input("Promedio ponderado nuevo: ")

                        if entrada2 != "" and len(entrada3) != 0 and len(entrada7)!= 0 and len(entrada01) != 0:
                            for x in list:
                                if x[1] == str(entrada2):
                                    x[1] = str(entrada10)
                                if x[2] == int(entrada3):
                                    x[2] = int(entrada4)
                                if x[3] == int(entrada7):
                                    x[3] = int(entrada8)
                                if x[4] == float(entrada01):
                                    x[4] = float(entrada33)
                            print(list)
                            print('    ')
                            entrada000 = input(
                                "Desea continuar S/N?: ").upper()
                            if entrada000 == "N":
                                seguir = "N"
                        else:
                            entrada2 = ""
                            entrada10 = ""
                            entrada3 = 0
                            entrada4 = 0
                            entrada7 = 0
                            entrada8 = 0
                            entrada01 = 0.0
                            entrada33 = 0.0

                    else:
                        print("No tiene informacion")
                else:
                    print("Empleado Inexistente!!")
                    seguir = "N"
    elif (opcion == 4):
        input("Consultar y borrar datos")
        os.system('cls')
        seguir = "S"
        while (seguir == "S"):
            print('    ')
            print("deseas eliminar alguno")
            print('    ')
            entrada = int(input("Ingrese el id a eliminar: "))
            for x1 in list:
                if x1[0] == entrada:
                    list.pop([0] == x1)
            print(list)
    else:
        continuar = "N"
print("bye!!")
