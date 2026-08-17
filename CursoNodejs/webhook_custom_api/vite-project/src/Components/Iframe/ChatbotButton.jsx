import React from 'react';
import './ChatbotButton.css';

const ChatbotButton = () => {
    const openIframe = () => {
        const iframeContainer = document.getElementById('iframe-container');
        iframeContainer.style.display = 'block';
    };

    const closeIframe = () => {
        const iframeContainer = document.getElementById('iframe-container');
        iframeContainer.style.display = 'none';
    };

    return (
        <div>
            <div className="boton-container">
                <button id="boton-flotante" onClick={openIframe}>
                    <span>🤖</span>
                </button>
            </div>

            <div className="iframe-container" id="iframe-container">
                <h4>Chatbot</h4>
                <button id="cerrar-iframe" onClick={closeIframe}>X</button>
                <iframe src="http://localhost:5173/bot" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default ChatbotButton;
