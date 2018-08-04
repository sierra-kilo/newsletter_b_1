import React, { Component } from 'react';
import AppRouter from '../router/AppRouter'


class Card extends Component {

  render() {
    return (
      <div>
        <AppRouter className="inner-card"/>
      </div>
    );
  }

}

export default Card;
