import React, { createContext } from 'react';
import Counter from './components/Counter';




export const CounterContext = createContext();

const App = () => {
  

  const value = {
    arr: [1,3, 5, 7, 9],
    obj: {
      fName: 'Kawsar',
      lName: 'Ahmed',
      profession: 'Developer'
    }
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