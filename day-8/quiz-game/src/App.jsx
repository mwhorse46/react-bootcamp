import React, { useState } from 'react';
import QuestionCard from './QuestionCard';





const App = () => {

  const [quizzes, setQuizzes] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);


  // const [currentAnswers, setCurrentAnswers] = useState([]);
  // const answers = [quiz.correct_answer, ...quiz.incorrect_answers];
  // console.log(answers, 'answers');
  // setCurrentAnswers(answers);

  const fetchQuiz = async () => {

    const response = await fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple');
    const {results} = await response.json();
    setQuizzes(results);
    setLoaded(true);
  }


  return (
    <div className='container'>
      {
        !loaded && <button onClick={fetchQuiz}>Start Quiz</button>
      }
      {
        loaded && <QuestionCard quiz={quizzes[currentQuestionIndex]} />
      }
    </div>
  );
};

export default App;