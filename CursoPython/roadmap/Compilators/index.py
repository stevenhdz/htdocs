import re


class Compiler:
    def __init__(self, expression):
        self.expression = expression

    def lexical_analysis(self):
        """Fase 1: Análisis Léxico"""
        # Usamos expresiones regulares para separar correctamente los tokens
        # Capturamos variables, operadores y números
        tokens = re.findall(r'[a-zA-Z]+|[-+*/=()]|\d+', self.expression)
        print("Fase 1: Análisis Léxico:")
        print(f"Tokens: {tokens}\n")
        return tokens

    def syntactic_analysis(self, tokens):
        """Fase 2: Análisis Sintáctico"""
        # Comprobamos la validez sintáctica básica de la expresión segun el lenguaje de programación
        if len(tokens) >= 5 and tokens[1] == '=':
            print("Fase 2: Análisis Sintáctico: Expresión válida.")
        else:
            print("Fase 2: Análisis Sintáctico: Expresión inválida.")
        print(f"Tokens analizados: {tokens}\n")

    def semantic_analysis(self, tokens):
        """Fase 3: Análisis Semántico"""
        # Comprobamos que las variables utilizadas estén definidas
        variables_permitidas = {'x', 'y', 'z'}
        variables_encontradas = {token for token in tokens if token.isalpha()}

        if variables_encontradas.issubset(variables_permitidas):
            print("Fase 3: Análisis Semántico: Todas las variables están definidas.")
        else:
            print("Fase 3: Análisis Semántico: Se encontraron variables no definidas.")
        print(f"Variables encontradas: {variables_encontradas}\n")

    def code_generation(self, tokens):
        """Fase 4: Generación de Código"""
        # Generamos el código basado en los tokens analizados
        if len(tokens) >= 5:
            left_var = tokens[0]  # Variable a la izquierda del '='
            # Reunimos la parte derecha de la expresión
            # Unimos desde el tercer token en adelante
            right_expr = ' '.join(tokens[2:])
            code = f"{left_var} = {right_expr}"
            print("Fase 4: Generación de Código:")
            print(f"Código generado: {code}\n")
            return code
        else:
            print(
                "Fase 4: Generación de Código: No hay suficientes tokens para generar código.\n")
            return ""

    def optimization(self, code):
        """Fase 5: Optimización"""
        # Intentamos optimizar el código generado
        if code:
            # En este ejemplo, la optimización es un simple reemplazo
            optimized_code = code.replace(
                "y = x * z - y * z", "y = (x - y) * z")
            print("Fase 5: Optimización:")
            print(f"Código optimizado: {optimized_code}\n")
        else:
            print("Fase 5: Optimización: No hay código para optimizar.\n")


# Ejemplo de uso del compilador
expression = "y = x * z - y * z"
compiler = Compiler(expression)

# Ejecutamos las fases del compilador
tokens = compiler.lexical_analysis()          # Fase 1
compiler.syntactic_analysis(tokens)           # Fase 2
compiler.semantic_analysis(tokens)            # Fase 3
code = compiler.code_generation(tokens)       # Fase 4
compiler.optimization(code)                   # Fase 5
