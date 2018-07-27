import React, { Component } from 'react';
import EmailForm from './EmailForm'
import MessageArea from './MessageArea'
import {WELCOME_MSG, THANK_YOU_MSG} from '../../../public/text';

class SubscribePage extends Component {
  constructor(props) {
  super(props)
  this.state = {
    submitted: false
  }
  this.changeState = this.changeState.bind(this)
}

changeState() {
  this.setState({
    submitted: true //!(this.state.submitted)
  })
  setInterval(() => {
    this.setState({
      submitted: false
    })
  }, 20000)
}

  render() {
    return (
      <div>
        <h3>Subscribe Here Page</h3>
        {!(this.state.submitted) ? (
          <div>
            <MessageArea message={WELCOME_MSG}/>
            <EmailForm/>
            {/* <Subscribe changeState={this.changeState}/> */}
          </div>
        ) : (
          <MessageArea message={THANK_YOU_MSG}/>
        )}
      </div>
    );
  }

}

export default SubscribePage;
