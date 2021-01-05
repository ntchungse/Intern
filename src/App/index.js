import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layouts/Header'
import Banner from './layouts/Banner'

function HomePage() {
  return (
    <div className="home">
      <Header />
      <Banner />
    </div>
  );
}

export default HomePage;
