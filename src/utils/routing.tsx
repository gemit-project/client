
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Search } from "../components/Search";
import { LogOut } from "../components/LogOut";
import { Setting } from "../components/Setting";
import { Chat } from "../components/Chat";
import SignIn from "../components/SginIn";
import { Register } from "../components/Register";
import { PasswordReset } from "../components/ResetPassword";
import { ShippingAndInsurance } from "../components/shipping&insurance";
import { Payment } from "@mui/icons-material";
import { Confirmation } from "../components/confirmation";
import { FundingOptions } from "../components/fundingOptions";
import { Top } from "../components/topComponent/TopCheckout";
import { General } from "../components/general";

export const Routing: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Reset_Password/:email/:token" element={<PasswordReset />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/CheckOut" element={< Top />}>
          <Route path="General" element={< General />} />
          <Route path="ShippingAndInsurance" element={< ShippingAndInsurance />} />
          <Route path="FundingOptions" element={< FundingOptions />} />
          <Route path="Payment" element={< Payment />} />
          <Route path="Confirmation" element={< Confirmation />} />
        </Route>
        <Route path="/LogOut" element={<LogOut />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </>
  );
};
