import { useState } from 'react';
import styles from './App.module.css';

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
      <RandomCard randomValues={randomValues} setPickedValue={setPickedValue} />
    </>
    
  );
}


function IsOddOrEven({value}) {

  const oddOrEven = value % 2 === 0 ? 'even' : 'odd'

  return (
    <>
      {/* <div>Number is {value && value % 2 === 0 ? <span style={{color:'green'}}>Even</span> : <span style={{color:'red'}}>Odd</span>}</div> */}
      <br />

      <div>
        Number is <span className={ oddOrEven === 'even' ? styles.even : styles.odd}>{oddOrEven}</span>
      </div>
      <br />
    </>
  )
}


function RandomCard({randomValues, setPickedValue}) {
  
  return (
    <div>
      {
        randomValues.map((randomValue, index) => <div style={{
          display: 'inline-block',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          backgroundColor: 'red',
          textAlign: 'center',
          lineHeight: '150px',
          color: 'white'
        }} key={index} onClick={() => setPickedValue(randomValue)}>{randomValue}</div>)
      }
    </div>
  )
}

export default App;
