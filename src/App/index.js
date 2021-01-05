import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layouts/Header'
import MainContent from './layouts/MainContent'

function HomePage() {
  return (
    <div className="home">
      <Header />
      <MainContent />
    </div>
  );
}

export default HomePage;
