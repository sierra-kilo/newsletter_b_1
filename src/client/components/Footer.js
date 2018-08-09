import React from 'react';
import {Link} from 'react-router-dom';


const Footer = ({}) => (
  <div>
    <div className='footer-logo-div'>
      <img className='footer-logo responsive-img center' src={'favicon.ico'}/>
    </div>
    <div className='center-align page-footer footer'>
      <Link className="waves-effect waves-teal btn-flat white-text"
       to={'/'}> Subscribe </Link>
      <Link className="waves-effect waves-teal btn-flat white-text"
        to={'/unsubscribe'}> Unsubscribe </Link>
      <Link className="waves-effect waves-teal btn-flat white-text"
        to={'/admin'} > Admin </Link>
    </div>
  </div>

);

export default Footer;
