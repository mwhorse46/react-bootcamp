import React, { useEffect, useState } from 'react';

const CounterFunctional = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(0);
    }

    useEffect(() => {

        console.log('useEffect is called');

        const timer = setInterval(() => {
            setCount(count + 1)
        }, 1000)


        
        return () => {

            console.log('CounterFunctional is unmounted');
            clearInterval(timer);
        }

    }, [count])




    return (
        <div>
            <h1>Functional component</h1>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default CounterFunctional;