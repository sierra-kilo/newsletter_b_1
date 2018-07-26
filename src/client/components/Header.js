import React, { Component } from 'react';

const imgStyle = {
  maxHeight: '16.5px'
}

class Header extends Component {

  render() {
    return (
      <div>
        <h2>
          <img src={'../../../public/favicon.ico'} style={imgStyle}/>
          Keepers Market
        </h2>
      </div>
    );
  }

}

export default Header;
