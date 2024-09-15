import React from 'react';
import logo from 'assets/images/logo.png';
import { images } from 'helpers/groupImage';
import './Footer.scss';

/**
 * Component for Home page
 */
const Footer = (props) => {
  const { customStyle = '' } = props;
  return (
    <footer className={`footer ${customStyle}`}>
      copyright &#169; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
    </footer>
  );
};

export default Footer;
