import React from 'react';
import './layout.css'
import Header from './header/Header';

const Layout = (props) => {
  return (
    <div className='layout'>
      <Header />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
