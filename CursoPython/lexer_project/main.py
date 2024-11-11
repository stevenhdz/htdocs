from lexer_engine.lexer import Lexer
from gui.lexer_app import LexerApp

# Definición del código fuente como una cadena multi-línea
source_code = '''
n1=float(input("Intro número uno: "))
n2=float(input("Intro numero dos: "))
suma=n1+n2
print("La suma es: ", suma)
'''

# Inicializa el lexer con el código fuente
lexer = Lexer(source_code)
# Crea la aplicación de la interfaz de usuario, pasando el lexer y el código fuente como parámetros
app = LexerApp(lexer, source_code)
# Ejecuta la aplicación, iniciando la interfaz de usuario
app.run()
