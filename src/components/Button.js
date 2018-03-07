import React from 'react';

import './Button.css';

const Button = ({ text, onClick, className }) => (
  <button
    type="button"
    className={className}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
