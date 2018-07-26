import React, { Component } from 'react';
import EmailItem from './EmailItem'

class AdminPage extends Component {

  render() {
    return (
      <div>
        <EmailItem/>
        <EmailItem/>
        <EmailItem/>
      </div>
    );
  }

}

export default AdminPage;
