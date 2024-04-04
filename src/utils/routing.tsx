import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from '../components/side-bar';
import { Dashboard } from '../components/Dashboard';
import { Search } from "../components/Search";
import { CheckOut } from "../components/CheckOut";
import { LogOut } from "../components/LogOut";
import { Setting } from "../components/Setting";
import { Chat } from "../components/Chat";
import { CheckoutRouting } from "../components/checkout-routing";
import General from "../components/paymentFirstscreen/buttomComponent/general";
import { FundingOptions } from "../components/fundingOptions";
import { Payment } from "@mui/icons-material";
import { Confirmation } from "../components/confirmation";
import { ShippingAndInsurance } from "../components/shipping&insurance";
import SignIn from "../components/SginIn";
import { Register } from "../components/Register";
import { PasswordReset } from "../components/ResetPassword";

export const Routing: React.FC = () => {
  return (
    <>
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Reset_Password/:email/:token" element={<PasswordReset />} />
          <Route path="/Dashboard" element={< Dashboard />} />
          <Route path="/Search" element={< Search />} />
          <Route path="/CheckOut" element={< CheckOut />} >
            {/* <Route></Route> <CheckoutRouting/> */}
            <Route path="General" element={< General />} />
            <Route path="ShippingAndInsurance" element={< ShippingAndInsurance />} />
            <Route path="FundingOptions" element={< FundingOptions />} />
            <Route path="Payment" element={< Payment />} />
            <Route path="Confirmation" element={< Confirmation />} />
          </Route>
          <Route path="/LogOut" element={< LogOut />} />
          <Route path="/Setting" element={< Setting />} />
          <Route path="/Chat" element={< Chat />} />
        </Routes>
      </Router>
    </>
  );
}


