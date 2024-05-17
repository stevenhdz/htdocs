const { WebhookClientCustom } = require('../server/app')

console.log(WebhookClientCustom);

const webhook = new WebhookClientCustom('/enviarMensaje');

const eventData = {
    //mensaje: 'Hola, me llamo john doe en que puedo ayudarte ',
    mensaje: 'Cuentame en que te puedo ayudar.',
    type: 'webhook'
};

webhook.send(eventData);
