import React from 'react';
import Header from './header/Header';
import Description from './description/Description';
import MainBlock from './main-block/MainBlock';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <MainBlock />
    </div>
  );
}

export default App;
