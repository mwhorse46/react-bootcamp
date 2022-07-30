import React, { useEffect, useState } from 'react';
import AnswerCard from './AnswerCard';
import shuffle from './utils';




const QuestionCard = ({quiz, currentQuestionIndex, quizzes, setTotalScore, setCurrentQuestionIndex, setEndGame}) => {

    const [correctAnswer, setCorrectAnswer] = useState('');
    const [currentAnswers, setCurrentAnswers] = useState([]);
    const [pickedAnswer, setPickedAnswer] = useState('');

    useEffect(() => {

        setCorrectAnswer(quiz.correct_answer);
        setCurrentAnswers(shuffle(quiz));
    }, [quiz])


    const navigateNext = () => {

        setPickedAnswer('');
    
        const hasNext = (currentQuestionIndex + 1) < quizzes.length;
        if(hasNext) {
    
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      
        } else {
          
          setEndGame(true);
        }
    
    }


    const pickAnswer = (answer) => {
                
        setPickedAnswer(answer);

        if(answer === correctAnswer){
            
            setTotalScore((prevScore) => prevScore + 1);
        }
    }

    

    return (
        <div className='question-card'>
            <p>Question: {currentQuestionIndex + 1} / {quizzes.length}</p>
            <h3>{quiz.question}</h3>
            
            <ul style={{listStyle: 'none', margin: '0', padding: '0'}}>
            {
               currentAnswers && currentAnswers.map((answer, index) => <AnswerCard key={index} answer={answer} pickAnswer={pickAnswer} correctAnswer={correctAnswer} pickedAnswer={pickedAnswer} />)
            }
            </ul>

            <br />
            <button className='nextButton' onClick={navigateNext}>Next</button>
            
        </div>
    );
};

export default QuestionCard;