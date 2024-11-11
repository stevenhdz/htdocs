import tkinter as tk
from lexer_engine.lexer import Lexer
from lexer_engine.token import TokenType


class LexerApp:
    def __init__(self, lexer: Lexer, source_code: str):
        self.lexer = lexer
        self.source_code = source_code  # Guardamos el código fuente
        self.window = tk.Tk()
        self.window.title("Tabla de Símbolos - Lexer")
        self.text = tk.Text(self.window, height=40, width=45)  # Ancho ajustado
        self.text.pack()
        self._display_tokens()

    def _display_tokens(self):
        # Insertar encabezados de la tabla con una línea divisoria
        # Separación con '|'
        self.text.insert(tk.END, f"{'Tipo de Token':<25}| {'Valor Literal'}\n")
        # Separador más largo para la tabla
        self.text.insert(tk.END, "-"*45 + "\n")

        # Obtener y mostrar los tokens
        token = self.lexer.next_token()
        while token.token_type != TokenType.EOF:
            # Mostrar la línea divisoria entre tipo de token y literal
            self.text.insert(
                tk.END, f"{str(token.token_type):<25}| {token.literal}\n")
            token = self.lexer.next_token()

        # Mostrar el token EOF al final
        self.text.insert(
            tk.END, f"{str(token.token_type):<25}| {token.literal}\n")

        # Agregar el código fuente original al final
        self.text.insert(tk.END, "\n\nCódigo Fuente Original:\n")
        self.text.insert(tk.END, "-"*45 + "\n")
        self.text.insert(tk.END, self.source_code)

    def run(self):
        self.window.mainloop()
