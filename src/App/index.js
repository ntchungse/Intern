import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layouts/Header'
import Banner from './layouts/Banner'
import Voucer from './layouts/Voucher'
import Voucher from './layouts/Voucher';

function HomePage() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Voucher />
    </div>
  );
}

export default HomePage;
