import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../components/SideBar/Dashboard";
import { Search } from "../components/SideBar/Search";
import { CheckOut } from "../components/SideBar/CheckOut";
import { LogOut } from "../components/SideBar/LogOut";
import { Setting } from "../components/SideBar/Setting";
import { Chat } from "../components/SideBar/Chat";
import { Compare } from "../components/SideBar/Search/Button-Section/Compare";
import { Reset } from "../components/SideBar/Search/Button-Section/Reset";
import { Filter } from "../components/SideBar/Search/Button-Section/Filter";
import { View } from "../components/SideBar/Search/Button-Section/View";
import { Sort } from "../components/SideBar/Search/Button-Section/Sort";
import SignIn from "../components/SginIn";
import { Register } from "../components/Register";
import { PasswordReset } from "../components/ResetPassword";

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
      </Routes>
    </>
  );
};
  return (
    <>
      <Routes>
        <Route path="/Dashboard" element={< Dashboard />} />
        <Route path="/Search" element={< Search />}>
           <Route path="/Search/Compare" element={< Compare />} />
           <Route path="/Search/Filter" element={< Filter />} />
           <Route path="/Search/Reset" element={< Reset />} />
           <Route path="/Search/View" element={< View />} />
           <Route path="/Search/Sort" element={< Sort />} />
        </Route> 
        <Route path="/CheckOut" element={< CheckOut />} />
        <Route path="/LogOut" element={< LogOut />} />
        <Route path="/Setting" element={< Setting />} />
        <Route path="/Chat" element={< Chat />} />
      </Routes>
    </>
  );
};
