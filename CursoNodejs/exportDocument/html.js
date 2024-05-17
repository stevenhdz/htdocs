const fs = require('fs');
const path = require('path');

// Contenido HTML
const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Documento HTML</title>
</head>
<body>

    <h1>Hola, Mundo!</h1>
    <p>Este es un ejemplo de un documento HTML generado con Node.js.</p>

</body>
</html>
`;

// Ruta y nombre del archivo HTML
const filepath = path.join(__dirname, 'mi_documento.html');

// Escribe el contenido en el archivo
fs.writeFile(filepath, htmlContent, (err) => {
    if (err) {
        console.error('Error al escribir el archivo HTML:', err);
    } else {
        console.log(`Documento HTML exportado exitosamente a: ${filepath}`);
    }
});
