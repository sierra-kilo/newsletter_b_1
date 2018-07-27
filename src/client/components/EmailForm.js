import React, { Component } from 'react';
import Button from './Button'
import axios from 'axios'

class EmailForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      error: ''
    }
    this.onEmailChange = this.onEmailChange.bind(this)
    this.handleSubmitSubscribe = this.handleSubmitSubscribe.bind(this)
    this.handleSubmitUnsubscribe = this.handleSubmitUnsubscribe.bind(this)
  }
  onEmailChange = (e) => {
    // Materialize.updateTextFields();
    const email = e.target.value;
    this.setState(() => ({ email }))
  }

  handleSubmitSubscribe = (e) => {
    e.preventDefault();
    const email = this.state.email.toLowerCase()  ;
    this.setState(() => ({
      email: ''
    }))
    axios.post("/api/emails/", {
      email
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.props.changeState()
  }

  handleSubmitUnsubscribe = (e) => {
  e.preventDefault();
  const email = this.state.email.toLowerCase();
  this.setState(() => ({
    email: ''
  }))

  axios.delete("/api/emails/delete/", {
    data: {email: email}
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  this.props.changeState()
}

  render() {
    return (
      <div>
        <form
          // onSubmit={this.onSubmit.bind(this)}
          // onSubmit(e) {
          //   if(this.props.actionType === 'submit') {
          //     this.handleSubmitSubscribe(e)
          //     this.props.changeState()
          //   } else {
          //     this.handleSubmitUnsubscribe(e)
          //     this.props.changeState()
          //   }
          // }


          onSubmit={(e) => {
          (this.props.actionType === 'submit') ?
          this.handleSubmitSubscribe(e)
          :
          this.handleSubmitUnsubscribe(e)
        }}>


          {/* input needs props to set perams */}
          <input
            value={this.state.email}
            onChange={this.onEmailChange}/>
          {/* Button needs props to display correct label */}
          <Button/>
        </form>
      </div>
    );
  }

}

export default EmailForm;
