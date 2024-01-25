const { Storage } = require('@google-cloud/storage');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('conversations.db');
/**
 * TODO(developer):
 *  1. Uncomment and replace these variables before running the sample.
 *  2. Set up ADC as described in https://cloud.google.com/docs/authentication/external/set-up-adc
 *  3. Make sure you have the necessary permission to list storage buckets "storage.buckets.list"
 *    (https://cloud.google.com/storage/docs/access-control/iam-permissions#bucket_permissions)
 */

const dialogflow = require('@google-cloud/dialogflow');

const projectId = 'curso1-mhyi';
const displayName = 'MAKE_RESERVATION';
const trainingPhrasesParts = ['How many people are staying?', 'aca'];
const messageTexts = 'Your reservation has been confirmed';


//autentication
async function authenticateImplicitWithAdc() {
    const storage = new Storage({
        projectId,
    });
    const [buckets] = await storage.getBuckets();
    console.log('Buckets:');

    for (const bucket of buckets) {
        console.log(`- ${bucket.name}`);
    }

    console.log('Listed all storage buckets.');
}

authenticateImplicitWithAdc();

const intentsClient = new dialogflow.IntentsClient();



//detect intent

const sessionID = '263ygdgsdy23y2g3ybdh'

async function detectIntent(query, languageCode) {

    db.serialize(() => {
        db.run("CREATE TABLE IF NOT EXISTS conversations (sessionId TEXT, userQuery TEXT, dialogflowResponse TEXT, timestamp DATETIME)");
    });

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
        const responses = await sessionClient.detectIntent(request);
        const fulfillmentText = responses[0].queryResult.fulfillmentText;

        console.log(query)
        console.log(fulfillmentText)
        logConversation(query, fulfillmentText);

        console.log('Respuesta de Dialogflow:', fulfillmentText);
    } catch (error) {
        console.error('Error al detectar intención:', error);
    }

}

function logConversation(userQuery, dialogflowResponse) {
    db.serialize(() => {
        const stmt = db.prepare("INSERT INTO conversations (sessionId, userQuery, dialogflowResponse, timestamp) VALUES (?, ?, ?, ?)");
        stmt.run(sessionID, userQuery, dialogflowResponse, new Date().toISOString());
        stmt.finalize();
    });
}

const userQueries = ['Donde esta', 'Donde esta Peru', 'cuenteme un chiste'];

for (const query of userQueries) {
    //detectIntent(query, 'es');
}



async function createDefaultIntent() {
    const intent = {
        parent: `projects/${projectId}/agent`,
        intent: {
            displayName: 'DEFAULT 3',
            trainingPhrases: [
                // Ejemplos de frases de entrenamiento
                {
                    type: 'EXAMPLE',
                    parts: [{ text: 'Hola soy alex' }],
                },
                {
                    type: 'EXAMPLE',
                    parts: [{ text: 'Hola, ¿cómo estás?' }],
                },
                // Agrega más frases de entrenamiento según tus necesidades
            ],
            messages: [
                {
                    text: {
                        text: ['¡Hola alex! Soy un bot de ejemplo. ¿En qué puedo ayudarte?'],
                    },
                },
                // Puedes agregar más respuestas aquí
            ],
        },
    };

    try {
        const [response] = await intentsClient.createIntent(intent);
        console.log(`Intent "Default" creado con éxito: ${response.name}`);
    } catch (err) {
        error = err; // Asignar el error a la variable error
        console.error('Error al detectar intención:', error);
    }
}

//createDefaultIntent();


