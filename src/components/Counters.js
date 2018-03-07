import React from 'react';

import Counter from './Counter';

import './Counters.css';

const Counters = ({ whackCount, time, highScore}) => (
  <div className="counters-container">
    <Counter
      name="Whacks"
      count={whackCount}
    />
    <Counter
      name="High Score"
      count={highScore}
    />
    <Counter
      name="Timer"
      count={time}
    />
  </div>
);

export default Counters;
