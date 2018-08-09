import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div>
        <div className='header-b4-nav'>
          <h1 className='center-align'>Keepers Market</h1>
        </div>

        <nav>
        <div className="nav-wrapper">
          <a  className="brand-logo right">Coming Soon!</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a>Shop</a></li>
            <li><a>Newsletter</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
        </nav>





        {/* <nav>
          <div className="nav-wrapper">
            <img
              className='brand-logo left logo-img responsive-img'
              src={'favicon.ico'}/>
              <h3 className='header-title right'>Coming Soon!</h3>
          </div>
        </nav> */}
      </div>
    );
  }

}

export default Header;
