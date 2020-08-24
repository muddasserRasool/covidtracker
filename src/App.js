import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import FrontGrid from './components/FrontGrid';
import CountrySelect from './components/CountrySelect';

function App() {
  return (
    <div>
      <NavBar />
      <CountrySelect />
      <FrontGrid />
    </div>
  );
}

export default App;
