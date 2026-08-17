class UseYield:
    def __init__(self, start: int = 0):
        self.start = start

    def count(self):
        n = self.start
        while True:
            # memoria consumida por el yield es de 16 bytes en 64 bits y 8 bytes en 32 bits
            # generador es un iterador que consume menos memoria que una lista o un diccionario
            yield n
            n += 1

start = 10
yi = UseYield(start)
result = yi.count()

print(type(result))

for _ in range(start):
    print(next(result))
