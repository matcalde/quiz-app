import React from 'react';

const QuestionCard = ({ question, answers, onAnswer }) => {
  return (
    <div>
      <h3>{question.question_text}</h3>
      <ul>
        {answers.map((answer) => (
          <li key={answer.id} onClick={() => onAnswer(answer.answer_text)}>
            {answer.answer_text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;