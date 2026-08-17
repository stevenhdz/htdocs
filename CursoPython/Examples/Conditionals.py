def statements():
    x  = str(2)
    x1 = int(2)
    x2 = bool(1)
    x3 = float(2)
    x4 = complex(1,1)
    print(type(x4))

    num = int(input("ingrese dato: "))
    if num < 0:
       print(num)
    else:
        print("equivale a: ", num)

    
    cad = str(input("ingresar dato: "))
    if cad == '2' or cad == '3' :
        print(cad)
    elif cad != '3':
        print("es diferente a 3 ")
    else:
        print("el dato es: ",cad)

    
    n = input("Dato: ")
    n = int(n)
    if n < 3 and n != 0 :
        print(n)
    elif n > 3 :
        print(n)   
    else:
        print("error")

    n1 = input("Dato: ")
    n1 = int(n1)
    if n1 == 3:
        print(n1 is 3)  #is solo devuelve true o false comparador
    else:
        print("error")   


    words = ['alex','camilo','marta']
    print(len(words))

    for f in words:
        print(f, len(f)) #len me permite contar palabras o vocales o numeros o datos


    for p in words:
        print(words[1])
        print(len(words[1]))
        
        print(words[2])
        print(len(words[2]))

    num = 0
    for i in range(num, 20, 3):   #range(1,10)      #range(0,20,3) empieza desde 0 se va en 3 en 3 y no pasa el 20
        print(i) #incrementarle a la i + 1
    
    print(range(1,10)) #range(0, 10)
    
    print(sum(range(4)))  #0+1+2+3

    print(list(range(5)))

    

    for n in range(2,10):
        for x in range(2,n):
            if n % x == 0:
                print(n, 'igual', x, '*', n//x)
                break
        else:
            print(n, 'es un numero primo')
        # n % x == 0  % = modulo = divmod(n,x) == 0 
        # 2 % 2 == 0  residuo

        # rango es 1,2,3 => x => x = 1,2,3

    for x in range(1,10):
        if x * 2 != 0:
            print("el numero es", x)
            continue
        print("numero diferente", x)

    boool = True
    while boool:
        # print('xxx')
        pass # interrumpir  exit() quit()

    def fib(n):
        """Print a Fibonacci series up to n."""
        a, b = 0, 1
        while a < n:
            print(a, end=' ')
            a, b = b, a+b
        print()
    # Enviar 2000 a la funcion fib(n)
    fib(2000)


    # hacer una funcion que sume dos parametros traidos a la funcion 
    # variables suma,x,p
    # mostrar suma de los numeros

    def sum1(x,p):
        suma = x+p
        print(suma)
    sum1(10,11)  

    def sub1(l,r):
        resta= l-r
        print(resta) 
    sub1(20,14)
    

    # multiplicacion y una resta sum(2+b)*3
    # un dato quemado
    # multi1, f,g,t, resta, total
    # total lo imprimiremos

    def uta1(t,f,g):
        multi1 = 10*f
        resta1 = g
        acum = multi1+(resta1-t)
        print(acum)
    uta1(10,9,9)

    import math

    def pot1(v,m):
        elev= math.pow(v,m)
        print(round(elev))
    pot1(7.156,2)

    def pot2(v,m):
        elev = v**m
        print(int(elev))
    pot2(7.121212,3)

    def my_function(fname):
        print(fname + " Refsnes")
    my_function("Emil")
    my_function("Tobias")
    my_function("Linus")

    #https://www.geeksforgeeks.org/gfact-50-python-end-parameter-in-print/
    #https://es.quora.com/Qu%C3%A9-hace-la-funci%C3%B3n-n-en-Python
    #https://entrenamiento-python-basico.readthedocs.io/es/latest/leccion3/tipo_cadenas.html


if __name__ == '__main__':    #valida si funcion raiz existe
    statements()   #indico funcion raiz