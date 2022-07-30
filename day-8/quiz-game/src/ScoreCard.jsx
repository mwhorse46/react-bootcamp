import React from 'react';

const ScoreCard = ({totalScore, handleQuizReset}) => {
    return (
        <div style={{textAlign: 'center'}}>
            <h2>It's time to show your result: {totalScore}</h2>
            <button className='button' onClick={handleQuizReset}>Reset Quiz</button>
        </div>
    );
};

export default ScoreCard;