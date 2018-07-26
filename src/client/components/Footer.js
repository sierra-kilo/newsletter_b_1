import React from 'react';
import {Link} from 'react-router-dom';


const Footer = ({}) => (
  <div>
    {/* links go here */}
    <Link to={'/'} style={{ textDecoration: 'none' }}>Subscribe </Link>
    <Link to={'/unsubscribe'} style={{ textDecoration: 'none' }}>Unsubscribe </Link>
    <Link to={'/admin'} style={{ textDecoration: 'none' }}>Admin</Link>
  </div>
);

export default Footer;
