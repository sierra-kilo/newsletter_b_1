import React, { Component } from 'react';
import EmailItem from './EmailItem'
import {CSVLink, CSVDownload} from 'react-csv';
import LoginForm from './Login'

class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
    allEmails: [],
    isAuth: false
  }

  this.fetchEmails = this.fetchEmails.bind(this)
  this.hideEmail = this.hideEmail.bind(this)
  this.changeState = this.changeState.bind(this)
  }

  changeState() {
    this.setState({
      isAuth: !this.state.isAuth
    })
  }

  componentDidMount() {
    this.fetchEmails()
  }

  hideEmail = () => this.fetchEmails()

  fetchEmails = () => {
    fetch("/api/emails/")
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.map(emails => ({
        email: `${emails.email}`,
        id: `${emails.id}`
      }))).then(emails => this.setState({allEmails: emails}))
  }

  render() {
    return (
      <div className='container max-width'>
        {!this.state.isAuth ? (
          <LoginForm changeState={this.changeState}/>
        ) : (
        <div className='list-view-collection'>
          <h2>Admin</h2>
          <CSVLink data={this.state.allEmails} >Download CSV</CSVLink>
          <div>
            <ul className='collection with-header'>
             <li className="collection-header"><h5>List View</h5></li>
             {this.state.allEmails.map((email) => {
               return <EmailItem
                 key={email.id}
                 email={email.email}
                 onDelete = {() => this.hideEmail()}/>
               })}

            </ul>

          </div>
        </div>
        )}
      </div>
    );
  }
}

export default Admin;
