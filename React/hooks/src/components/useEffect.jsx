import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../App';

export const MyComponentuseEffect = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const number = useContext(UserContext);

  // Efecto que se ejecuta después del primer renderizado
  useEffect(() => {
    console.log("Componente renderizado");
    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  // Efecto que se ejecuta cuando 'count' cambia
  useEffect(() => {
    console.log("Count cambió:", count);
    return () => {
      console.log("Cleanup de Count");
    };
  }, [count]);

  // Efecto que se ejecuta después de cada renderizado
  useEffect(() => {
    console.log("Renderizado completo");
    return () => {
      console.log("Cleanup de Renderizado");
    };
  });

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const changeMessage = () => {
    setMessage("Nuevo mensaje");
  };

  return (
    <div style={{ border: '1px solid #000000' }}>
         <span>Effect: {number}</span>
         <div>
            <h3>Contador: {count}</h3>
            <button onClick={increment}>Incrementar</button>
            <button onClick={changeMessage}>Cambiar Mensaje</button>
            <p>{message}</p>
         </div>
    </div>
  );
};
