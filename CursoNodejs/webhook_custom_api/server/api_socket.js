const express = require('express');
const https = require('https');
const fs = require('fs');
const socketIo = require('socket.io');
const { detectIntent, createIntent } = require('./df');
const cors = require('cors');
const sqlite3 = require('sqlite3');

const app = express();

// Lee los certificados SSL (actualiza las rutas y nombres de archivos según tus certificados)
const privateKeyPath = './cert/key.pem';
const certificatePath = './cert/cert.pem';
const caPath = './cert/csr.pem';

const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
const certificate = fs.readFileSync(certificatePath, 'utf8');
const ca = fs.readFileSync(caPath, 'utf8');

const credentials = { key: privateKey, cert: certificate, ca: ca };

const server = https.createServer(credentials, app);

const io = socketIo(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});

const PORT = 3001;
let agent = false;

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

/* app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
}); */

io.on('connection', handleUserConnection);

const db = new sqlite3.Database('nodes.db');

const createTableQuery = `
CREATE TABLE IF NOT EXISTS nodes (
    id TEXT PRIMARY KEY,
    type TEXT,
    positionX REAL,
    positionY REAL,
    data TEXT,
    dragging INTEGER,
    height INTEGER,
    newEntry TEXT,
    positionXAbsolute REAL,
    positionYAbsolute REAL,
    selected INTEGER,
    width INTEGER
)
`;

