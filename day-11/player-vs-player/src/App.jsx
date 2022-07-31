import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import PlayerCard from './PlayerCard';
import ScoreCard from './ScoreCard';





const App = () => {

  const [winScore, setWinScore] = useState(10);

  const handleSubmit = (e) => {
    
    // prevent reload
    e.preventDefault();
    
    // get input data
    setWinScore(parseInt(e.target[0].value));

    // reset input data
    
  }

  



  return (
    <div className='container'>
      {/* <Header /> */}
      <ScoreCard winScore={winScore} handleSubmit={handleSubmit}  />
      <PlayerCard winScore={winScore} setWinScore={setWinScore} />
      <Footer />
    </div>
  );
};

export default App;