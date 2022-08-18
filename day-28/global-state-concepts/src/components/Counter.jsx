import React, { useContext } from 'react';
import { CounterContext } from '../App';





const Counter = () => {

    const {count, handleIncrement, handleDecrement, handleReset} = useContext(CounterContext);
    


    return (
        <div>
            <h2>Count: {count}</h2>

            <hr />

            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;