async function createIntent() {

    const agentPath = intentsClient.projectAgentPath(projectId);

    const trainingPhrases = [];

    trainingPhrasesParts.forEach(trainingPhrasesPart => {

        const part = {
            text: trainingPhrasesPart,
        };

        const trainingPhrase = {
            type: 'EXAMPLE',
            parts: [part],
        };

        trainingPhrases.push(trainingPhrase);
    });

    const messageText = {
        text: [messageTexts],
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

    // Create the intent
    const [response] = await intentsClient.createIntent(createIntentRequest);
    console.log(`Intent ${response.name} created`);
}

//createIntent();


async function updateIntent() {
    const intentId = 'bb4bca6c-44e3-4317-bd26-04ac9d4a7438'; // Reemplaza con el ID del intent que deseas actualizar

    // Obtén el intent existente
    const intentName = `projects/${projectId}/agent/intents/${intentId}`;
    const [existingIntent] = await intentsClient.getIntent({ name: intentName });

    if (!existingIntent) {
        console.error(`El intent con ID ${intentId} no se encontró.`);
        return;
    }

    //action and parameters
    const parameters = {
        "name": "d3e3dd3f-9d1f-400b-b8d5-3216936f8ebf",
        "displayName": "location",
        "value": "$location",
        "entityTypeDisplayName": "@sys.location",
        "mandatory": true,
        "prompts": [
            "ingrese localización por favor"
        ],
        "isList": false
    };

    // Modifica el intent según tus necesidades
    existingIntent.parameters = [parameters];
    existingIntent.displayName = 'Nuevo nombre del intent';
    existingIntent.trainingPhrases = [
        {
            type: 'EXAMPLE',
            parts: [
                {
                    "text": "Quiero localizar "
                },
                {
                    "text": "paris",
                    "userDefined": true,
                    "entityType": "@sys.location",
                    "alias": "location"
                },
                {
                    "text": " ?"
                }
            ]
        },
        {
            type: 'EXAMPLE',
            parts: [
                {
                    "text": "Donde esta "
                },
                {
                    "text": "Madrid",
                    "userDefined": true,
                    "entityType": "@sys.location",
                    "alias": "location"
                }
            ],
        },
        // Agrega más frases de entrenamiento según sea necesario
    ];

    // Actualiza el intent
    const [response] = await intentsClient.updateIntent({ intent: existingIntent });

    console.log(`Intent actualizado: ${response.name}`);
}

//updateIntent();


async function listIntents() {
    // Construct request

    // The path to identify the agent that owns the intents.
    const projectAgentPath = intentsClient.projectAgentPath(projectId);

    console.log(projectAgentPath);

    const request = {
        parent: projectAgentPath,
    };

    // Send the request for listing intents.
    const [response] = await intentsClient.listIntents(request);
    response.forEach(intent => {
        console.log('====================');
        console.log(`Intent name: ${intent.name}`);
        console.log(`Intent display name: ${intent.displayName}`);
        console.log(`Action: ${intent.action}`);
        console.log(`Root folowup intent: ${intent.rootFollowupIntentName}`);
        console.log(`Parent followup intent: ${intent.parentFollowupIntentName}`);

        console.log('Input contexts:');
        intent.inputContextNames.forEach(inputContextName => {
            console.log(`\tName: ${inputContextName}`);
        });

        console.log('Output contexts:');
        intent.outputContexts.forEach(outputContext => {
            console.log(`\tName: ${outputContext.name}`);
        });
    });
}

//listIntents();


async function deleteIntentsOne() {

    const intentId = '1e3ac81f-ca06-452c-aaec-14e36152337c'
    const intentPath = intentsClient.projectAgentIntentPath(projectId, intentId);

    const request = { name: intentPath };

    // Send the request for deleting the intent.
    const result = await intentsClient.deleteIntent(request);
    console.log(`Intent ${intentPath} deleted`);
    return result;
}

//deleteIntentsOne()


const { EntityTypesClient } = require('@google-cloud/dialogflow');

// Crea una instancia del cliente de entidades
const entityTypesClient = new EntityTypesClient();

async function createEntity() {

    const entityTypeRequest = {
        parent: `projects/${projectId}/agent`,
        entityType: {
            displayName: displayName + '2',
            kind: 'KIND_MAP',
            enableFuzzyExtraction: false,
            entities: [
                {
                    "value": "stevenhdz",
                    "synonyms": [
                        "AlexDevOrigin"
                    ]
                },
                {
                    "value": "pablo",
                    "synonyms": [
                        "pablo"
                    ]
                }
            ],
            autoExpansionMode: 'AUTO_EXPANSION_MODE_UNSPECIFIED',
        },
    };

    try {
        const [response] = await entityTypesClient.createEntityType(entityTypeRequest);
        console.log(`Entidad "${displayName}" creada con éxito: ${response.name}`);
    } catch (error) {
        console.error('Error al crear la entidad:', error);
    }
}

createEntity();

//TODO: FALTO LAS OTRAS DE ENTITY



async function setAgent() {
    const parentId = 'prueba-oxad' //instancia dialogflow ID
    const parent = 'projects/' + parentId + '/locations/global';

    const agent = {
        parent: parent,
        displayName: 'nombre proyecto',
        defaultLanguageCode: 'es',
        timeZone: 'America/New_York',
    };

    const client = new dialogflow.AgentsClient();


    const request = {
        agent,
    };

    const [response] = await client.setAgent(request);
    console.log(`response: ${JSON.stringify(response, null, 2)}`);

}
//setAgent(); project

//delete DELETE https://dialogflow.googleapis.com/v2/projects/PROJECT_ID/agent