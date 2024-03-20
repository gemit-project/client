import React from "react";
import { BaseScreen } from "./components/base-screen";
import { BrowserRouter } from "react-router-dom";

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
