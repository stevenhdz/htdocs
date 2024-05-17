import React, { useState, useEffect } from 'react';
import './intent.css';

const IntentForm = () => {
    const [formData, setFormData] = useState({
        trainingPhrasesParts: [],
        typeName: '',
        displayName: '',
        responsePhrasesParts: [],
    });

    const [intents, setIntents] = useState([]);
    const [trainingPhrasesOptions, setTrainingPhrasesOptions] = useState([]);
    const [responsePhrasesOptions, setResponsePhrasesOptions] = useState([]);
    const [newTrainingPhrase, setNewTrainingPhrase] = useState('');
    const [newResponsePhrase, setNewResponsePhrase] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleTrainingPhraseAdd = () => {
        if (newTrainingPhrase.trim() !== '') {
            setTrainingPhrasesOptions([...trainingPhrasesOptions, newTrainingPhrase]);
            setNewTrainingPhrase('');
        }
    };

    const handleResponsePhraseAdd = () => {
        if (newResponsePhrase.trim() !== '') {
            setResponsePhrasesOptions([...responsePhrasesOptions, newResponsePhrase]);
            setNewResponsePhrase('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {


            if (trainingPhrasesOptions.length > 0 && responsePhrasesOptions.length > 0) {
                const response = await fetch('https://localhost:3001/create/intent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();
                console.log(data);

                updateIntentList();

            } else {
                alert('selecciona las phrases, response')
            }

        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
    };

    const updateIntentList = async () => {
        try {
            const response = await fetch('https://localhost:3001/api/intent/all');
            const data = await response.json();

            setIntents(data);
        } catch (error) {
            console.error('Error al obtener intents:', error);
        }
    };

    useEffect(() => {
        updateIntentList();
    }, []);

    return (
        <div className="intent-form-container">
            <form className="intent-form" onSubmit={handleSubmit}>
                <div className="form-section">
                    <label>
                        Tipo:
                        <input type="text" name="typeName" value={formData.typeName || 'EXAMPLE'} onChange={handleChange} className="styled-input" />
                    </label>
                </div>
                <div className="form-section">
                    <label>
                        Nombre del intent:
                        <input type="text" name="displayName" value={formData.displayName} onChange={handleChange} className="styled-input" />
                    </label>
                </div>
                <div className="form-section">
                    <label>
                        Que puede preguntar el cliente ?
                        <select
                            name="trainingPhrasesParts"
                            value={formData.trainingPhrasesParts}
                            onChange={(e) => setFormData({ ...formData, trainingPhrasesParts: Array.from(e.target.selectedOptions, (option) => option.value) })}
                            multiple
                            className="styled-select"
                        >
                            {trainingPhrasesOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            value={newTrainingPhrase}
                            onChange={(e) => setNewTrainingPhrase(e.target.value)}
                            className="styled-input"
                        />
                        <button type="button" onClick={handleTrainingPhraseAdd} className="styled-button">
                            Agregar frase
                        </button>
                    </label>

                </div>
                <div className="form-section">
                    <label>
                        Que Respuestas le dare al cliente:
                        <select
                            name="responsePhrasesParts"
                            value={formData.responsePhrasesParts}
                            onChange={(e) => setFormData({ ...formData, responsePhrasesParts: Array.from(e.target.selectedOptions, (option) => option.value) })}
                            multiple
                            className="styled-select"
                        >
                            {responsePhrasesOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            value={newResponsePhrase}
                            onChange={(e) => setNewResponsePhrase(e.target.value)}
                            className="styled-input"
                        />
                        <button type="button" onClick={handleResponsePhraseAdd} className="styled-button">
                            Agregar frase
                        </button>
                    </label>
                </div>
                <div className="form-section">
                    <button type="submit" className="styled-submit-button">
                        Enviar Datos
                    </button>
                </div>
            </form >

            <div className="intent-list">
                <h2>Listado de Intents</h2>
                <ul>
                    {intents.map((intent) => (
                        <li key={intent.id}>
                            <strong>Intent Name: </strong> {intent.displayName}
                            <div>
                                <strong>Training Phrases:</strong>{' '}
                                {Array.isArray(intent.trainingPhrasesParts)
                                    ? intent.trainingPhrasesParts.join(', ')
                                    : intent.trainingPhrasesParts}
                            </div>
                            <div>
                                <strong>Response Phrases:</strong>{' '}
                                {Array.isArray(intent.responsePhrasesParts)
                                    ? intent.responsePhrasesParts.join(', ')
                                    : intent.responsePhrasesParts}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
};

export default IntentForm;
