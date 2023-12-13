# Ticket Tracker Project
The aim of this project is to create a ticket tracking system with REACT, Typescript and more...

## Core codes
The Counter component below is the core function of the system.
```
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
```

The search box and the dropdown box are the additional components that can be used to find the relevant information. 