const fs = require('fs');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Sample data to be included in the CSV file
const data = [
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    // Add more data as needed
];

async function generateCSV() {
    try {
        // Verifica y crea la carpeta 'csvs'
        const csvsFolderPath = path.join(__dirname, 'csvs');
        await fs.promises.mkdir(csvsFolderPath, { recursive: true });

        // Genera un nombre de archivo único para el documento CSV
        const filename = `exported_data_${new Date().toISOString().replace(/:/g, '-')}.csv`;

        // Especifica la ruta completa del archivo CSV
        const filepath = path.join(csvsFolderPath, filename);
        console.log('Ruta del archivo CSV:', filepath);

        // Define el encabezado y las columnas del CSV
        const csvWriter = createCsvWriter({
            path: filepath,
            header: [
                { id: 'name', title: 'Name' },
                { id: 'age', title: 'Age' },
                { id: 'city', title: 'City' },
            ],
        });

        // Escribe los datos en el archivo CSV
        await csvWriter.writeRecords(data);

        console.log(`Documento CSV exportado exitosamente a: ${filepath}`);
    } catch (error) {
        console.error('Error generando el documento CSV:', error);
    }
}

generateCSV();
