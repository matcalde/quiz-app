import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../services/supabase';
import QuestionCard from '../components/QuestionCard';

const QuizPlay = () => {
  const { quizId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data, error } = await supabase
        .from('questions')
        .select()
        .eq('quiz_id', quizId);
      if (error) console.error(error);
      else setQuestions(data || []);
    };
    fetchQuestions();
  }, [quizId]);

  const handleAnswer = (answer) => {
    if (questions[currentQuestion]?.correct_answers.includes(answer)) {
      setScore(score + 10); // Punteggio fittizio
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Quiz
      </Typography>
      {currentQuestion < questions.length ? (
        <QuestionCard
          question={questions[currentQuestion]}
          answers={questions[currentQuestion]?.answers || []}
          onAnswer={handleAnswer}
        />
      ) : (
        <Typography variant="h5">Punteggio finale: {score}</Typography>
      )}
    </div>
  );
};

export default QuizPlay;