import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Search } from "../components/Search";
import { CheckOut } from "../components/CheckOut";
import { LogOut } from "../components/LogOut";
import { Setting } from "../components/Setting";
import { Chat } from "../components/Chat";

export const Routing: React.FC =()=> {
    return (
      <>
        <Router>
         <div style={{display: 'flex', flexDirection: 'row'}}> 
          <SideBar/>
          <Routes>
            <Route path="/Dashboard" element={< Dashboard />} />
            <Route path="/Search" element={< Search/>} />
            <Route path="/CheckOut" element={< CheckOut />} />
            <Route path="/LogOut" element={< LogOut />} />
            <Route path="/Setting" element={< Setting />}/>
            <Route path="/Chat" element={< Chat />}/>
          </Routes>
         </div> 
      </Router>
     </>
    );
  }
  
  
