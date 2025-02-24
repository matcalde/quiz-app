import React, { useState } from 'react';
import { supabase } from '../services/supabase';

const CreateQuiz = () => {
  const [title, setTitle] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [maxTime, setMaxTime] = useState(0);

  const handleSubmit = async () => {
    const { error } = await supabase.from('quizzes').insert({
      title,
      background_image: backgroundImage,
      max_time_per_question: maxTime,
      created_by: 'USER_ID', // Sostituisci USER_ID con l'ID dell'utente loggato
    });
    if (error) console.error(error);
  };

  return (
    <div>
      <h1>Crea Quiz</h1>
      <input
        type="text"
        placeholder="Titolo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Immagine di sfondo"
        value={backgroundImage}
        onChange={(e) => setBackgroundImage(e.target.value)}
      />
      <input
        type="number"
        placeholder="Tempo massimo (secondi)"
        value={maxTime}
        onChange={(e) => setMaxTime(Number(e.target.value))}
      />
      <button onClick={handleSubmit}>Crea Quiz</button>
    </div>
  );
};

export default CreateQuiz;