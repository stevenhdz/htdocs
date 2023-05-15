const nodemailer = require("nodemailer");
const { google } = require("googleapis");

//no need model

//configurar consentimiento y credenciales oauth
//https://console.cloud.google.com/

//URI de redireccionamiento autorizados
//https://developers.google.com/oauthplayground

//configurar con https://mail.google.com/ las llaves para obtener el refresh token
//https://developers.google.com/oauthplayground

class MailController {
    
static removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '');
}

  async sendEmail(req, res) {
    try {
      const { from, to, subject, text, html } = req.body;

      const credentials = {
        client_id:
          "138602344841-tqn6gt39ro4k57o0epql1141otqoj173.apps.googleusercontent.com",
        client_secret: "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",
        redirect_uris: ["https://developers.google.com/oauthplayground"],
      };

      const codigoAutorizacion =
        "1//04JB1pDr3e0DKCgYIARAAGAQSNwF-L9Ir5BJJLeIgGrOKkDJr1I0aE11lONw4SxrJumDxhlq7QpQsmfvhICEUVrpQLvy_EKSn4JY";

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
        text: html ? text : MailController.removeTags(text),
        html: html ? text : undefined,
      };

      const info = await transporter.sendMail(mailOptions);
      res.status(201).json(info.response);
    } catch (error) {
console.log(error)
      res.status(500).json({ error: "Ocurrió un error en el servidor" });
    }
  }
}

module.exports = MailController;
