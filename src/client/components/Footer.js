import React from 'react';
import {Link} from 'react-router-dom';


const Footer = ({}) => (
  <div className='center-align page-footer'>
    <Link className="waves-effect waves-teal btn-flat blue-text text-lighten-1"
     to={'/'}> Subscribe </Link>
    <Link className="waves-effect waves-teal btn-flat blue-text text-lighten-1"
      to={'/unsubscribe'}> Unsubscribe </Link>
    <Link className="waves-effect waves-teal btn-flat blue-text text-lighten-1"
      to={'/admin'} > Admin </Link>
  </div>
);

export default Footer;
