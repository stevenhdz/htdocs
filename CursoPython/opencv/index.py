#pip install opencv-python pytesseract

import cv2
import pytesseract

def contiene_hola(ruta_imagen):
    # Carga la imagen
    imagen = cv2.imread(ruta_imagen)

    # Convierte a escala de grises
    gris = cv2.cvtColor(imagen, cv2.COLOR_BGR2GRAY)

    # (Opcional) Aplica un umbral para mejorar el OCR
    _, binaria = cv2.threshold(gris, 150, 255, cv2.THRESH_BINARY_INV)

    # Extrae texto con OCR
    texto = pytesseract.image_to_string(binaria, lang='spa')  # lang='spa' para español

    print("Texto detectado:", texto)

    return "hola" in texto.lower()

ruta = "imagen_con_hola.png"
if contiene_hola(ruta):
    print("✅ La imagen contiene la palabra 'hola'.")
else:
    print("❌ La imagen NO contiene la palabra 'hola'.")