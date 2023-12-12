import "./Counter.scss"
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () => {
        setCounter(counter - 1);
    }
    return (
    <div className="counter-container">
        <p>Counter</p>
        <button onClick={handleDecrement}>-</button>
        <p>{counter}</p>
        <button onClick={handleIncrement}>+</button>
    </div>
    );
};

export default Counter