import React from 'react';
import Button from './Button'

const EmailForm = ({props}) => (
  <div>
    <form>
      <input/>
      {/* Button needs props to display correct label */}
      <Button/>
    </form>
  </div>
);

export default EmailForm;
