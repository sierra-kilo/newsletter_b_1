import React from 'react';
// message will come from external source need to pass in as prop

const MessageArea = (props) => (
  <div>
    {props.message}
  </div>
);

export default MessageArea;
