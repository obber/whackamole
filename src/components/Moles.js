import React from 'react';

import Mole from './Mole';

import './Moles.css';

const Moles = ({ moles, onWhack, gameActive }) => (
  <div className={`moles ${gameActive ? 'game-active' : ''}`}>
    {moles.map((moleState, idx) => (
      <Mole
        key={`mole-${idx}`}
        active={moleState}
        id={idx}
        onWhack={onWhack}
      />
    ))}
  </div>
);

export default Moles;
