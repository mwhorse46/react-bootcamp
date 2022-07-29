import React, { useState } from 'react';
import AnswerCard from './AnswerCard';




const QuestionCard = ({quiz}) => {

    // console.log(quiz, 'quiz');
    const [currentAnswers, setCurrentAnswers] = useState([]);
    
    const answers = [quiz.correct_answer, ...quiz.incorrect_answers];
    console.log(answers, 'answers');
    setCurrentAnswers(answers);


    return (
        <div className='question-card'>
            <h3>{quiz.question}</h3>
            {
               currentAnswers && currentAnswers.map((answer, index) => <AnswerCard key={index} answer={answer} />)
            }
        </div>
    );
};

export default QuestionCard;