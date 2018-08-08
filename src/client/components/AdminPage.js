import React, { Component } from 'react';
import EmailItem from './EmailItem'
import {CSVLink, CSVDownload} from 'react-csv';

class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
    allEmails: []
  }

  this.fetchEmails = this.fetchEmails.bind(this)
  this.hideEmail = this.hideEmail.bind(this)
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
        <h2>Admin Page</h2>
        <CSVLink data={this.state.allEmails} >Download CSV</CSVLink>
        <div>
          <ul className='collection with-header'>
           <li className="collection-header"><h5>List View</h5></li>
           <li className="collection-item">{this.state.allEmails.map((email) => {
             return <EmailItem
               key={email.id}
               email={email.email}
               onDelete = {() => this.hideEmail()}/>
             })}
           </li>
          </ul>

        </div>
      </div>
    );
  }
}

export default Admin;
