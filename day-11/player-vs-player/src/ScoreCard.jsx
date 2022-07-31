import React from 'react';

const ScoreCard = ({winScore, handleSubmit}) => {

  
    return (
        <div style={{textAlign: 'center', padding: '50px', margin: '0'}}>
            <h1 style={{fontSize: '35px', margin: 0}}>Player Vs Player</h1>
            <h1>Wining Score: {winScore}</h1>

            <form onSubmit={handleSubmit}>
                <input className='scoreInput' type="number" />
                <input type="submit" value="Change Win Score" className='submitButton' />
            </form>
        </div>
    );
};

export default ScoreCard;