import React from 'react';





const PlayerCard = ({handlePlayerOne, handlePlayerTwo, handleReset, playerOneScore, playerTwoScore, pOneAllowClick, pTwoAllowClick, winner}) => {

    return (
        <div className='player_section'>
            
            {
                winner && <h1 style={{color: 'white'}}>{winner}</h1>
            }
            <h1 style={{marginBottom: '40px'}}>{playerOneScore} to {playerTwoScore}</h1>

            <button className={`button ${pOneAllowClick}`} onClick={handlePlayerOne}>Player 1</button>
            <button className={`button ${pTwoAllowClick}`} onClick={handlePlayerTwo}>Player 2</button>
            <br />
            <button className='reset_button' onClick={handleReset}>Reset</button>
        </div>
    );
};

export default PlayerCard;