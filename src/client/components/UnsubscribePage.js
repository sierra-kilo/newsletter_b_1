import React, { Component } from 'react';
import EmailForm from './EmailForm'
import MessageArea from './MessageArea'
import {SORRY_MSG, COME_BACK_MSG} from '../../../public/text';

class UnsubscribePage extends Component {

  render() {
    return (
      <div>
        <h3>Unsubscribe Here Page</h3>
        {!(this.state.submitted) ? (
          <div>
            <MessageArea message={SORRY_MSG}/>
            <EmailForm
              actionType='unsub'
              changeState={this.changeState}/>
            {/* <Subscribe changeState={this.changeState}/> */}
          </div>
        ) : (
          <MessageArea message={COME_BACK_MSG}/>
        )}
      </div>
    );
  }

}

export default UnsubscribePage;
