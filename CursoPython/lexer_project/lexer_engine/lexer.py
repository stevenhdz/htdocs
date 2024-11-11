from lexer_engine.token import Token, TokenType, lookup_token_type


class Lexer:
    def __init__(self, source: str) -> None:
        self._source: str = source  # Código fuente a analizar
        self._position: int = 0  # Posición actual del caracter en el código fuente
        self._read_position: int = 0  # Posición de lectura en el código fuente
        self._character: str = ''  # Caracter actual que se está procesando
        self._read_character()  # Inicializar con el primer caracter

    def _read_character(self) -> None:
        """Leer el siguiente caracter del código fuente."""
        if self._read_position >= len(self._source):
            self._character = '\0'  # Fin de archivo (EOF)
        else:
            self._character = self._source[self._read_position]
        self._position = self._read_position  # Actualiza la posición actual
        self._read_position += 1  # Avanza la posición de lectura

    def _skip_whitespace(self) -> None:
        """Ignorar espacios en blanco y saltos de línea."""
        while self._character in ' \t\n\r':
            self._read_character()  # Lee el siguiente caracter

    def next_token(self) -> Token:
        """Obtener el siguiente token en el flujo de entrada."""
        self._skip_whitespace()

        if self._character == '=':
            token = Token(TokenType.ASSIGN, '=')  # Token de asignación
        elif self._character == '+':
            token = Token(TokenType.PLUS, '+')  # Token de adición
        elif self._character == ',':
            token = Token(TokenType.COMMA, ',')  # Token de coma
        elif self._character == '(':
            # Token de paréntesis izquierdo
            token = Token(TokenType.LPAREN, '(')
        elif self._character == ')':
            token = Token(TokenType.RPAREN, ')')  # Token de paréntesis derecho
        elif self._character == '"':
            token = self._read_string()  # Llama a la función para leer cadenas entre comillas
        elif self._character.isalpha():
            literal = self._read_identifier()  # Lee un identificador o palabra clave
            # Obtiene el tipo de token para el identificador
            token_type = lookup_token_type(literal)
            token = Token(token_type, literal)  # Crea el token correspondiente
        elif self._character == '\0':  # Fin de archivo
            token = Token(TokenType.EOF, '')  # Token de fin de archivo
        else:
            # Token para identificadores no reconocidos
            token = Token(TokenType.IDENT, self._character)

        self._read_character()  # Avanzar al siguiente caracter
        return token  # Retorna el token encontrado

    def _read_string(self) -> Token:
        """Leer una cadena entre comillas."""
        start = self._position + 1  # Inicia después de la comilla de apertura
        while True:
            self._read_character()  # Lee el siguiente caracter
            if self._character == '"' or self._character == '\0':  # Fin de la cadena o fin de archivo
                break
        # Obtiene el contenido de la cadena
        literal = self._source[start:self._position]
        # Retorna el token con la cadena
        return Token(TokenType.STRING_LITERAL, literal)

    def _read_identifier(self) -> str:
        """Leer un identificador (nombre de variable o palabra clave)."""
        start = self._position  # Posición inicial del identificador
        while self._character.isalnum() or self._character == '_':  # Permite letras, números y guiones bajos
            self._read_character()  # Lee el siguiente caracter
        # Retorna el identificador completo
        return self._source[start:self._position]
