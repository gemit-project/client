import { ImportContacts } from "@mui/icons-material";
import { useState } from "react";
import "./Frame2.css";
import pas from "../../../../assets/Pas.svg";
import add from "../../../../assets/Listing/Button.svg";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

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
          <Button variant="text" className="label">{i.name}</Button>
          <img src={pas} className="pasAmong"></img>
        </>
      ))}
      <Button className="blueB" variant="contained" >
       <Link to="/Dashboard/listing/add">ADD</Link>
        <img className="addImg" src={add} />
      </Button>
    </div>
  );
};
