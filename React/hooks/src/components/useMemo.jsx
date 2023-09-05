import React, { useState, useMemo, useContext } from 'react';
import { UserContext } from '../App';

export const MyComponentuseMemo = () => {
    const [inputValue, setInputValue] = useState('');
  
    const number = useContext(UserContext);

    // Memoized uppercase value of the input
    const uppercaseValue = useMemo(() => {
      console.log('Calculating uppercase value...');
      return inputValue.toUpperCase();
    }, [inputValue]);

    return (
      <div style={{ border: '1px solid #000000' }}>
        <span>Memo: {number}</span>
        <div>
            <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <p>Uppercase value: {uppercaseValue}</p>
        </div>
      </div>
    );
};