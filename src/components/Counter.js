import React from 'react';

const Counter = ({ count, name }) => (
  <div className={`single-counter counter-${name}`}>
    <h2>{name}:</h2>
    <h1>{count}</h1>
  </div>
);

export default Counter;
