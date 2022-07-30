import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import QuestionCard from './QuestionCard';
import ScoreCard from './ScoreCard';



const App = () => {

  const [quizzes, setQuizzes] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  // const [currentAnswers, setCurrentAnswers] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const [totalScore, setTotalScore] = useState(0);


  const fetchQuizData = async () => {

    const response = await fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple');
    const {results} = await response.json();
    setQuizzes(results);
    setLoaded(true);
  }

 
  const handleQuizReset = () => {

    setQuizzes([]);
    setLoaded(false);
    setCurrentQuestionIndex(0);
    setEndGame(false);
    setTotalScore(0);
  }
  

  return (
    <>
      <div className='container'>
      {
        !loaded && <button className='button' onClick={fetchQuizData}>Start Quiz</button>
      }

      {
        endGame && <ScoreCard totalScore={totalScore} handleQuizReset={handleQuizReset} />
      }
      
      {
        loaded && !endGame && <QuestionCard quiz={quizzes[currentQuestionIndex]} currentQuestionIndex={currentQuestionIndex} quizzes={quizzes} setTotalScore={setTotalScore} setCurrentQuestionIndex={setCurrentQuestionIndex} setEndGame={setEndGame} />
      }
    </div>
    <Footer />
    </>
  );
};

export default App;