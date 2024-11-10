# Definición de la gramática en formato de diccionario
grammar = {
    'A': [('I', '=', 'D')],
    'I': [('i',)],
    'D': [('T', 'L'), ('-', 'T', 'L')],
    'L': [('+', 'T', 'L'), ('-', 'T', 'L'), ('ϵ',)],
    'T': [('F', 'S')],
    'S': [('*', 'F', 'S'), ('/', 'F', 'S'), ('ϵ',)],
    'F': [('P',)],
    'P': [('(', 'D', ')'), ('i',)]
}

# Conjunto de terminales
terminals = ['i', '=', '+', '-', '*', '/', '(', ')']

# Función para el reconocedor descendente


def parse(input_string):
    stack = ['A']  # Inicializamos la pila con el símbolo inicial 'A'
    # Eliminamos espacios y tokenizamos
    input_tokens = list(input_string.replace(" ", ""))
    input_tokens.append('$')  # Agregamos un marcador de fin de cadena '$'

    while len(stack) > 0:
        top = stack.pop()  # Extraemos el símbolo de la pila
        # El token actual es el primero de la entrada
        current_token = input_tokens[0]

        # Si top es un terminal
        if top in terminals or top == '$':
            if top == current_token:
                input_tokens.pop(0)  # Consumimos el token
                if top == '$':  # Si llegamos al final, hemos terminado
                    print("Cadena aceptada.")
                    return True
            else:
                print(
                    f"Error: se esperaba '{top}', pero se encontró '{current_token}'")
                return False

        # Si top es un no terminal
        elif top in grammar:
            production_found = False
            for production in grammar[top]:
                first_symbol = production[0]

                # Si la producción comienza con epsilon (ϵ)
                if first_symbol == 'ϵ':
                    production_found = True
                    break

                # Seleccionamos la producción si coincide con el token actual
                if first_symbol == current_token or (first_symbol in terminals and first_symbol == current_token):
                    # Empilamos la producción en orden inverso
                    stack.extend(reversed(production))
                    production_found = True
                    break
                elif first_symbol in grammar and (current_token in terminals):
                    # Buscamos la primera producción válida basada en el símbolo siguiente
                    production_found = True
                    # Empilamos la producción
                    stack.extend(reversed(production))
                    break

            if not production_found:
                print(
                    f"Error: no se encontró producción para el no terminal '{top}' con token '{current_token}'")
                return False
        else:
            print(f"Error: símbolo desconocido '{top}'")
            return False

    if input_tokens == ['$']:  # La entrada debe haberse consumido completamente
        print("Cadena aceptada.")
        return True
    else:
        print("Error: la cadena no fue completamente consumida.")
        return False


# Prueba con la línea de la gramática: a=b+c => i=i+i
test_string = "i=i+i"
parse(test_string)
