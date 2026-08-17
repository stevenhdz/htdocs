const fs = require('fs');
const path = require('path');
const htmlToPdf = require('html-pdf');

// Sample data to be inserted into the HTML
const data = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
};

async function generatePDF() {
    try {
        // Verifica y crea la carpeta 'pdfs'
        const pdfsFolderPath = path.join(__dirname, 'pdfs');
        await fs.promises.mkdir(pdfsFolderPath, { recursive: true });

        // Genera un nombre de archivo único para el documento PDF
        const filename = `exported_data_${new Date().toISOString().replace(/:/g, '-')}.pdf`;

        // Especifica la ruta completa del archivo PDF
        const filepath = path.join(pdfsFolderPath, filename);
        console.log('Ruta del archivo PDF:', filepath);

        // Define el contenido HTML con los datos
        const htmlContent = `
            <h1>${data.name}</h1>
            <p>Age: ${data.age}</p>
            <p>City: ${data.city}</p>
        `;

        // Configuración de opciones para html-pdf
        const options = { format: 'Letter' };

        // Genera el PDF a partir del contenido HTML
        htmlToPdf.create(htmlContent, options).toFile(filepath, (err, res) => {
            if (err) throw err;

            console.log(`Documento PDF exportado exitosamente a: ${filepath}`);
        });
    } catch (error) {
        console.error('Error generando el documento PDF:', error);
    }
}

generatePDF();
