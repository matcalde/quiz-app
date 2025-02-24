import React from 'react';

const Leaderboard = ({ scores }) => {
  return (
    <div>
      <h2>Classifica</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            {score.nickname} - {score.score} punti
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;