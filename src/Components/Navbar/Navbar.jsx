import React, { useState } from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [hide, setHide] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setHide(!hide);
  };

  // Function to close the menu when a menu item is clicked
  const closeMenu = () => {
    setHide(false);
  };

  return (
    <div className='navbar container'>
      <nav>
        <h3>Delivery</h3>
        <ul className={hide ? '' : 'hide'}>
          <li>
            <Link to='hero' smooth={true} offset={0} duration={500} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to='About' smooth={true} offset={-200} duration={500} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to='security' smooth={true} offset={-200} duration={500} onClick={closeMenu}>
              Security
            </Link>
          </li>
          <li>
            <Link to='services' smooth={true} offset={-200} duration={500} onClick={closeMenu}>
              Services
            </Link>
          </li>
          <button className='btn'>Order Now!</button>
        </ul>
        <img src={menu_icon} alt="menu_icon" className='menu-icon' onClick={toggleMenu} />
      </nav>
    </div>
  );
};

export default Navbar;
