const { google } = require("googleapis");
const cron = require("node-cron");
const nodemailer = require("nodemailer");

const fs = require('fs');
const csv = require('csv-parser');

//no need model

//configurar consentimiento y credenciales oauth
//https://console.cloud.google.com/

//URI de redireccionamiento autorizados
//https://developers.google.com/oauthplayground

//configurar con https://mail.google.com/ las llaves para obtener el refresh token
//https://developers.google.com/oauthplayground

function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
}

async function sendEmail(from, to, subject, text, html) {
    try {
        const credentials = {
            client_id: "138602344841-tqn6gt39ro4k57o0epql1141otqoj173.apps.googleusercontent.com",
            client_secret: "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",
            redirect_uris: ["https://developers.google.com/oauthplayground"],
        };

        const codigoAutorizacion = "1//04JB1pDr3e0DKCgYIARAAGAQSNwF-L9Ir5BJJLeIgGrOKkDJr1I0aE11lONw4SxrJumDxhlq7QpQsmfvhICEUVrpQLvy_EKSn4JY";

        const oAuth2Client = new google.auth.OAuth2(
            credentials.client_id,
            credentials.client_secret,
            credentials.redirect_uris[0]
        );

        oAuth2Client.setCredentials({
            refresh_token: codigoAutorizacion,
            tls: {
                rejectUnauthorized: false,
            },
        });

        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                type: "OAuth2",
                user: "shernajis@gmail.com",
                accessToken: accessToken?.token,
            },
        });

        const mailOptions = {
            from: from || "shernajis@gmail.com",
            to: to,
            subject: subject,
            text: html ? text : removeTags(text),
            html: html ? text : undefined,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(info);
    } catch (error) {
        console.log("aca:", error);
    }
}


function readCSV() {
    const csvFilePath = './Cumpleaños LAB - Hoja 1.csv';
    const results = [];

    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            // Procesar los datos del CSV
            console.log('Datos del CSV:');
            results.forEach((row) => {
                console.log(row.Nombre, row.Cumpleaños);
                sendEmail(null, 'stevenhernandezj@gmail.com', 'subject', '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="background-color: #f9f9f9;font-family: Arial, sans-serif;display: flex;justify-content: center;align-items: center;height: 100vh;margin: 0;"><div style=" background-color: #fff;box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);text-align: center;padding: 20px;border-radius: 5px;"><img style=" width: 200px;border-radius: 50%;margin: 20px 0;" src="https://ecumple.com/wp-content/uploads/2020/06/cumpleanos-paises.jpg" alt="Imagen"><p style="font-size: 16px;line-height: 1.5;margin: 10px 0;">Espero que tengas un día lleno de alegría y felicidad. ¡Disfruta tu día al máximo!</p><p>¡Felicidades!</p></div></body></html>', true);
      });
        })
        .on('error', (error) => {
            console.error('Error al leer el archivo CSV:', error);
        });
}



// Define el cronjob para que se ejecute cada minuto
cron.schedule("* * * * *", () => {
    console.log("Se ejecutó cron");
    readCSV()
});