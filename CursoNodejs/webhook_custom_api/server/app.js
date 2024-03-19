const https = require('https');

class WebhookClientCustom {

    constructor(url) {
        this.url = url;
    }

    send(eventData) {
        const jsonData = JSON.stringify(eventData);
        this.makeRequest(jsonData);
    }

    sendTimeEvent() {
        const timeEvent = {
            type: 'time',
            mensaje: new Date().toISOString()

        };
        const jsonData = JSON.stringify(timeEvent);
        this.makeRequest(jsonData);
    }

    makeRequest(jsonData) {
        const options = {
            hostname: 'localhost',
            port: 3001,
            rejectUnauthorized: false,
            path: `${this.url}`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': jsonData.length,
            },
        };

        const req = https.request(options, (res) => {
            console.log(`Estado de la respuesta: ${res.statusCode}`);

            res.on('data', (data) => {
                console.log(`Datos de la respuesta: ${data}`);
            });
        });

        req.on('error', (error) => {
            console.error(`Error en la solicitud: ${error}`);
        });

        req.write(jsonData);
        req.end();
    }
}

module.exports = { WebhookClientCustom };
