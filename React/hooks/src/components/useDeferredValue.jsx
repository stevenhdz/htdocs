import { useState, useDeferredValue, startTransition, useContext  } from 'react';
import { UserContext } from '../App';

export const MyComponentuseDeferredValue = () => {
  const [count, setCount] = useState(0);

  const deferredCount = useDeferredValue(count, { timeoutMs: 9000 });

  const number = useContext(UserContext);

  const handleClick = () => {
    startTransition(() => {
      setCount(count + 1);
    });
  };

  return (
    <div style={{ border: '1px solid #000000' }}>
      <span>DeferredValue NO: {number}</span>
      <div>
        <p>Count: {count}</p>
        <p>Deferred Count: {deferredCount}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    </div>
  );
}