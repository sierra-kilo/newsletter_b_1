import React, { Component } from 'react';
import Header from './Header'

class Card extends Component {

  render() {
    return (
      <div>
        <Header/>
        {/* add react router here */}
        <h1>React Router will go here</h1>
        {/* <Footer/> */}
      </div>
    );
  }

}

export default Card;
