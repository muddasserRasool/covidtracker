import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import FrontGrid from './components/FrontGrid';
import CountrySelect from './components/CountrySelect';
import Chart from './components/Chart'

function App() {
  const CountryCode = useState('')
  console.log(CountryCode)
  return (
    <div>
      <NavBar />
      <br />
      <hr />
      <CountrySelect CountryCode={CountryCode}/>
      <hr />
      <FrontGrid CountryCode={CountryCode[0]}/>
      
      <Chart CountryCode={CountryCode[0]}/> 
    </div>
  );
}

export default App;
