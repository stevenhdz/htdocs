"use strict";

const soap = require('soap');
const express = require('express');
const fs = require('fs');

const splitMessage = (message, splitter) => message.split(splitter);
const sum = (num1, num2) => parseFloat(num1) + parseFloat(num2);
const subtract = (num1, num2) => parseFloat(num1) - parseFloat(num2);

const serviceObject = {
    MessageSplitterService: {
        MessageSplitterServiceSoapPort: {
            MessageSplitter: (args) => ({
                result: splitMessage(args.message, args.splitter)
            }),
            SumOperation: (args) => ({
                result: sum(args.num1, args.num2)
            }),
        },
        MessageSplitterServiceSoap12Port: {
            MessageSplitter: (args) => ({
                result: splitMessage(args.message, args.splitter)
            }),
            SumOperation: (args) => ({
                result: sum(args.num1, args.num2)
            }),
        },
    },
    SubtractionService: {
        SubtractionServiceSoapPort: {
            SubtractOperation: (args) => ({
                result: subtract(args.num1, args.num2)
            }),
        },
        SubtractionServiceSoap12Port: {
            SubtractOperation: (args) => ({
                result: subtract(args.num1, args.num2)
            }),
        },
    },
};

const xml = fs.readFileSync('./service.wsdl', 'utf8');
const xml2 = fs.readFileSync('./service2.wsdl', 'utf8');

const app = express();

app.get('/', (req, res) => {
    res.send('Node Soap Example!<br /><a href="https://github.com/macogala/node-soap-example#readme">Git README</a>');
});

const port = 8000;
app.listen(port, () => {
    console.log('Listening on port ' + port);

    soap.listen(app, "/wsdl", serviceObject, xml);
    soap.listen(app, "/resta", serviceObject, xml2);

    console.log("Check http://localhost:" + port + "wsdl?wsdl to see if the MessageSplitterService is working");
    console.log("Check http://localhost:" + port + "resta?wsdl to see if the SubtractionService is working");
});
