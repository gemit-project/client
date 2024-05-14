import { ImportContacts } from "@mui/icons-material";
import { useState } from "react";
import "./Frame2.css";
import pas from "../../../../assets/Pas.svg";
import add from "../../../../assets/Listing/Button.svg";

export const Frame2: React.FC = () => {
  const [counter, setCounter] = useState(25);

  const labels = [
    { name: "Costumize" },
    { name: "Download" },
    { name: "Upload" },
  ];

  return (
    <div className="allFrame2">
      <div className="result">Results:{counter}</div>
      {labels.map((i) => (
        <>
          <div className="label">{i.name}</div>
          <img src={pas}></img>
        </>
      ))}
      <button className="blueB">
        Add
        <img className="addImg" src={add} />
      </button>
    </div>
  );
};
