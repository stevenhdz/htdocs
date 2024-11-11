from enum import auto, Enum, unique
from typing import NamedTuple


@unique
class TokenType(Enum):
    # Definición de los tipos de tokens que puede reconocer el analizador léxico
    ASSIGN = auto()            # '='
    IDENT = auto()             # Identificador, como 'n1', 'n2'
    FLOAT = auto()             # 'float'
    INPUT = auto()             # 'input'
    STRING_LITERAL = auto()    # Cadena de texto, como "Intro número uno"
    PLUS = auto()              # '+'
    COMMA = auto()             # ','
    LPAREN = auto()            # '('
    RPAREN = auto()            # ')'
    PRINT = auto()             # 'print'
    EOF = auto()               # Fin de archivo o código


class Token(NamedTuple):
    token_type: TokenType  # Tipo de token, basado en la enumeración TokenType
    literal: str  # Literal asociado con el token (valor en texto)

    def __str__(self) -> str:
        # Método para representar el token como cadena: muestra tipo y literal
        return f'Type: {self.token_type}, Literal: {self.literal}'


def lookup_token_type(identifier: str) -> TokenType:
    # Diccionario de palabras clave (keywords) que tienen un tipo de token específico
    keywords = {
        "float": TokenType.FLOAT,
        "input": TokenType.INPUT,
        "print": TokenType.PRINT
    }
    # Retorna el tipo de token si el identificador es una palabra clave,
    # de lo contrario, retorna un identificador genérico (TokenType.IDENT)
    return keywords.get(identifier, TokenType.IDENT)
