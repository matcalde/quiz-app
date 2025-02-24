import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const QuestionCard = ({ question, answers, onAnswer }) => {
  return (
    <Card sx={{ maxWidth: 600, mx: 'auto', my: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {question.question_text}
        </Typography>
        {answers.map((answer) => (
          <Button
            key={answer.id}
            fullWidth
            variant="outlined"
            onClick={() => onAnswer(answer.answer_text)}
            sx={{ mb: 1 }}
          >
            {answer.answer_text}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;