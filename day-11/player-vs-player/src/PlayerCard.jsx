import React, { useState } from 'react';





const PlayerCard = ({winScore, setWinScore}) => {

    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);
    const [winner, setWinner] = useState('');
    const [pOneAllowClick, setPOneAllowClick] = useState('');
    const [pTwoAllowClick, setPTwoAllowClick] = useState('');


    const generateRandomNumber = () => Math.floor(Math.random() * (winScore + 1));

    const handlePlayerOne = () => {

        const pOneScore = generateRandomNumber();
        setPlayerOneScore(pOneScore);

        setPOneAllowClick('disable_click');
        setPTwoAllowClick('allow_click');

        if(pOneScore === winScore) {

            setWinner('Player 1 is winner');
            setPOneAllowClick('disable_click');
            setPTwoAllowClick('disable_click');
        }
    }


    const handlePlayerTwo = () => {

        const pTwoScore = generateRandomNumber();
        setPlayerTwoScore(pTwoScore);

        setPTwoAllowClick('disable_click');
        setPOneAllowClick('allow_click');

        if(pTwoScore === winScore) {

            setWinner('Player 2 is winner');
            setPOneAllowClick('disable_click');
            setPTwoAllowClick('disable_click');
        }
    }


    const handleReset = () => {

        setPlayerOneScore(0);
        setPlayerTwoScore(0);
        setWinner('');
        setPOneAllowClick('');
        setPTwoAllowClick('');
        setWinScore(10);
    }




    return (
        <div className='player_section'>
            {/* <h4>Player 1: </h4>
            <h4>Player 2: </h4> */}

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