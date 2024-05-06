import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./CheckoutFirstScreen.css";
import { Checkbox } from "@mui/material";

type props = {
  name: string;
  list: Array<string>;
};

export const MapFirstScreen: React.FC<props> = ({ name, list }) => {
  const [isShippingAddress, setIsShippingAddress] = useState(false);
  const [className, setClassName] = useState("");
  const initialStyle = () => {
    if (name === "ADDRESS" || name === "SHIPPING ADDRESS") {
      setClassName("box1");
      if (name === "SHIPPING ADDRESS") setIsShippingAddress(true);
    } else {
      setClassName("box2");
    }
  };
  useEffect(() => {
    initialStyle();
  });
  return (
    <div>
      <div className="container1">
        <div className="title1">
          {name}
          {isShippingAddress && (
            <div style={{ display: "inline-flex" }}>
              <Checkbox sx={{ color: "gray" }}></Checkbox>
              <div className="check-text">Same as company address</div>
            </div>
          )}
        </div>
        <div className={className}>
          {list.map((l: any) => (
            <div style={{ display: "inline-flex", marginRight: 20 }}>
              <Square text={l}></Square>
            </div>
          ))}
        </div>
        <div
          style={{
            width: `${
              list.length > 5
                ? (list.length * 10) / 2 + 2
                : list.length * 10 + 2
            }vw`,
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
      <TextField
        id="outlined-size-small"
        size="small"
        sx={{ width: "10vw" }}
        focused
      />
    </div>
  );
};
