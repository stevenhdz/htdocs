import { useDebugValue, useState, useContext } from 'react';
import { UserContext } from '../App';

export const MyComponentuseDebugValue = () => {
  const [count, setCount] = useState(0);
  const number = useContext(UserContext);

  useDebugValue('count', count);

  return (
    <div style={{ border: '1px solid #000000' }}>
    <span>DebugValue NO: {number}</span>
    <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <p>Count: {count}</p>
    </div>
</div>
  );
}