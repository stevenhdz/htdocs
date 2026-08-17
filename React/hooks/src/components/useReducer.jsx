import React, { useReducer, useContext } from 'react';
import { UserContext } from '../App';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
            case 'DECREMENT':
                return { count: state.count - 1 };
                default:
                    return state;
                }
            };
            
export const MyComponentuseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const number = useContext(UserContext);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div style={{ border: '1px solid #000000' }}>
        <span>Reducer == State: {number}</span>
        <div>
        <p>Count: {state.count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    </div>
  );
}