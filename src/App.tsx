import React from 'react';
import { TopHeader } from './components/TopHeader';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/side-bar';
import { Routing } from './utils/routing';

function App() {
  return (
    <div>
      <TopHeader></TopHeader>
      <Routing></Routing>
    </div>
  );
}

export default App;
