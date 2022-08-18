import React, { createContext, useReducer } from 'react';
import Counter from './components/Counter';




export const CounterContext = createContext();

const App = () => {


    // const [count, setCount] = useState(0);

    const INCREMENT = 'INCREMENT';
    const DECREMENT = 'DECREMENT';
    const RESET = 'RESET';
    
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

  const initialState = 0;
  const [count, dispatch] = useReducer(countReducer, initialState);



  // action creator
  const countIncrement = (dispatch, num) => {
      return dispatch({ type: INCREMENT, payload: num});
  }






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





  
  const value = {
    count,
    handleIncrement,
    handleDecrement,
    handleReset
  }

  


  return (
    <div style={{textAlign: 'center', padding: '100px 0'}}>


      <CounterContext.Provider value={value}>
        <Counter />
      </CounterContext.Provider>

      
    </div>
  );
};

export default App;