import React from 'react';

const HighScore = ({ score }) => (
  <div className="high-score">
    <h2>High Score:</h2>
    <h1>{score}</h1>
  </div>
);

export default HighScore;
