import React from 'react';
import logo from 'assets/images/logo.png';
import { images } from 'helpers/groupImage';
import './Header.scss';

/**
 * Component for Home page
 */
const Header = () => {
  return (
    <header className="header">
      <div className="logo-nav-div">
        <img className="logo" src={logo} alt="sabka bazaar logo image" />
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a className="main-nav-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Products
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="call-to-action-div">
        <nav className="nav-call-to-action">
          <ul className="call-to-action-list">
            <li>
              <a className="call-to-action-link" href="/login">
                SigIn
              </a>
            </li>
            <li>
              <a className="call-to-action-link" href="register">
                Register
              </a>
            </li>
          </ul>
        </nav>

        <div className="cart_count_display">
          <img className="cart_icon_class" src={images['cart1.svg']} alt="cart icon image" />
          <span className="cart_item-count">
            <strong> {0}</strong>
            <strong> items</strong>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
