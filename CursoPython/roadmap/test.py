import re


def is_constante_decimal(n):
    """
    Verifica si la cadena de entrada representa una constante decimal sin signo.

    Parámetros:
    n (str): La cadena a verificar.

    Retorna:
    bool: True si n es una constante decimal válida, False en caso contrario.

    La función utiliza una expresión regular para validar que la entrada tenga al menos
    un punto decimal y un dígito. Se aceptan formatos como '10.5' y '.5', pero no 
    se aceptan números enteros o formatos incorrectos.
    """
    return bool(re.match(r"^\d+\.\d+$|^\.\d+$", n))


def main():
    """
    Función principal que solicita al usuario una constante decimal
    y verifica si es válida.

    Se solicita al usuario que introduzca un valor, y se imprime el resultado de la 
    función es_constante_decimal. Se mostrará True si es una constante decimal 
    válida, o False en caso contrario.
    """
    n = input("Introduce una constante decimal: ")
    print(is_constante_decimal(n) if True else False)


if __name__ == "__main__":
    main()
