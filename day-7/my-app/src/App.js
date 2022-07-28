import { useState } from 'react';
import IsOddOrEven from './IsOddOrEven';
import RandomCards from './RandomCards';




function App() {

  const [count, setCount] = useState(0)
  const handleIncrement = (num) => setCount(count + num);
  const handleDecrement = (num) => setCount(prevCount => prevCount - num)
  const handleReset = () => setCount(0);

  const randomValues = [1, 3, 6, 7, 9, 10];
  const [pickedValue, setPickedValue] = useState(null);


  
  return (
    <>
      <h2>Count: {count}</h2>
      <br />
      <button onClick={() => handleIncrement(10)}>Increment</button>
      <button onClick={() => handleDecrement(10)}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <br />
      <br />
      <IsOddOrEven value={pickedValue} />
      <RandomCards randomValues={randomValues} setPickedValue={setPickedValue} />
    </>
    
  );
}






export default App;
