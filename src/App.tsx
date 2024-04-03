import { BaseScreen } from "./components/base-screen";
import { BrowserRouter } from "react-router-dom";
import "./output.css";

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
