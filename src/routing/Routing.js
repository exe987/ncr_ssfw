import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeBank from '../pages/HomeBank';
import AccountData from '../pages/AccountData';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<HomeBank />} />
        <Route index path='/a' element={<AccountData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
