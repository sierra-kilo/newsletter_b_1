import React, { Component } from 'react';
import EmailForm from './EmailForm'
import MessageArea from './MessageArea'
import {SORRY_MSG, COME_BACK_MSG} from '../../../public/text';
import { Redirect } from 'react-router'

class UnsubscribePage extends Component {
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
    this.props.history.push('/')
  }, 10000);
}

  render() {
    return (
      <div className='container max-width'>
        <h3>Unsubscribe Here Page</h3>
        {!(this.state.submitted) ? (
          <div>
            <MessageArea message={SORRY_MSG}/>
            <EmailForm
              buttonLabel='Unsubscribe'
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
