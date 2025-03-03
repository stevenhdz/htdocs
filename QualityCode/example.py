# Nombres significativos
# Nombres de clases significativos en sustantivo
# Nombres de variables significativos verbo
# Nombres de funciones significativos verbo
# Funciones pequeñas, minimo de 5 a 15 lineas
# Evita comentarios innecesarios
# Menos argumentos en las funciones de 0 a 3 entradas
# No uses variables globales
# Principio de responsabilidad unica
# Evita condiciones anidadas y codigo complejo
# Evita efectos secundarios inesperados
# Usa excepciones en lugar de codigo de error
# No repitas el mismo código
# Manten una estructura clara en los archivos
# Testea tu código, pruebas unitarias
# Funciones con unica responsabilidad
# Reutiliza código
# Evita condiconales innecesarias, empieza con lo negativo y termina con lo positivo
# Aplica SOLID
# Utiliza logging
# Aprende de algoritmos de programación y estructuras de datos, optimiza tu código, notacion big O
# Seguridad en el codigo
# Control de versiones
# Aplica patrones y arquitecturas de software
# Separa la logica de negocio de la infraestructura
# Escribe codigo modular y desacoplado
# Documenta tu código
# Utiliza camelCase, snake_case, kebab-case, pascalCase
# Escribe codigo en inglés
# Usa constantes en vez de valores magicos o harcodeados
# Refactorizacion continua
# Lineas de código cortas
# Inmutabilidad
# Escribe codigo simple antes que el codigo inteligente o complejo
# No agregues funcionalidad sin la necesidad
# Principio demeter, comunicacion con dependencias directas
# Codigo autoexplicativo
# Comentario de codigo dice que hace el código, mas no como lo hace
# Use excepciones en vez de retornos
# No devuelvas nulos
# Las 3 leyes de TDD
# Reglas First
# las clases deben ser pequeñas
# Cohesion

class User:
    def __init__(self, name: str, email: str, password: str):
        """Inicializa un usuario con nombre, correo y contraseña."""
        self._name = name
        self._email = email
        self._password = password

    def update_password(self, new_password: str) -> None:
        """Actualiza la contraseña del usuario."""
        self._password = new_password

    def update_email(self, new_email: str) -> None:
        """Actualiza el correo del usuario."""
        self._email = new_email

    def update_name(self, new_name: str) -> None:
        """Actualiza el nombre del usuario."""
        self._name = new_name

    def get_name(self) -> str:
        """Obtiene el nombre del usuario."""
        return self._name

    def get_email(self) -> str:
        """Obtiene el correo del usuario."""
        return self._email
    
    def get_password(self) -> str:
        """Obtiene la contraseña del usuario."""
        return self._password
    
user = User("John Doe", "qNt4o@example.com", "password123")

user.update_password("new_password")
user.update_email("new_email")
user.update_name("new_name")

name = user.get_name()
email = user.get_email()
password = user.get_password()