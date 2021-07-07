



def lists():  #funcion
    lista = [1,2,81,27]    #posicones normales [1,2,6,7] en posiciones = [0,1,2,3]
    print(lista) #lista completa
    print(lista[3]) #obtener numero por posicion 7
    print(lista[-3])    # -> [0,1,2,3]     obtengo 2      <- [-4,-3,-2,-1]
    print(lista[-3:])    # -> [0,1,2,3]     omitir el 1      <- [-4,-3,-2,-1]
    print(lista[:]) # igual a print(lista)
    print(lista+[64,12,15,27]) #add mas valores a mi lista

    elev = 3 ** 3 # 27
    print(lista[3] == elev) # lista = [1,2,6,27]    valida si el 27 existe en la posicion 3 y devuelve o tru o false
    
    pot = 3 ** 4
    print(lista[2] == pot)

    listss = [1,2,3]
    listss[1] = 64  #le paso la posicion el numero a insertar
    print(listss)

    lust = [20.0,20.04,20.08,20.12]
    lust[2] = 21.01
    print(lust)

    lust.append(33) #adicionar numero a la lista
    lust.append(33.3)
    print(lust)

    resta= 2-1
    lust.append(resta)
    print(lust)

    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    print(letters)

    letters[2:5] = ['CASSSS','CSS1','CSSW']   #cambiar *replace* datos anulando posiciones 2 primera y 2 ultimas, luego desde la 1 cuenta hasta 5 y es la que cambia aunq si no esta anulada toma el cambio
    print(letters)

    letters[1:6] = ['b', 'CASSSS', 'CSS1', 'CSSW','xd']  
    #['a', 'b', 'CASSSS', 'CSS1', 'CSSW', 'xd', 'g']
    print(letters)

    letters[3:4] = ['Uya']  #['a', 'b', 'CASSSS', 'Uya', 'CSSW', 'xd', 'g']
    print(letters)

    letters[2:4] = []   # eliminar y omitir el de la posicion 5 
    #['a', 'b', 'CSSW', 'xd', 'g']
    print(letters)

    letters[1:-2] = [] # borrar todo excepto el -2 que es xd
    #['a', 'xd', 'g']
    print(letters)

    letters1 = ['a', 'b', 'c', 'd', 'e']
    print(letters1)

    letters1[-3:3] = [] # borrando solo e recorre posicion y luego todo y donde se encuentra borra
    print(letters1)

    letters1[:] = [] #vaciando todo la lista 
    print(letters1)

    letters2 = ['new','new2','new23'] #cantidad de datos
    print(len(letters2))

    a = ['a', 'b', 'c']
    n = [1, 2, 3]
    list123 = [a,n]  # [a+n]
    # [['a', 'b', 'c'],[1, 2, 3]]
    print(list123)  # unir dos listas en una lista
    print(list123[0])
    print(list123[0][0]) # acceder a un dato de una lista de listas

    listas1234 = ['alex',2,2.2,True,['hola'],['camilo','alex']]
    print(listas1234) #todo
    print(listas1234[2]) # 2.2
    print(listas1234[4][0]) #hola
    print(listas1234[5][0]) #camilo
    print(listas1234[5][1]) #alex

    listas12345 = ['alex']
    print(listas12345[0][1]) #obtener letra l



    #a = 0
    #b = 1

    #a = 1
    #b = 2

    #a = 2
    #b = 3

    #a = 3
    #b = 5

    #a = 4
    #b = 8 

    try:
        a, b = 0, 1
        while a < 10:
          print(a)
          a, b = b, a+b
    except:
      print('error')


    #tuplas inmutables no pueden ser alteradas
    c,d,h = 7,9+10,4
    print(c,d,h)

    #while = mientras
    #do - while = mientras que


    ib = 256*256
    print('The value',ib)



   
if __name__ == '__main__':    #valida si funcion raiz existe
    lists()   #indico funcion raiz