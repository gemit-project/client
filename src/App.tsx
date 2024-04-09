import { BaseScreen } from "./components/base-screen";
import { BrowserRouter } from "react-router-dom";
import "./output.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./app/slices/UserSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentUser({}))
  }, [])
  return (
    <div>
      <BrowserRouter>
        <BaseScreen />
      </BrowserRouter>

    </div>
  );
}

export default App;
