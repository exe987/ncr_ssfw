import React from 'react';
import logo from './logo.png';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <a href='/'>
        <img src={logo} alt='logo' width={140} height={100} />
      </a>
    </div>
  );
};

export default Header;
