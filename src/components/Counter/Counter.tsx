import "./Counter.scss"
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () => {
        if(counter > 0) {
        setCounter(counter - 1);
        } else {setCounter(0)}
    }
    return (
    <div className="counter-container">
        <p className="counter__heading">Counter</p>
        <button className="counter__button" onClick={handleDecrement}>-</button>
        <p className="counter">{counter}</p>
        <button className="counter__button" onClick={handleIncrement}>+</button>
    </div>
    );
};

export default Counter