
def menu(): 
    a=[]
    for i in range(4):    
        a.append(int(input()))
    print(a)


def matrixDPS(size,cantidad):
    for n in range(0,size):
        rows = cols = size
        print(' ')
        for i in range(rows):
            for j in range(cols):
                if (i==j or i==rows-1-j):
                    print('#', end = ' ')
                else:
                    print(0, end = ' ')
            print(' ')
             
if __name__ == "__main__":
    menu()
    matrixDPS(4,4)
    