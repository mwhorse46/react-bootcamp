import React from 'react';
import './AnswerCard.css';



const AnswerCard = ({answer, pickAnswer, correctAnswer, pickedAnswer}) => {

    // user selected answer
    // correct answer
    // picked answer
    
    const isRightAnswer = pickedAnswer && answer === correctAnswer;
    const isWrongAnswer = pickedAnswer && answer === pickedAnswer && pickedAnswer !== correctAnswer;
    
    const correctClass = isRightAnswer ? 'correct_answer' : '';
    const wrongClass = isWrongAnswer ? 'wrong_answer' : '';
    const disableClass = pickedAnswer && 'disable_answer';
    
    return (
        <div onClick={() => pickAnswer(answer)} className={`containerLi ${correctClass} ${wrongClass} ${disableClass}`}>
            <li>{answer}</li>
        </div>
    );
};

export default AnswerCard;