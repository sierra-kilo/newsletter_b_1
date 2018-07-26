import React, { Component } from 'react';
import EmailForm from './EmailForm'
import MessageArea from './MessageArea'

class SubscribePage extends Component {

  render() {
    return (
      <div>
        <h3>Subscribe Here Page</h3>
        <MessageArea/>
        <EmailForm/>
      </div>
    );
  }

}

export default SubscribePage;
