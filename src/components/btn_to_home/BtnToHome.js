import React from 'react';
import { Link } from 'react-router-dom';
import './BtnToHome.css';

const BtnToHome = () => {
  return (
    <Link className='btn_to_home' to={'/'}>
      <p>Salir</p>
    </Link>
  );
};

export default BtnToHome;
