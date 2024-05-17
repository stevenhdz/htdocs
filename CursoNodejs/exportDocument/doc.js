const fs = require('fs');
const path = require('path');
const officegen = require('officegen');

// Sample data to be inserted into the Word document
const data = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
};

async function generateWord() {
    try {
        // Verifica y crea la carpeta 'docs'
        const docsFolderPath = path.join(__dirname, 'docs');
        await fs.promises.mkdir(docsFolderPath, { recursive: true });

        // Crea una instancia de officegen
        const docx = officegen('docx');

        // Crea un nuevo párrafo y añade texto con los datos
        const pObj = docx.createP();
        pObj.addText(`Name: ${data.name}`);
        pObj.addLineBreak();
        pObj.addText(`Age: ${data.age}`);
        pObj.addLineBreak();
        pObj.addText(`City: ${data.city}`);

        // Genera un nombre de archivo único para el documento Word
        const filename = `exported_data_${new Date().toISOString().replace(/:/g, '-')}.docx`;

        // Especifica el nuevo directorio en tu carpeta 'docs'
        const filepath = path.join(docsFolderPath, filename);

        // Crea un flujo de escritura y guarda el documento Word
        const out = fs.createWriteStream(filepath);
        docx.generate(out);

        console.log(`Documento Word exportado exitosamente a: ${filepath}`);
    } catch (error) {
        console.error('Error generando el documento Word:', error);
    }
}

generateWord();
