import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <img
              className='brand-logo left logo-img responsive-img'
              src={'../../../public/favicon.ico'}/>
              <h3 className='header-title right'>Keepers Market</h3>
          </div>
        </nav>
        {/* <h2 className='header-title'>
          <img src={'../../../public/favicon.ico'} style={imgStyle}/>
          Keepers Market
        </h2> */}
      </div>
    );
  }

}

export default Header;
