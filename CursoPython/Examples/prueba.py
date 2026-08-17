import os
os.system("cls")

"""De todos los estudiantes de una universidad que cursan cuatro programas específicos, se requiere calcular el valor final a pagar 
por un estudiante en un semestre académico teniendo en cuenta que el valor inicial del semestre correspondiente
a tres Salarios Mínimos Legales Vigentes actuales. Quienes estudian Ingeniería industrial o Ingeniería de sistemas 
y además pertenezcan al semillero de investigación tienen un descuento del 25% si además tienen un promedio
a partir de 4.0 y hasta 4.5 o del 50% si tienen un promedio que sobrepasa el 4.5.
Los estudiantes de Psicología tienen un descuento del 40% si además de pertenecer al semillero de investigación su promedio
se encuentra a partir de 4.5. Los estudiantes de Fisioterapia tienen un descuento del 10% si pertenecen al semillero de investigación 
o tienen un promedio que sobrepasa el 4.5.  Se debe calcular y presentar el nombre del estudiante, el valor del descuento
y el valor neto a pagar."""

nombre= input("nombre del estudiante: ")
print("De que carrera es: Ingeniería industrial(I) o Ingeniería de sistemas (S) o Fisioterpia (F) o Psicologia (P)  ")
carrera= input("Ingrese carrera: ").upper()
semillero= input("Pertenece al semillero?: SI(X) - NO(Z): ").upper()
promedio= float(input("Cual es su promedio: "))
sb= 908526*3

if carrera == "I" or carrera == "S" or carrera == "F" or carrera == "P":
    if semillero == "X" and semillero != "Z":
        if semillero == "X" and promedio >= 4.0 and promedio <= 4.5 and ( carrera == "I" or carrera == "S" ):
            valorDescuento= sb*0.25
            valorSemestre= sb-valorDescuento
            print("el estudiante",nombre,"tiene un descuento de",valorDescuento,"y tiene que pagar una valor neto de:",valorSemestre)
        elif semillero == "X" and promedio > 4.5 and ( carrera == "I" or carrera == "S" ):
            valorDescuento= sb*0.50
            valorSemestre= sb-valorDescuento
            print("el estudiante",nombre,"tiene un descuento de",valorDescuento,"y tiene que pagar una valor neto de:",valorSemestre)
        elif carrera == "F" and semillero == "X" and promedio > 4.5:  
            valorDescuento= sb*0.10 
            valorSemestre= sb-valorDescuento 
            print("el estudiante",nombre,"tiene un descuento de",valorDescuento,"y tiene que pagar una valor neto de:",valorSemestre) 
        elif carrera == "P" and semillero == "X" and promedio > 4.5:  
            valorDescuento= sb*0.40 
            valorSemestre= sb-valorDescuento 
            print("el estudiante",nombre,"tiene un descuento de",valorDescuento,"y tiene que pagar una valor neto de:",valorSemestre)    
    else: 
        print("Carrera no disponible")    
else: 
 print("opcion no valida")







