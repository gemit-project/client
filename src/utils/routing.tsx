import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Search } from "../components/Search";
import { CheckOut } from "../components/CheckOut";
import { LogOut } from "../components/LogOut";
import { Setting } from "../components/Setting";
import { Chat } from "../components/Chat";
import SignIn from "../components/SginIn";
import { Register } from "../components/Register";
import { PasswordReset } from "../components/ResetPassword";
import { Buttom } from "../components/paymentFirstscreen/buttomComponent/payment-first-buttom";
import { ButtomSC } from "../components/paymentSecondscreen/buttomComponent/payment-second-buttom";
import FundingOptions from "../components/paymentThirdscreen/FundingOptions";

export const Routing: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route  path="/Reset_Password/:email/:token" element={<PasswordReset/>}/>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/LogOut" element={<LogOut />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Shipping&inssurance" element={<ButtomSC />} />
        <Route path="/GeneralDetails" element={<Buttom />} />
        <Route path="/FundingOptions" element={<FundingOptions/>} />
      </Routes>
    </>
  );
};
