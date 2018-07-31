import React from 'react';
// button label will be passed in as a prop

const Button = ({buttonLabel, buttonStyle}) => (
  <div>
    <button>{buttonLabel}</button>
  </div>
);

export default Button;
