import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';

const BotComponent = () => {
    const [messages, setMessages] = useState([]);
    const [currentIntent, setCurrentIntent] = useState(null);
    const [response, setResponse] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [isBotTyping, setIsBotTyping] = useState(false);
    const [currentStep, setCurrentStep] = useState(0); // New state variable
    const [conversation, setConversation] = useState([])
    const [edges, setEdges] = useState([]);
    const [continued, setContinued] = useState(false);
    const messagesRef = useRef(null);

    useEffect(() => {
        if (currentIntent) {
            // If there's a currentIntent, get the bot message
            const botMessage = getBotMessage(currentIntent);
            if (botMessage) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: botMessage, sender: 'bot' },
                ]);
            }
        }
    }, [currentIntent, currentStep]);

    const resetConversation = () => {
        setConversation([]);
        setCurrentIntent(null);
        setCurrentStep(0);
        setEdges([]); // You may need to reset other state variables as well
        setMessages([
            { text: 'Bienvenido al asistente virtual alex, comencemos saludando', sender: 'bot' },
        ]);
    };

    useEffect(() => {
        loadNodesAndEdgesFromDatabase()

        setMessages(() => [
            { text: 'Bienvenido al asistente virtual alex, comencemos saludando', sender: 'bot' },
        ]);

    }, []);

    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
        setContinued(true)
    }, [messages]);

    const loadNodesAndEdgesFromDatabase = async () => {
        try {
            const nodesResponse = await fetch('https://localhost:3001/api/nodes/all');
            const edgesResponse = await fetch('https://localhost:3001/api/edges/all');

            if (!nodesResponse.ok || !edgesResponse.ok) {
                throw new Error(`HTTP error! Status: ${nodesResponse.status} or ${edgesResponse.status}`);
            }

            const loadedNodes = await nodesResponse.json();
            const loadedEdges = await edgesResponse.json();

            const formattedNodes = loadedNodes.map(node => {
                const dataObject = JSON.parse(node.data);
                return {
                    id: node.id,
                    intent: dataObject.content,
                    responses: dataObject.heading,
                    continue: dataObject.continue,
                    fraseAuto: dataObject.fraseAuto
                };
            });

            const formattedEdges = loadedEdges.map(edge => ({
                id: edge.id,
                animated: edge.animated === 1 ? 'true' : 'false',
                markerEnd: edge.markerEnd,
                source: edge.source,
                sourceHandle: edge.sourcehandle,
                target: edge.target,
                targetHandle: edge.targetHandle,
            }));


            const orderedNodes = topologicalSort(formattedNodes, formattedEdges);

            console.table(orderedNodes)

            setEdges(formattedEdges);
            setConversation(orderedNodes);

            console.log('Nodes and Edges loaded successfully');
        } catch (error) {
            console.error('Error loading nodes and edges:', error);
        }
    };

    function topologicalSort(formattedNodes, formattedEdges) {
        const graph = new Map();
        const inDegree = new Map();

        for (const edge of formattedEdges) {
            if (!graph.has(edge.source)) {
                graph.set(edge.source, []);
            }

            graph.get(edge.source).push(edge.target);

            inDegree.set(edge.target, (inDegree.get(edge.target) || 0) + 1);
        }

        const orderedNodes = [];
        const queue = [];

        for (const node of formattedNodes) {
            if (!inDegree.has(node.id)) {
                inDegree.set(node.id, 0);
            }

            if (inDegree.get(node.id) === 0) {
                queue.push(node.id);
            }
        }

        while (queue.length > 0) {
            const currentNode = queue.shift();
            const currentNodeData = formattedNodes.find((node) => node.id === currentNode);

            orderedNodes.push(currentNodeData);

            if (graph.has(currentNode)) {

                const neighbors = graph.get(currentNode);

                for (const neighbor of neighbors) {
                    inDegree.set(neighbor, inDegree.get(neighbor) - 1);
                    if (inDegree.get(neighbor) === 0) {
                        queue.push(neighbor);
                    }
                }
            }
        }

        return orderedNodes;
    }



    const detectIntent = async (userMessage) => {
        try {
            setResponse('')
            const response = await fetch('https://localhost:3001/enviarMensaje', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mensaje: userMessage, type: 'robot' }),
            });

            const result = await response.json();


            if (result?.mensaje?.mensaje?.fulfillmentText == 'Hola, no te entendi') {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: userMessage, sender: 'user' },
                ]);
            }


            const intent = result?.mensaje?.mensaje?.intent.displayName;

            const confidence = result?.mensaje?.mensaje?.intentDetectionConfidence;

            setResponse(result?.mensaje?.mensaje?.fulfillmentText);

            return confidence >= 0.7 ? intent : null;
        } catch (error) {
            console.error('Error al detectar intención:', error);
            throw error;
        }
    };

    const handleUserMessage = async (userMessage) => {
        setIsBotTyping(true);

        try {
            const detectedIntent = await detectIntent(userMessage);
            setInputValue('');

            const current = detectedIntent || currentIntent;

            if (current === conversation[currentStep]?.intent) {

                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: userMessage, sender: 'user' },
                ]);

                setCurrentIntent((prevIntent) => getNextIntent(prevIntent, detectedIntent));
                setCurrentStep((prevStep) => prevStep + 1);

            } else {
                console.warn(`Unexpected intent detected: ${current}. Ignoring response.`);
            }
        } catch (error) {
            console.error('Error handling user message:', error);
        } finally {
            setIsBotTyping(false);
        }
    };

    const handleUserMessageOptions = async (userMessage) => {
        setIsBotTyping(true);

        try {
            const detectedIntent = await detectIntent(userMessage);
            setInputValue('');

            const current = detectedIntent || currentIntent;

            if (current === conversation[currentStep].intent) {

                setCurrentIntent((prevIntent) => getNextIntent(prevIntent, detectedIntent));
                setCurrentStep((prevStep) => prevStep + 1);

            } else {
                console.warn(`Unexpected intent detected: ${current}. Ignoring response.`);
            }
        } catch (error) {
            console.error('Error handling user message:', error);
        } finally {
            setIsBotTyping(false);
        }
    };

    const handleButtonClick = (option) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: option, sender: 'user' },
        ]);
    }

    const getBotMessage = (intent) => {
        const matchingIntent = conversation.find((item) => item.intent === intent);

        console.log('matchingIntent', matchingIntent.responses);

        if (matchingIntent) {
            if (matchingIntent.responses && matchingIntent.responses.length > 0) {
                return getRandomResponse(matchingIntent.responses);
            } else {
                return response;
            }
        }

        console.log(response);

        return response || null;
    };

    const getNextIntent = (currentIntent, detectedIntent) => {
        if (detectedIntent) {
            return detectedIntent;
        }

        const currentIndex = currentStep; // Use currentStep instead of conversation.findIndex

        if (currentIndex === -1 && !hasBotMessage('Default Welcome Intent')) {
            return findNextIntent(0);
        }

        if (currentIndex === conversation.length - 1) {
            return null;
        }

        const nextIntent = findNextIntent(currentIndex + 1);

        if (hasBotMessage(nextIntent)) {
            return nextIntent;
        } else {
            return findNextIntent(0);
        }
    };

    const findNextIntent = (startIndex) => {
        let hasPassedFirstIntent = false;

        for (let i = startIndex; i < conversation.length; i++) {
            if (hasPassedFirstIntent && conversation[i].responses.length > 0 && hasBotMessage(conversation[i].intent)) {
                return conversation[i].intent;
            }

            if (i === conversation.length - 1) {
                return null;
            }

            if (conversation[i].intent === currentIntent && hasBotMessage(currentIntent)) {
                hasPassedFirstIntent = true;
            }
        }

        return hasPassedFirstIntent ? null : conversation[startIndex].intent;
    };

    const hasBotMessage = (intent) => {
        return messages.some((message) => message.sender === 'bot' && message.text === getBotMessage(intent));
    };

    const getRandomResponse = (responses) => {
        const randomIndex = Math.floor(Math.random() * responses.length);
        console.log('random', responses[randomIndex]);
        return responses[randomIndex];
    };


    function parseMessageText(text) {
        const parts = text.split(/(\{.*?\})/);

        return parts.map((part, index) => {
            if (part.startsWith('{') && part.endsWith('}')) {
                const options = part.slice(1, -1).split('} {').map(option => option.trim());

                return (
                    <div key={index}>
                        {options.map((opcion, subIndex) => (


                            <button style={{ width: 'auto', height: 30, margin: '10px 1px 6px 0px' }} key={subIndex} onClick={() => { handleButtonClick(opcion), handleUserMessageOptions(opcion) }}>
                                {opcion}
                            </button>


                        ))}
                    </div>
                );
            } else {
                return <span key={index}>{part}</span>;
            }
        });
    }
    return (
        <div>
            <div id="chat-container">
                <div id='chat-messages' ref={messagesRef}>
                    {messages.map((message, index) => (
                        <div id="chat-content" key={index}>
                            <ul id="chat">
                                {message.sender === 'user' && (
                                    <li className="mensaje-usuario">
                                        {message.text}
                                        <i className="fas fa-user"></i>
                                    </li>
                                )}
                                {message.sender === 'bot' && (
                                    <li className="mensaje-webhook">
                                        <i className="fas fa-robot"></i>
                                        {message.text.includes('data:image') ? (
                                            <img style={{ width: 150, height: 150 }} src={message.text} alt="Imagen" />
                                        ) : (
                                            <div>
                                                {parseMessageText(message.text)}
                                            </div>
                                        )}
                                    </li>
                                )}

                                {message.sender === 'webhook' && (
                                    <li className="mensaje-usuario-agent">
                                        <i className="fas fa-user-check"></i>
                                        {message.text}
                                    </li>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
                <span id="escribiendoMensaje"></span>
            </div>

            <form id="formularioMensaje" onSubmit={(e) => { e.preventDefault(); handleUserMessage(e.target.message.value); }}>
                <input
                    placeholder='Escribe tu mensaje...'
                    type="text"
                    id="mensajeInput"
                    name="message"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    autoComplete={'off'}
                />
                <button id="enviarBtn" type="submit">
                    Enviar
                </button>
                <button onClick={resetConversation}>R</button>

            </form>

            {isBotTyping && <span id="escribiendoMensaje">Escribiendo...</span>}
        </div >
    );
};

export default BotComponent;
