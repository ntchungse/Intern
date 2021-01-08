import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layouts/Header'
import Banner from './layouts/Banner'
import Voucher from './layouts/Voucher';
import Images from './layouts/Images';
import SilderQuote from './layouts/SilderQuote';
import SliderProduct from './layouts/SliderProduct';
import SocialList from './layouts/SocialList';
import AboutMe from './layouts/AboutMe';
import Footer from './layouts/Footer';

function HomePage() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Voucher />
      <Images />
      <SilderQuote />
      <SliderProduct />
      <SocialList />
      <AboutMe />
      <Footer/>
    </div>
  );
}

export default HomePage;
