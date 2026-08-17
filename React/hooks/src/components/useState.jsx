import React, { useState, useContext } from 'react';
import { UserContext } from '../App';

export const MyComponentuseState = () => {
  const [count, setCount] = useState(0);

  const number = useContext(UserContext);
    
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ border: '1px solid #000000' }}>
          <span>State: {number}</span>
          <div> 
            <p>Contador: {count}</p>
            <button onClick={increment}>Incrementar</button>    
          </div>
    </div>
  );
}