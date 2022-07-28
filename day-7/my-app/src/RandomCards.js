import React from 'react';

const RandomCards = ({randomValues, setPickedValue}) => {
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
    );
};

export default RandomCards;