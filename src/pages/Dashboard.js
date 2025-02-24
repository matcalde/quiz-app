import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';

const Dashboard = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const { data, error } = await supabase.from('quizzes').select();
      if (error) console.error(error);
      else setQuizzes(data || []);
    };
    fetchQuizzes();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            {quiz.title} - 
            <button onClick={() => alert('Modifica quiz')}>Modifica</button> | 
            <button onClick={() => alert('Elimina quiz')}>Elimina</button>
          </li>
        ))}
      </ul>
      <button onClick={() => alert('Crea nuovo quiz')}>Crea Quiz</button>
    </div>
  );
};

export default Dashboard;