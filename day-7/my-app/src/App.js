import { useState } from 'react';



function App() {



  const [count, setCount] = useState(0)
  
  const handleIncrement = (num) => setCount(count + num);
  const handleDecrement = (num) => setCount(prevCount => prevCount - num)
  const handleReset = () => setCount(0);

  
  return (
    <>
      <h2>Count: {count}</h2>
      <br />
      <button onClick={() => handleIncrement(10)}>Increment</button>
      <button onClick={() => handleDecrement(10)}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
    
  );
}

export default App;
