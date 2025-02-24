import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const Leaderboard = ({ scores }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Classifica
      </Typography>
      <List>
        {scores.map((score, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${index + 1}. ${score.nickname}`}
              secondary={`Punteggio: ${score.score}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Leaderboard;