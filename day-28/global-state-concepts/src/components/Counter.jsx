import React, { useContext, useReducer } from 'react';
import { CounterContext } from '../App';





const Counter = () => {

    // const [count, setCount] = useState(0);

    const initialState = 0;

    const INCREMENT = 'INCREMENT';
    const DECREMENT = 'DECREMENT';
    const RESET = 'RESET';

    // action creator
    const countIncrement = (dispatch, num) => {
        return dispatch({ type: INCREMENT, payload: num});
    }

    const countReducer = (state, action) => {

        // if(action.type === INCREMENT) {
        //   return state + action.payload;
        // } else {
        //   return state;
        // }

        const {type, payload} = action;
        switch (type) {

        case INCREMENT:
            return state + payload;

        case DECREMENT:
            return state - payload;

        case RESET:
            return payload;

        default:
            return state;
        }

    }

    const [count, dispatch] = useReducer(countReducer, initialState);
    const {arr, obj} = useContext(CounterContext);
    console.log(arr, 'arr');
    console.log(obj, 'obj');


    const handleIncrement = () => {

        // setCount((prevCount) => prevCount + 1);
        // countIncrement(dispatch, 10);

        dispatch({ type: INCREMENT, payload: 10});
    }

    const handleDecrement = () => {

        // setCount((prevCount) => prevCount - 1);
        dispatch({ type: DECREMENT, payload: 5});
    }


    const handleReset = () => {

        // setCount(0);
        dispatch({ type: RESET, payload: 0});
    }
    




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