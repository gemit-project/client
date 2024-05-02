import { TextField } from "@mui/material";
import React from "react";
import "./cssFirstScreen.css";
import { Checkbox } from "@mui/material";

type mapProps = {
  name: string;
  list: Array<string>;
};
export const Map: React.FC<mapProps> = ({ name, list }) => {
  let bool:boolean=false;
  let width = 10 * list.length;
  let className: string;
  if (name === "ADDRESS" || name === "SHIPPING ADDRESS") {
    className = "box1";
    width = width / 2;
    width += 2;
    if( name === "SHIPPING ADDRESS")
    bool=true;
  } else {
    className = "box2";
    width += 2;
  }

  
  return (
    <div>
    <div className="container1">
      <div className="title1">{name}
     { bool &&
     <div style={{display:"inline-flex"}}><Checkbox  sx={{ color:"gray", }}></Checkbox>
     <div className="check-text">Same as company address</div></div>
     } </div>
     <div className={className}>
        {list.map((l: any) => (
          <div style={{ display: "inline-flex", marginRight: 20 }}>
            <Square text={l}></Square>
          </div>
        ))}
      </div>
      <div
        style={{
          width: width + "vw",
          height: 0,
          opacity: 0.65,
          border: "1px #030406 solid",
          marginTop: "15px",
        }}
      ></div>
      
    </div>
   
    </div>
  );
};

const Square: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      <div className="company-details">{text}</div>
      <TextField   id="outlined-size-small"
          size="small"
          sx={{ width: "10vw" }} focused />
    </div>
  );
};
