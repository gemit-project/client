import { Typography } from "@mui/material";
import React from "react";
import "./Diamond'sFeaters.css";
const propsCol1 = ["Shape", "SIZE", "Color", "Clarity"];
const propsCol2 = ["CUT", "polish", "Symmetry", "Fluorescence"];

export const DiamodsFeaters = () => {
  return (
    <>
      <div className="frame2012">
        <div className="fetures">
          <div className="frame2397">
            <Typography className="featers">Diamond’s Features</Typography>
          </div>
          <div className="tAndBut">
            <Typography sx={{ width: "300px" }}>Diamond #125-536</Typography>
            <div className="bbb">
              <button className="buto">Full GIA Report</button>
            </div>
          </div>
        </div>
      </div>
      <div className="featersChart">
        <div className="bigchart1">
          {propsCol1.map((p) => (
            <div style={{ display: "flex" }}>
              <div className="headerChart1">{p}</div>
              <div className="props">cProduct.{p}</div>
            </div>
          ))}
        </div>
        <div className="bigchart2">
          {propsCol2.map((p) => (
            <div style={{ display: "flex" }}>
              <div className="headerChart2">{p}</div>
              <div className="props">cProduct.{p}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
