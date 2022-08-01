import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import PlayerCard from './PlayerCard';
import ScoreCard from './ScoreCard';





const App = () => {

  const [winScore, setWinScore] = useState(10);
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

  const handleSubmit = (e) => {
    
    // prevent reload
    e.preventDefault();
    
    // reset player score
    handleReset();

    // get input data
    setWinScore(parseInt(e.target[0].value));

    // reset input data
    e.target[0].value = '';
  }

  



  return (
    <div className='container'>
      {/* <Header /> */}
      <ScoreCard winScore={winScore} handleSubmit={handleSubmit}  />
      <PlayerCard 
        handlePlayerOne={handlePlayerOne} 
        handlePlayerTwo={handlePlayerTwo} 
        handleReset={handleReset} 
        playerOneScore={playerOneScore} 
        playerTwoScore={playerTwoScore} 
        pOneAllowClick={pOneAllowClick} 
        pTwoAllowClick={pTwoAllowClick}
        winner={winner}
      />
      <Footer />
    </div>
  );
};

export default App;