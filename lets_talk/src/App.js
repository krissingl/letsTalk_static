import React, { useState } from 'react';
import Launch from './components/launch.js';
import SpillTea from './components/spillTea.js';
import './App.css';

function App() {

  const [page, changePage] = useState('home');

  let currentPage;

  if (page === 'home') {
    currentPage = (
      <Launch changePage={changePage}/>
    )
  } else {
    currentPage = (
      <SpillTea />
    )
  }

  return (
    <div>
    <div className="navBarBox">
      <div onClick={() => { changePage('home'); }} className="imgDiv">
        <img src="https://lets-talk-environment.s3-us-west-1.amazonaws.com/logos/logo.png" alt="letsTalkLogo" className="logo" />
      </div>
      <div className="navBar">
        <button className="menuBtn" onClick={() => { changePage('home'); }} type="button">Home</button>
        <button className="menuBtn" onClick={() => { changePage('spillTea'); }} type="button">Let's Have Tea</button>
      </div>
    </div>
    <div>
      {currentPage}
    </div>
  </div>
  );
}

export default App;
