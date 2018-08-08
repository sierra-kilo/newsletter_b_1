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
        <div className="row">
          <div className="input-field col s12">
        <form
          onSubmit={(e) => {
          (this.props.actionType === 'submit') ?
          this.handleSubmitSubscribe(e)
          :
          this.handleSubmitUnsubscribe(e)
        }}>
              <input
                id="email"
                name="email"
                type="email"
                className="validate"
                autoFocus
                value={this.state.email}
                onChange={this.onEmailChange}
              />
              <label htmlFor="email" className='active'>Email</label>
              {/* Button needs props to display correct label */}
              <br></br>
              <br></br>
              <br></br>
              <Button buttonLabel={this.props.buttonLabel}/>


        </form>
      </div>
    </div>
      </div>
    );
  }

}

export default EmailForm;
