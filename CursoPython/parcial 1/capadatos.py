from colorama import Fore, Back, Style
import random


iconos = '😒😍❤️😂☺️😊😘😭😩💕😔😏😁😳👍🏻✌🏻😉🐶🐭🐹🐰🦊🐻🐼🐨🐯🦁🐮🐷🐽🐸🐵🙈🙉🙊🐒🐔🐧🐦🐤🐣🐥🦆🦅🦉🦇🐺🐗🐴🦄🐝🐛🦋🐌🐞🐜🦟🦗🕷🕸🦂🐢🐍🦎🦖🦕🐙🦑🦐🦞🦀🐡🐠🐟🐬🐳🐋🦈🐊🐅🐆🦓🦍🦧🐘🦛🦏🐪🐫🦒🦘🐃🐂🐄🐎🐖🐑🐐🦌🐕🐩🦮🐕‍🦺🐈🐓🦃🦚🦜🦢🦩🕊🐇🦨🦡🦦🦥🦥🐁🐀🐿🦔🐾🐉🐲🌵🎄🌲🌳🌿☘️🍀🎍🎋🍃🍂🍁🍄'

def descifrado(mensaje):
    print(Fore.GREEN + f'\nEl mensaje descifrado ubicado en text.txt es: {mensaje}')

def cifrar(mensaje, aleatorio):
    cifrado = ''
    for icono in mensaje:
        clave = aleatorio ** 2
        s = iconos.find(icono) + clave
        modulo = int(s) % len(iconos)
        cifrado = cifrado + str(iconos[modulo])
        archivo = open('text.txt', 'w')
        archivo.write(cifrado)
        archivo = open('text1.txt', 'w')
        archivo.write(mensaje)
        archivo.close()
    return cifrado

def descifrar(mensaje, aleatorio):  
    cifrado = ''
    for icono in mensaje:
        clave = aleatorio ** 2
        s = iconos.find(icono) - clave
        modulo = int(s) % len(iconos)
        cifrado = cifrado + str(iconos[modulo])
        archivo = open('text1.txt', 'r')
        contenido = archivo.read()
        archivo.close()
        return contenido
    return cifrado

def ingresar_mensaje(opcion):
    num = random.randint(1,1000000)
    if opcion == 1:
        return_mensaje = 'text1.txt'
    else:
        return_mensaje = 'text.txt'
    mensaje = str(input(f'Mensaje almacenado en el archivo {return_mensaje}: ')).lower()
    aleatorio = num

    if opcion == 1:
        mensaje = cifrar(mensaje, aleatorio)
        print('\n')
        print(Fore.GREEN +'Cifrado y Guardado en text.txt')
        print('cifrado '+mensaje)
        print('Su token es: ')
        print(aleatorio)
        print('\n')
    else:
        mensaje =descifrar(mensaje, aleatorio)
        descifrado(mensaje)
        
