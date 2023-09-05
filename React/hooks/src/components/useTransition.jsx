import React, { useState, useTransition, useLayoutEffect, useContext } from 'react';
import { UserContext } from '../App';

export const MyComponentuseTransition = () => {
    const number = useContext(UserContext);
    const [value, setValue] = useState("");
    const [isPending, startTransition] = useTransition();
  
    useLayoutEffect(() => {
        var container = document.getElementsByClassName("container");
        var list = document.getElementsByClassName("list");
        if (list.length) {
            container[0].removeChild(list[0]);
        }
    });
  
    const handleChange = (e) => {
        startTransition(() => setValue(e.target.value), 1000);
    };
  
    return (
        <div style={{ border: '1px solid #000000' }}>
            <span>Transition: {number}</span>
            <input onChange={handleChange} />
            {Array(10000)
                .fill("a")
                .map((item) => (
                    <div>{value}</div>
                ))}
        </div>
    );

    
}
