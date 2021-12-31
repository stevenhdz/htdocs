import os
import PySimpleGUI as sGUI
from tabulate import tabulate
from colorama import Fore, Back, Style

def verTablaDatos(titulo, etiquetas, respuestas):
    print('\n\n',titulo)
    print(tabulate(respuestas, headers=etiquetas),'\n')

def verMensajeDatos(titulo, mensaje):
    print('\n\n',titulo)
    print(' Respuesta >> ',mensaje,'\n')
    
def stop():
    input("Presiona <enter> para continuar.")

def captarInt(mensaje):
    return int(input(mensaje))

def captarDatosProductoTXTx(titulo, estructura, datoAct=None):
    os.system('cls') #windows limpiar consolo
    os.system('clear') #linux y MacOS limpiar consola
    print()
    print(Fore.WHITE + Back.BLUE + titulo + Style.RESET_ALL + '\n')
    valores = {}
    try:
        i=1
        for item in estructura:
            if datoAct == None:
                if item['tipo']=='int':
                    valores[item['nombre']]=int(input(Fore.CYAN + '  ' + item['texto'] + Style.RESET_ALL))
                elif item['tipo']=='float':
                    valores[item['nombre']]=float(input(Fore.CYAN + '  ' + item['texto'] + Style.RESET_ALL))
                else:
                    valores[item['nombre']]=input(Fore.CYAN + '  ' + item['texto'] + Style.RESET_ALL)
            else:
                if item['tipo']=='int':
                    valores[item['nombre']]=input(Fore.CYAN + '  ' + item['texto']+' ('+ str(datoAct[i])+') '+ Style.RESET_ALL)
                    if valores[item['nombre']] == '':
                        valores[item['nombre']] = int(datoAct[i])
                elif item['tipo']=='float':
                    valores[item['nombre']]=input(Fore.CYAN + '  ' + item['texto']+' ('+ str(datoAct[i])+') '+ Style.RESET_ALL)
                    if valores[item['nombre']] == '':
                        valores[item['nombre']] = float(datoAct[i])
                else:
                    valores[item['nombre']]=input(Fore.CYAN + '  ' + item['texto'] +' ('+ datoAct[i]+') ' + Style.RESET_ALL)
                    if valores[item['nombre']] == '':
                        valores[item['nombre']] = str(datoAct[i])
            i+=1
        return valores
    except:
        mensajeError('Error en tipo de datos','Por favor verifique el tipo de dato e intente de nuevo.')
        return None

def captarDatosProductoTXT():
    os.system('cls') #windows limpiar consolo
    os.system('clear') #linux y MacOS limpiar consola
    print()
    print(Fore.WHITE + Back.BLUE + "INGRESO DE PRODUCTOS" + Style.RESET_ALL + '\n')
    valores = {}
    valores['codigo'] = input(Fore.CYAN + " Código del producto? " + Style.RESET_ALL)
    valores['nombre'] = input(Fore.CYAN + " Nombre del producto? " + Style.RESET_ALL)
    valores['tipo'] = input(Fore.CYAN + " Tipo del producto? " + Style.RESET_ALL)
    valores['valor'] = input(Fore.CYAN + " Valor por unidad? " + Style.RESET_ALL)
    return valores

def captarDatosProductoGUI(titulo, estructura):
    valores={}
    #print(sGUI.theme_list()) #Ver los temas disponibles
    sGUI.theme('SystemDefault1')   # tema del color 
    #Crea los componentes del a ventana
    componentes = []
    for item in estructura:
        componentes.append([sGUI.Text(item['texto']),sGUI.InputText()])
    componentes.append([sGUI.Button('Insertar'), sGUI.Button('Cancelar')])
    # Crear la ventana
    window = sGUI.Window(titulo, componentes)
    eventoClick, values = window.read()
    try:
        if eventoClick == 'Insertar': 
            i = 0
            for item in estructura:
                if item['tipo']=='int':
                    valores[item['nombre']]=int(values[i])
                elif item['tipo']=='float':
                    valores[item['nombre']]=float(values[i])
                else:
                    valores[item['nombre']]=values[i]
                i+=1
        window.close()
        return valores
    except:
        window.close()
        mensajeError('Error en tipo de datos','Por favor verifique el tipo de dato e intente de nuevo.')
        return None
    

def menu_principal():
    while True:
        os.system('cls') #windows limpiar consolo
        os.system('clear') #linux y MacOS limpiar consola
        print()
        print(Fore.CYAN + "MENU PRNCIPAL DE LA APLICACIÓN DE DATOS SQLite" + Style.RESET_ALL)
        print(Fore.BLACK + Back.GREEN + " Versión Inventario Productos " + Style.RESET_ALL)
        print(
            '''
            1) Insertar un nuevo producto (Crud)
            2) Listar los productos       (cRud)
            3) Actualizar un producto     (crUd)
            4) Borrar un producto         (cruD)

            0) Salir del programa
            ----------------------------------------------    
            '''
        )
        opcion = int(input('Cual opcion desea ejecutar? '))
        if opcion >= 0 and opcion <= 4:
            return opcion
        mensajeError('ERROR EN LA OPCIÓN','Opción no valida, seleccione otra opción')
        
       

def mensajeError(titulo, mensaje):
    # Colorama
    # Fore: BLACK, RED, GREEN, YELLOW, BLUE, MAGENTA, CYAN, WHITE, RESET.
    # Back: BLACK, RED, GREEN, YELLOW, BLUE, MAGENTA, CYAN, WHITE, RESET.
    # Style: DIM, NORMAL, BRIGHT, RESET_ALL
    print()
    print(Fore.RED + Back.YELLOW + titulo + Style.RESET_ALL)
    print(Fore.RED + mensaje + Style.RESET_ALL)
    input("Presiona <enter> para continuar.")
    