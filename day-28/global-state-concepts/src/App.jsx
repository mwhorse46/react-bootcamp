import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);


  // const [count, dispatch] = useReducer()


  const handleIncrement = () => {

    setCount((prevCount) => prevCount + 1);
  }

  const handleDecrement = () => {

    setCount((prevCount) => prevCount - 1);
  }


  const handleReset = () => {

    setCount(0);
  }
  



  return (
    <div style={{textAlign: 'center', padding: '100px 0'}}>
      <h2>Count: {count}</h2>

      <hr />

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;