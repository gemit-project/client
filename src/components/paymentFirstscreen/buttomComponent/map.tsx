import { TextField } from "@mui/material";
import React from "react";
import "./cssFirstScreen.css";

type mapProps = {
  name: string;
  list: Array<any>;
};
export const Map: React.FC<mapProps> = ({ name, list }) => {
  let width = 11 * list.length;
  let className: string;
  if (name === "ADDRESS" || name === "SHIPPING ADDRESS") {
    className = "box1";
    width = width / 2;
    width += 2;
  } else {
    className = "box2";
    width += 2;
  }

  return (
    <div className="container1">
      <div className="title1">{name}</div>
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
  );
};

const Square: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      <div className="company-details">{text}</div>
      <TextField sx={{ width: "11vw" }} focused />
    </div>
  );
};
