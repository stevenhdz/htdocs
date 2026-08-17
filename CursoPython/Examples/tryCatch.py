try:
    a = 1
    print(1+3)
except NameError:
    print(NameError + 'hola')
finally:
    print("The 'try except' is finished")
    pass