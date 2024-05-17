import React, { useId, useContext, useRef } from 'react';
import { UserContext } from '../App';

export const MyComponentuseId = () => {
  const number = useContext(UserContext);
  
  const id = useId();
  const ch = useRef(null);

  const id2 = useId();
  const ch2 = useRef(null);


  const handleDisabled = () => {
    console.log(ch)
    ch.current.focus()
    ch.current.disabled = true;
    console.log(ch2)
    ch2.current.focus()
    ch2.current.disabled = true;
  };

  const handleNotDisabled = () => {
    console.log(ch)
    ch.current.focus()
    ch.current.disabled = false;
    console.log(ch2)
    ch2.current.focus()
    ch2.current.disabled = false;
  };

  return (
    <div style={{ border: '1px solid #000000' }}>
        <span>Id: {number}</span>
        <div>
            <label htmlFor={id}>react</label>
            <input ref={ch} id={id} type="checkbox" name="react" />
                <br />
            <label htmlFor={id2}>react 2</label>
            <input ref={ch2} id={id2} type="checkbox" name="react" />
        </div>
            <button onClick={handleDisabled}>bloquear</button>
            <button onClick={handleNotDisabled}>desbloquear</button>
    </div>
  );
}
