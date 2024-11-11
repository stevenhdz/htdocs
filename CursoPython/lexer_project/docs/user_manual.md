# Lexer Project

Este proyecto implementa un analizador léxico para una fracción de código en un lenguaje interpretado, en este caso el siguiente ejemplo:

```python n1=float(input("Intro número uno: "))
n2=float(input("Intro numero dos: "))
suma=n1+n2
print("La suma es: ", suma)
```

## Estructura del Proyecto

- `lexer_engine/token.py`: Define los tipos de tokens y la clase `Token`.
- `lexer_engine/lexer.py`: Implementa la clase `Lexer` para analizar el código fuente.
- `gui/lexer_app.py`: Interfaz gráfica para mostrar los tokens generados y el codigo original.
- `main.py`: Archivo principal para ejecutar el Lexer e iniciar la interfaz gráfica.

## Instrucciones de Uso

1. Asegúrate de tener Python 3 instalado.
2. Instala la libreria grafica `pip install -r requirements.txt`
3. Activa el environment `lexer\Scripts\activate`
4. Ejecuta `python main.py` para iniciar el analizador léxico y visualizar la tabla de símbolos.
5. En la interfaz, verás cada token junto a su tipo y valor literal.

```

```
