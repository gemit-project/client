import React from "react";
import { BaseScreen } from "./components/base-screen";
import { BrowserRouter } from "react-router-dom";
import General from './components/paymentFirstscreen/buttomComponent/general';
import Address from './components/paymentFirstscreen/buttomComponent/address';
import ContactDetails from './components/paymentFirstscreen/buttomComponent/contactDetails';
import ShippingAddress from './components/paymentFirstscreen/buttomComponent/shippingAddress';
import CompanyDetails from './components/paymentFirstscreen/buttomComponent/companyDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <BaseScreen />
      </BrowserRouter>
    </div>
  );
}

export default App;
