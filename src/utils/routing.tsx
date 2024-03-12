import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from '../components/side-bar';
import { Dashboard } from '../components/Dashboard';
import { Search } from "../components/Search";
import { CheckOut } from "../components/CheckOut";
import { LogOut } from "../components/LogOut";
import { Setting } from "../components/Setting";
import { Chat } from "../components/Chat";

export const Routing: React.FC =()=> {
    return (
      <>
        <Router>
          <SideBar top={63} topTo={142} />
          <Routes>
            <Route path="/Dashboard" element={< Dashboard />} key={1}/>
            <Route path="/Search" element={< Search/>} key={2}/>
            <Route path="/CheckOut" element={< CheckOut />} key={3}/>
            <Route path="/LogOut" element={< LogOut />} key={4}/>
            <Route path="/Setting" element={< Setting />} key={5}/>
            <Route path="/Chat" element={< Chat />} key={6}/>
          </Routes>
      </Router>
     </>
    );
  }
  
  
