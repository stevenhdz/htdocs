import React, { useRef, useContext } from 'react';
import { UserContext } from '../App';

export const MyComponentuseRef = () => {
  const inputRef = useRef(null);

  const number = useContext(UserContext);

  const handleClick = () => {
    console.log(inputRef)
    inputRef.current.focus()
    inputRef.current.disabled = true;
  };

  return (
    <div style={{ border: '1px solid #000000' }}>
        <span>ref: {number}</span>
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Enfocar input</button>
        </div>
    </div>
  );
};
