import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userQueries, setUserQueries] = useState([]);
  const [response, setResponse] = useState('');
  const [userInput, setUserInput] = useState('');
  const [displayedResponse, setDisplayedResponse] = useState('');
  const sessionID = 'someUniqueSessionID';
  const projectId = 'your-dialogflow-project-id';

  const handleSend = async () => {
    if (userInput.trim() !== '') {
      const query = userInput.trim();
      setUserQueries([...userQueries, { query, response }]);
      setUserInput('');

      const result = await detectIntent(query, 'es', sessionID, projectId, db);
      setResponse(result);

      // Simula el efecto de escritura
      let index = 0;
      const intervalId = setInterval(() => {
        setDisplayedResponse((prev) => prev + result[index]);
        index += 1;
        if (index === result.length) {
          clearInterval(intervalId);
          logConversation(query, result, sessionID, db);
        }
      }, 100); // Ajusta la velocidad de escritura según sea necesario
    }
  };

  useEffect(() => {
    setDisplayedResponse(''); // Reinicia la respuesta mostrada cuando cambia la respuesta
  }, [response]);


  return (
    <>
      <div className="chat-container">
        <div className="chat-header">Chatbot</div>
        <div className="chat-body">
          <ul>
            {userQueries.map((item, index) => (
              <li key={index} className="user-query">
                <strong>Usuario:</strong> {item.query}
                <br />
                <strong>Respuesta:</strong> {item.response}
              </li>
            ))}
          </ul>
          <p className="dialogflow-response">
            <strong>Respuesta de Dialogflow:</strong> {displayedResponse}
          </p>
        </div>
        <div className="user-input-container">
          <input
            type="text"
            className="user-input"
            placeholder="Escribe aquí..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button className="send-button" onClick={handleSend}>
            Enviar
          </button>
        </div>
      </div>


    </>
  )
}

export default App
