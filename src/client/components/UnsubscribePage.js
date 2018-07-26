import React, { Component } from 'react';
import EmailForm from './EmailForm'
import MessageArea from './MessageArea'

class UnsubscribePage extends Component {

  render() {
    return (
      <div>
        <h3>Unsubscribe Here Page</h3>
        <MessageArea/>
        <EmailForm/>
      </div>
    );
  }

}

export default UnsubscribePage;
