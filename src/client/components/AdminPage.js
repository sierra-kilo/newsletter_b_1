import React, { Component } from 'react';
import EmailItem from './EmailItem'

class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
    allEmails: [],
    showEmail: true
  }
  this.hideEmail = this.hideEmail.bind(this)
}

  componentDidMount() {
    fetch("/api/emails/")
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.map(emails => ({
        email: `${emails.email}`,
        id: `${emails.id}`
      }))).then(emails => this.setState({allEmails: emails}))
  }

  hideEmail = () => this.setState({showEmail:false})

  render() {
    return (
      <div>
        <h2>Admin Page</h2>
        <div>
          {this.state.allEmails.map((email) => {
            return <EmailItem key={email.id} email={email.email} onDelete={this.hideEmail}/>
          })}
        </div>
      </div>
    );
  }
}

export default Admin;
