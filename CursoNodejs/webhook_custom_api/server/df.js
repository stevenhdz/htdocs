const dialogflow = require('@google-cloud/dialogflow');

async function detectIntent(query, languageCode) {

    const sessionID = '263ygdgsdy23y2g3ybdh'
    const projectId = 'curso1-mhyi';
    const sessionClient = new dialogflow.SessionsClient();
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionID);

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: query,
                languageCode: languageCode,
            },
        },
    };

    try {
        const [response] = await sessionClient.detectIntent(request);
        // const fulfillmentText = response.queryResult.fulfillmentText; si es con el original
        const fulfillmentText = response.queryResult;
        return { mensaje: fulfillmentText, type: 'robot' };

    } catch (error) {
        console.error('Error al detectar intención:', error);
    }

}

async function createIntent(trainingPhrasesParts, typeName, displayName, responsePhrasesParts) {

    const projectId = 'curso1-mhyi';
    const intentsClient = new dialogflow.IntentsClient();

    const agentPath = intentsClient.projectAgentPath(projectId);

    const trainingPhrases = [];

    trainingPhrasesParts.forEach(trainingPhrasesPart => {

        const part = {
            text: trainingPhrasesPart,
        };

        const trainingPhrase = {
            type: typeName,
            parts: [part],
        };

        trainingPhrases.push(trainingPhrase);
    });

    const messageText = {
        text: responsePhrasesParts,
    };

    const message = {
        text: messageText,
    };

    const intent = {
        displayName: displayName,
        trainingPhrases: trainingPhrases,
        messages: [message],
    };

    const createIntentRequest = {
        parent: agentPath,
        intent: intent,
    };

    const [response] = await intentsClient.createIntent(createIntentRequest);
    console.log(`Intent ${response.name} created`);
    return response.displayName
}


module.exports = { detectIntent, createIntent }