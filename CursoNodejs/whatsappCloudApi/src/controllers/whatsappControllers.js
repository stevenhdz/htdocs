// en el webhook del api meta whastapp en url de devolucion de llamada se debe poner la url de nuestro api /whatsappp y nuestro token creado
// campos del webhook usaremos messages

const fs = require('fs');

const myConsole = new console.Console(fs.createWriteStream("./logs.txt"))

const VerifyToken = (req, res) => {
    try {
        let accessToken = 'RRRJRJRJ3333'
        let token = req.query["hub.verify_token"]
        let challenge = req.query["hub.challenge"]

        challenge != null && token != null && token == accessToken ? res.send(challenge) : res.status(400).send()

    } catch (error) {
        res.status(400).send()
    }
}

const ReceivedMessage = (req, res) => {
    try {
        let entry = (req.body["entry"])[0]
        let changes = (entry["changes"])[0]
        let value = changes["value"]
        let messagesObject = value["messages"]

        if (typeof messagesObject != "undefined") {
            let messages = messagesObject[0]
            let text = GetTextUser(messages)
            myConsole.log(text)
        }

        res.send("EVENT_RECEIVED")
    } catch (error) {

        myConsole.log(error)
        res.send("EVENT_RECEIVED")
    }
}

const GetTextUser = (messages) => {
    let text = ""
    let typeMessage = messages["type"]

    if (typeMessage == 'text') {
        text = (messages["text"])["body"]
    } else if (typeMessage == 'interactive') {
        let interactiveObject = messages["interactive"]
        let typeInteractive = interactiveObject["type"]
        myConsole.log(interactiveObject)

        if (typeInteractive == 'button_reply') {
            text = (interactiveObject['button_replay'])["title"]
        } else if (typeInteractive == 'list_replay') {
            text = (interactiveObject['list_replay'])["title"]
        } else {
            myConsole.log('sin mensaje')
        }
    } else {
        myConsole.log('sin mensaje')
    }
    return text
}

module.exports = {
    ReceivedMessage,
    VerifyToken
}