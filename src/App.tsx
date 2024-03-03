import React from 'react';
import logo from './logo.svg';
import './App.css';
import General from './components/paymentFirstscreen/buttomComponent/general';
import Address from './components/paymentFirstscreen/buttomComponent/address';
import ContactDetails from './components/paymentFirstscreen/buttomComponent/contactDetails';
import ShippingAddress from './components/paymentFirstscreen/buttomComponent/shippingAddress';
import CompanyDetails from './components/paymentFirstscreen/buttomComponent/companyDetails';

function App() {
  return (
    <div className="App">
      {/* <CompanyDetails/> */}
      <General/>
    </div>
  );
}

export default App;
