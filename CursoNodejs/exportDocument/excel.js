const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

// Sample data to be exported to Excel
const data = [
    { Name: 'John Doe', Age: 30, City: 'New York' },
    { Name: 'Jane Doe', Age: 25, City: 'Los Angeles' },
    { Name: 'Bob Smith', Age: 35, City: 'Chicago' },
];

// Create a new workbook and add a worksheet
const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('Sheet 1');

// Add headers to the worksheet
const headers = Object.keys(data[0]);
worksheet.addRow(headers);

// Add data to the worksheet
data.forEach((row) => {
    worksheet.addRow(Object.values(row));
});

// Generate a unique filename for the Excel file
const filename = `exported_data_${new Date().toISOString().replace(/:/g, '-')}.xlsx`;
const filepath = path.join(__dirname, 'excel', filename);

// Ensure the directory exists before saving the file
const directory = path.dirname(filepath);
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
}

// Save the workbook to a file
workbook.xlsx.writeFile(filepath)
    .then(() => {
        console.log(`Excel file saved successfully: ${filepath}`);
    })
    .catch((error) => {
        console.error('Error saving Excel file:', error);
    });
