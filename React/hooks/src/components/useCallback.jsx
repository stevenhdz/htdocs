import React, { useState, useCallback, useContext } from 'react';
import { UserContext } from '../App';

export const MyComponentuseCallback = () => {
    const [items, setItems] = useState([]);
    
    const number = useContext(UserContext);

    const addItem = useCallback(() => {
        setItems(prevItems => [...prevItems, Math.random()]);
    }, []);

    return (
        <div style={{ border: '1px solid #000000' }}>
            <span>Callback: {number}</span>
            <div>
                <button onClick={addItem}>Agregar Item</button>
                <ul style={{ width: '350px' }}>
                    {items.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
