import React from 'react';
// button label will be passed in as a prop

const Button = (props) => (
  <div>
    <button
      style={props.buttonStyle}
      onClick={props.onClick}
      >
      {props.buttonLabel}
    </button>
  </div>
);

export default Button;
