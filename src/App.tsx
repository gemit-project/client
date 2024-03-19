import React from "react";
import { TopHeader } from './components/TopHeader';
import { BaseScreen } from "./components/base-screen";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./components/login";

function App() {
  return (
    <div>
        <div>
      <TopHeader></TopHeader>
      <BrowserRouter>
        <BaseScreen />
        <Login/>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
