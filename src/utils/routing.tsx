

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../components/pages/dashboard/Dashboard";
import { Search } from "../components/pages/search/Search";
import { LogOut } from "../components/pages/LogOut";
import { Setting } from "../components/pages/Setting";
import { Chat } from "../components/pages/Chat";
import { Compare } from "../components/pages/search/Actions/Compare";
import { Filter } from "../components/pages/search/Actions/Filter";
import { Reset } from "../components/pages/search/Actions/Reset";
import { View } from "../components/pages/search/Actions/View";
import { Sort } from "../components/pages/search/Actions/Sort";
import SignIn from "../components/SginIn";
import { Register } from "../components/Register";
import { PasswordReset } from "../components/ResetPassword";
import { ProductPage } from "../components/ProductPage";
import { ButtomSecondScreen } from "../components/paymentSecondscreen/ButtomSecondScreen";
import { ButtomFirstScreen } from "../components/paymentFirstscreen/ButtomFirstScreen";
import { ShippingAndInsurance } from "../components/Payments/shipping&insurance";
import { Confirmation } from "../components/Payments/confirmation";
import { FundingOptions } from "../components/Payments/fundingOptions";
import { TopCheckout } from "../components/pages/checkout/topComponent/TopCheckout";
import { General } from "../components/Payments/general";
import { Payment } from "../components/Payments/payment";

export const Routing: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route  path="/Reset_Password/:email/:token" element={<PasswordReset/>}/>
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="Listing" element={<Listing />} />
        </Route>
        <Route path="/Search" element={<Search />}>
          <Route path="Compare" element={<Compare />} />
          <Route path="Reset" element={<Reset />} />
          <Route path="View" element={<View />} />
          <Route path="Sort" element={<Sort />} />
        </Route>
        <Route path="Filter" element={<Filter />} />
        <Route path="/CheckOut" element={< TopCheckout />}>
          <Route path="General" element={< General />} />
          <Route path="ShippingAndInsurance" element={< ShippingAndInsurance />} />
          <Route path="FundingOptions" element={< FundingOptions />} />
          <Route path="Payment" element={< Payment />} />
          <Route path="Confirmation" element={< Confirmation />} />
        </Route>
        <Route path="/LogOut" element={<LogOut />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Chat" element={<Chat />} />
        <Route  path="/Product" element={<ProductPage/>}/>
        <Route path="/Shipping&inssurance" element={<ButtomSecondScreen />} />
        <Route path="/GeneralDetails" element={<ButtomFirstScreen />} />
        <Route  path="/Product/:uuid" element={<ProductPage/>}/>
      </Routes>
    </>
  );
};



