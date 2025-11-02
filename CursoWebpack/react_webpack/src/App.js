import { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    const [values, setValues] = useState([]);

    const handleClick = () => {
        setCount(count + 1);
        setValues(values.concat(count));
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
            <p>Values: {values}</p>
        </div>
    );
}

export default App;