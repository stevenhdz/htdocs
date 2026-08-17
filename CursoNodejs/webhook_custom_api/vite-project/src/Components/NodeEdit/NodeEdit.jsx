import { useEffect, useState } from "react";
import './NodeEdit.css';

export default function EditMessage({ nodeName, setNodeName, nodeBg, setNodeBg, nodeLabel, setNodeLabel }) {
    const [newOption, setNewOption] = useState('');
    const [node, setNode] = useState([]);
    const [intents, setIntents] = useState([]);
    const [ml, setMl] = useState(false)

    useEffect(() => {
        const uniqueNodesSet = new Set([...node, ...nodeBg]);
        const uniqueNodes = [...uniqueNodesSet];
        setNode(uniqueNodes);
    }, [nodeBg]);

    const handleInputChangeML = (e) => {
        setMl(e.target.checked)
    }

    const handleInputChange = (e) => {
        setNewOption(e.target.value);
    };

    const addOption = () => {
        if (newOption.trim() !== '' && !node.includes(newOption)) {
            setNode([...node, newOption]);
            setNodeBg([...nodeBg, newOption]);
            setNewOption('');
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
        <div className="updatenode__controls">
            <h1>
                Configuracion del nodo: [ {nodeName} ]
            </h1>

            <span> Descripcion de que hace: </span>
            <input
                value={nodeLabel}
                onChange={(evt) => setNodeLabel(evt.target.value)}
            />
            <br />
            <br />

            <span> Respuesta seran de ? </span>
            <div style={{ display: "flex" }}>
                <span>NLP (cognitivo)</span>
                <label className="switch">
                    <input type="checkbox" value={ml} onChange={handleInputChangeML}></input>
                    <span className="slider round"></span>
                </label>
                <span>Personalizado</span>
            </div>

            {ml && <div>

                <span> Escriba frase personalizada de respuesta para agregar: </span>
                <input
                    type="text"
                    value={newOption}
                    onChange={handleInputChange}
                    placeholder="Agregar nueva opción"
                />
                <button onClick={addOption}>Agregar</button>
            </div>
            }
            <br />
            <br />


            {ml &&
                <div>
                    <span> Seleccione una o mas frases agregadas ( si selecciona ten en cuenta que el motor cognitivo ML no respondera, se hara con base a lo seleccionado): </span>
                    <select
                        multiple
                        value={nodeBg}
                        onChange={(evt) => {
                            const selectedOptions = Array.from(evt.target.selectedOptions, (option) => option.value);
                            setNodeBg(selectedOptions)
                        }}
                    >

                        {node.length > 0 ? node.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        )) : node.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>))}
                    </select>

                </div>}

            <br />
            <br />

            <span> Selecciona el Intent: </span>
            <select
                value={nodeName}
                onChange={(evt) => setNodeName(evt.target.value)}
            >
                <option key={'0'} value={'0'}>- select one intent -</option>
                {intents.map((intent) => (
                    <option key={intent.id} value={intent.displayName}>
                        {intent.displayName}
                    </option>
                ))}
            </select>


        </div>
    );
}
