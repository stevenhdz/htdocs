from colorama import Fore, Back, Style
from capadatos import *


def menu():
    while True:
      opcion = int(input(
        '''
        **************************************
        |              PARTIAL              x|
        **************************************
        1. Encriptar y enviar text.txt       | 
        2. Desencriptar y leer text1.txt     |
        **************************************

        Ingrese una opcion numerica existente:
        \n
        '''
      ))
      try:
        if opcion >= 1 and opcion <= 2:
          return ingresar_mensaje(opcion)
        Error('Opcion invalida', 'Intente con otra opción, por favor!')
      except:    
        Error('Opcion invalida', 'Intente con un número...')

def Error(titulo, mensaje):
          print(Fore.RED +    '''\n*********************************''')
          print(titulo)
          print('''----------------------------------''')
          print(mensaje)
          print(Style.RESET_ALL)
          input('''
        ***---------***----------***
        | <enter> para continuar!  |
        **-----------*------------**
          '''
          )
         
def mostrarMensaje(msg):
  print(Fore.GREEN + 'Sistema Encriptar>>> '+Style.RESET_ALL +  msg)
