const cv = require('@u4/opencv4nodejs');

// Cargar la imagen
const imagen = cv.imread('pantalla.png');

// Convertir la imagen a escala de grises
const imagenGrises = imagen.bgrToGray();

// Detectar palabras en la imagen utilizando el clasificador pre-entrenado de OpenCV
const clasificador = new cv.CascadeClassifier(cv.HAAR_CASCADE_FRONTALFACE_ALT2);
const detecciones = clasificador.detectMultiScale(imagenGrises);

// Iterar sobre las detecciones y verificar si alguna contiene la palabra "hola"
const palabraBuscada = 'hola';
detecciones.forEach((deteccion) => {
  const { x, y, width, height } = deteccion;
  const regionDeInteres = imagenGrises.getRegion(new cv.Rect(x, y, width, height));
  const texto = regionDeInteres.getDataAsArray().flat().map((pixel) => String.fromCharCode(pixel)).join('');
  
  if (texto.includes(palabraBuscada)) {
    console.log('Se encontró la palabra "hola" en la posición:', deteccion);
  }
});