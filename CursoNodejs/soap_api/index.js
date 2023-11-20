const express = require('express');
const soap = require('soap');
const xmlparser = require('express-xml-bodyparser');

const app = express();
const port = 3000;

// Configura express-xml-bodyparser para manejar solicitudes XML
app.use(xmlparser());

const soapUrl = 'http://www.dneonline.com/calculator.asmx?wsdl';

app.post('/add', async (req, res) => {
    try {
        // Accede a los datos XML desde req.body
        const xmlData = req.body;

        console.log(xmlData['soapenv:envelope']['soapenv:body'][0])
        // Verifica si la solicitud tiene la estructura esperada
        if (
            xmlData &&
            xmlData['soapenv:envelope'] &&
            xmlData['soapenv:envelope']['soapenv:body'] &&
            xmlData['soapenv:envelope']['soapenv:body'][0]['web:add'] &&
            xmlData['soapenv:envelope']['soapenv:body'][0]['web:add'][0]['web:inta'] &&
            xmlData['soapenv:envelope']['soapenv:body'][0]['web:add'][0]['web:intb']
        ) {
            // Crea el cliente SOAP y realiza la llamada con los datos XML
            const client = await soap.createClientAsync(soapUrl);
            const result = await client.AddAsync({
                intA: xmlData['soapenv:envelope']['soapenv:body'][0]['web:add'][0]['web:inta'],
                intB: xmlData['soapenv:envelope']['soapenv:body'][0]['web:add'][0]['web:intb']
            });
            console.log(result)

            // Devuelve la respuesta en formato XML
            res.set('Content-Type', 'text/xml');
            res.send(result);
        } else {
            throw new Error('La estructura de la solicitud XML no es válida.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});



app.post('/subtract', async (req, res) => {
    try {
        // Accede a los datos XML desde req.body
        const xmlData = req.body;

        console.log(xmlData['soapenv:envelope']['soapenv:body'][0])
        // Verifica si la solicitud tiene la estructura esperada
        if (
            xmlData &&
            xmlData['soapenv:envelope'] &&
            xmlData['soapenv:envelope']['soapenv:body'] &&
            xmlData['soapenv:envelope']['soapenv:body'][0]['web:subtract'] &&
            xmlData['soapenv:envelope']['soapenv:body'][0]['web:subtract'][0]['web:inta'] &&
            xmlData['soapenv:envelope']['soapenv:body'][0]['web:subtract'][0]['web:intb']
        ) {
            // Crea el cliente SOAP y realiza la llamada con los datos XML
            const client = await soap.createClientAsync(soapUrl);
            const result = await client.SubtractAsync({
                intA: xmlData['soapenv:envelope']['soapenv:body'][0]['web:subtract'][0]['web:inta'],
                intB: xmlData['soapenv:envelope']['soapenv:body'][0]['web:subtract'][0]['web:intb']
            });
            console.log(result)

            // Devuelve la respuesta en formato XML
            res.set('Content-Type', 'text/xml');
            res.send(result);
        } else {
            throw new Error('La estructura de la solicitud XML no es válida.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.post('/multiply', async (req, res) => {
    try {
        // Accede a los datos XML desde req.body
        const xmlData = req.body;

        console.log(xmlData['soapenv:envelope']['soapenv:body'][0])
        // Verifica si la solicitud tiene la estructura esperada
        if (
            xmlData &&
            xmlData['soapenv:envelope'] &&
            xmlData['soapenv:envelope']['soapenv:body'] &&
            xmlData['soapenv:envelope']['soapenv:body'][0]['web:multiply'] &&
            xmlData['soapenv:envelope']['soapenv:body'][0]['web:multiply'][0]['web:inta'] &&
            xmlData['soapenv:envelope']['soapenv:body'][0]['web:multiply'][0]['web:intb']
        ) {
            // Crea el cliente SOAP y realiza la llamada con los datos XML
            const client = await soap.createClientAsync(soapUrl);
            const result = await client.MultiplyAsync({
                intA: xmlData['soapenv:envelope']['soapenv:body'][0]['web:multiply'][0]['web:inta'],
                intB: xmlData['soapenv:envelope']['soapenv:body'][0]['web:multiply'][0]['web:intb']
            });
            console.log(result)

            // Devuelve la respuesta en formato XML
            res.set('Content-Type', 'text/xml');
            res.send(result);
        } else {
            throw new Error('La estructura de la solicitud XML no es válida.');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
