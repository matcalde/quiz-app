import React, { useEffect, useState } from 'react';
import { Typography, List, ListItem, Button, Container } from '@mui/material';
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
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <List>
        {quizzes.map((quiz) => (
          <ListItem key={quiz.id}>
            {quiz.title}{' '}
            <Button
              variant="outlined"
              size="small"
              onClick={() => alert('Modifica quiz')}
            >
              Modifica
            </Button>{' '}
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={() => alert('Elimina quiz')}
            >
              Elimina
            </Button>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Crea Quiz
      </Button>
    </Container>
  );
};

export default Dashboard;