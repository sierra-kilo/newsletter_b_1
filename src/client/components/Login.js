import React, { Component } from 'react';
import Button from './Button'
import axios from 'axios'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      password: '',
      error: '',
      passwordVerified: false

    }
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onPasswordSubmit = this.onPasswordSubmit.bind(this)
  }

  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  }

  onPasswordSubmit = (e) => {
    axios.get('/api/password/').then(response => {
      const password = response.data[0].password;
      ((password === this.state.password) ? this.setState(() => ({
        passwordVerified: true,
        error: ''
      })) : this.setState(() => ({
        error: 'Incorrect Password',
        password: ''
      })));
      (this.state.passwordVerified) ? (this.props.changeState()) :
        null
    })
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="input-field col s12">
            <h3>Please login</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            this.onPasswordSubmit(e);
            this.setState(()=>{password: ''})

        }}>
              <input
                id="password"
                name="password"
                type="password"
                autoFocus
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
              <label htmlFor="password" className='active'>Password</label>
              <div>
                {(this.state.error) && <small className ='error'>{this.state.error}</small>}
              </div>
              <br></br>
              <Button buttonLabel='Enter'/>
              <br/>
              <br/>
              <p>Dev test password is "test123"</p>
        </form>
      </div>
    </div>
      </div>
    );
  }

}

export default LoginForm;
