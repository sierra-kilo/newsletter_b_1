import React from 'react';
// button label will be passed in as a prop

const Button = (props) => (

    <button
      className={'waves-effect waves-light btn ' }
      style={props.buttonStyle}
      onClick={props.onClick}
      >
      {props.buttonLabel}
    </button>

);

export default Button;
