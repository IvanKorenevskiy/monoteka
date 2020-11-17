import React from 'react';
import './App.scss';
import Header from './components/header/header';
import MainContent from './components/main-content/main-content';
import Menu from './components/menu/menu';
import Offers from './components/offers/offers';
function App() {
  return (
    <div className="wrapper">
      <Header/>
      <MainContent/>
      <Menu/>
      <Offers/>
    </div>
  );
}

export default App;