// Insert Data
const insertDataQuery = `
INSERT INTO nodes (
    id, type, positionX, positionY, data,
    dragging, height, newEntry, positionXAbsolute, positionYAbsolute,
    selected, width
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

const createEdgesTableQuery = `
CREATE TABLE IF NOT EXISTS edges (
    id TEXT PRIMARY KEY,
    animated INTEGER,
    markerEnd TEXT,
    source TEXT,
    sourceHandle TEXT,
    target TEXT,
    targetHandle TEXT
)
`;


const createIntentTableQuery = `
CREATE TABLE IF NOT EXISTS intents (
    id INTEGER PRIMARY KEY,
    trainingPhrasesParts TEXT,
    typeName TEXT,
    displayName TEXT,
    responsePhrasesParts TEXT
)
`;

const insertEdgeQuery = `
INSERT INTO edges (
    id, animated, markerEnd, source, sourceHandle, target, targetHandle
) VALUES (?, ?, ?, ?, ?, ?, ?)
`;

db.run(createTableQuery);
db.run(createEdgesTableQuery);
db.run(createIntentTableQuery)

// Manejar errores de SQL
db.on('error', (err) => {
    console.error('Database error:', err);
});

app.post('/api/nodes', async (req, res) => {
    const nodes = req.body;

    const stmt = db.prepare(insertDataQuery);

    const processNode = async ({ id, type, position, data, dragging, height, newEntry, positionAbsolute, selected, width }) => {
        const existingNodeQuery = 'SELECT * FROM nodes WHERE id = ?';
        try {
            const row = await new Promise((resolve, reject) => {
                db.get(existingNodeQuery, [id], (err, row) => {
                    if (err) {
                        console.error(`Error executing query: ${existingNodeQuery}`);
                        console.error(err);
                        reject(err);
                    } else {
                        console.log(`Query executed successfully: ${existingNodeQuery}`);
                        resolve(row);
                    }
                });
            });

            console.log(row)

            if (row) {
                // Si el nodo existe, actualiza sus valores
                const updateNodeQuery = `
                    UPDATE nodes
                    SET type = ?, positionX = ?, positionY = ?, data = ?,
                        dragging = ?, height = ?, newEntry = ?, positionXAbsolute = ?, positionYAbsolute = ?,
                        selected = ?, width = ?
                    WHERE id = ?
                `;
                stmt.run(
                    updateNodeQuery,
                    type, position.x, position.y, JSON.stringify(data),
                    dragging, height, newEntry, positionAbsolute?.x == undefined ? '' : positionAbsolute?.x, positionAbsolute?.y == undefined ? '' : positionAbsolute?.y, selected, width,
                    id
                );
            } else {
                // Si el nodo no existe, inserta uno nuevo
                stmt.run(
                    id, type, position.x, position.y, JSON.stringify(data),
                    dragging, height, newEntry, positionAbsolute?.x == undefined ? '' : positionAbsolute?.x, positionAbsolute?.y == undefined ? '' : positionAbsolute?.y, selected, width
                );
            }
        } catch (error) {
            console.error('Error al verificar el nodo existente:', error);
        }
    };

    // Utiliza Promise.all para esperar a que se completen todas las operaciones asíncronas
    await Promise.all(nodes.map(processNode));

    // Mueve el finalize fuera del bucle
    stmt.finalize();

    res.status(200).json({ message: 'Nodos guardados o actualizados exitosamente' });
});

app.post('/api/edges', async (req, res) => {
    const edges = req.body;
    const edgeStmt = db.prepare(insertEdgeQuery);

    const processEdge = async (edge) => {
        const existingEdgeQuery = 'SELECT * FROM edges WHERE id = ?';
        try {
            const row = await new Promise((resolve, reject) => {
                db.get(existingEdgeQuery, [edge.id], (err, row) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(row);
                    }
                });
            });

            console.log(row)

            if (row) {
                // Si la arista existe, actualiza sus valores
                const updateEdgeQuery = `
                    UPDATE edges
                    SET animated = ?, markerEnd = ?, source = ?, sourceHandle = ?, target = ?, targetHandle = ?
                    WHERE id = ?
                `;
                edgeStmt.run(
                    updateEdgeQuery,
                    edge.animated ? 1 : 0, edge.markerEnd.type,
                    edge.source, edge.sourceHandle, edge.target, edge.targetHandle,
                    edge.id
                );
            } else {
                // Si la arista no existe, inserta una nueva
                edgeStmt.run(
                    edge.id, edge.animated ? 1 : 0, edge.markerEnd.type,
                    edge.source, edge.sourceHandle, edge.target, edge.targetHandle
                );
            }
        } catch (error) {
            console.error('Error al verificar la arista existente:', error);
        }
    };

    // Utiliza Promise.all para esperar a que se completen todas las operaciones asíncronas
    await Promise.all(edges.map(processEdge));

    // Mueve el finalize fuera del bucle
    edgeStmt.finalize();

    res.status(200).json({ message: 'Aristas guardadas o actualizadas exitosamente' });
});

app.get('/api/nodes/all', async (req, res) => {
    try {
        const nodes = await getNodesFromDatabase();
        res.status(200).json(nodes);
    } catch (error) {
        console.error('Error al obtener los nodos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.get('/api/edges/all', async (req, res) => {
    try {
        const edges = await getAllEdgesFromDatabase();
        res.status(200).json(edges);
    } catch (error) {
        console.error('Error al obtener las aristas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

function getAllEdgesFromDatabase() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM edges';
        db.all(query, (err, rows) => {
            if (err) {
                console.error(`Error executing query: ${query}`);
                reject(err);
            } else {
                console.log(`Query executed successfully: ${query}`);
                resolve(rows);
            }
        });
    });
}

const getNodesFromDatabase = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM nodes';
        db.all(query, (err, rows) => {
            if (err) {
                console.error(`Error executing query: ${query}`);
                reject(err);
            } else {
                console.log(`Query executed successfully: ${query}`);
                resolve(rows);
            }
        });
    });
};


app.post('/create/intent', createIntents)

async function createIntents(req, res) {

    const { trainingPhrasesParts, typeName, displayName, responsePhrasesParts } = req.body;


    try {

        const response = await createIntent(trainingPhrasesParts, typeName, displayName, responsePhrasesParts);
        if (response) {

            await db.run('INSERT INTO intents (trainingPhrasesParts, typeName, displayName, responsePhrasesParts) VALUES (?, ?, ?, ?)', [
                trainingPhrasesParts.join(', '),
                typeName,
                displayName,
                responsePhrasesParts.join(', ')
            ]);
            emitAndRespond(res, 'Mensaje recibido', '', response);
        }

    } catch (error) {
        console.error('Error al guardar en la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    } finally {

        await db.close();
    }

}


app.get('/api/intent/all', async (req, res) => {
    try {
        const intents = await getAllIntentFromDatabase();
        res.status(200).json(intents);
    } catch (error) {
        console.error('Error al obtener las aristas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});


function getAllIntentFromDatabase() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM intents';
        db.all(query, (err, rows) => {
            if (err) {
                console.error(`Error executing query: ${query}`);
                reject(err);
            } else {
                console.log(`Query executed successfully: ${query}`);
                resolve(rows);
            }
        });
    });
}


app.post('/enviarMensaje', handleSendMessage);

async function handleSendMessage(req, res) {
    try {
        const mensaje = req.body;

        if (mensaje.mensaje.includes('agente')) {
            setAgentStatus(true);

            setTimeout(() => {
                io.emit('mensajeRecibido', { type: 'bot', mensaje: '¡Has solicitado hablar con un agente! Espere un momento, por favor.' });
            }, 100);

        } else if (mensaje.mensaje.includes('bot')) {
            setAgentStatus(false);
        }

        if (isAgent()) {
            await handleUserMessage(mensaje, res);
        } else {
            await handleRobotMessage(mensaje, res);
        }

    } catch (error) {
        console.error('Error al manejar el mensaje:', error);
        res.status(500).json({ status: 'Error interno del servidor' });
    }
}

async function handleRobotMessage(mensaje, res) {
    const response = await detectIntent(mensaje.mensaje, 'es');
    emitAndRespond(res, 'Mensaje recibido', mensaje, response);
}

async function handleUserMessage(mensaje, res) {
    emitAndRespond(res, 'Mensaje recibido', mensaje, mensaje.mensaje);
}

function emitAndRespond(res, status, mensaje, response) {
    io.emit('mensajeRecibido', mensaje);
    res.json({ status, mensaje: response });
}

function handleUserConnection(socket) {
    console.log('Usuario conectado:', socket.id);

    socket.emit('mensajeRecibido', { type: 'bot', mensaje: '¡Bienvenido mi nombre es stevenhdz tu asistente virtual! en que puedo ayudarte ?' });

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
}

function setAgentStatus(status) {
    agent = status;
}

function isAgent() {
    return agent;
}

// Manejar el cierre adecuado de la base de datos
process.on('SIGINT', () => {
    console.log('Closing database connection...');
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Database connection closed.');
        process.exit(0);
    });
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en https://localhost:${PORT}`);
});
