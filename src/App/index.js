import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layouts/Header'
import Banner from './layouts/Banner'
import Voucher from './layouts/Voucher';
import Images from './layouts/Images';
import SilderQuote from './layouts/SilderQuote';
import SliderProduct from './layouts/SliderProduct';

function HomePage() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Voucher />
      <Images />
      <SilderQuote />
      <SliderProduct />
    </div>
  );
}

export default HomePage;
