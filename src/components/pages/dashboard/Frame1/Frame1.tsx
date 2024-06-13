import "./Frame1.css";
import Search from "../../../../../assets/icons/side-bar-icons/search.svg";
import { SearchRounded } from "@mui/icons-material";
import * as React from "react";
import arrow from "../../../../assets/Listing/arrow.svg";
import Button from '@mui/material/Button';
import { useState } from "react";

export const Frame1: React.FC = () => {

  const [Selected,setSelected] = useState(false);

  const PopSelect=()=>{
    setSelected(!Selected)
  } 
  return (
    <>
      <div className="Frame1">
        <input
          type="text"
          placeholder=" Search "
          className="saerchText"
        ></input>
        <Button variant="contained" className="searchButton">Search</Button>
        <div className="whitediv"></div>
        <div className="selectDiv">
          <div className="whiteSelect"> All Statuses </div>
          {/* <button className="blueSelect" onClick = {PopSelect}> */}
          <div className="blueSelect">
            <img src={arrow} />
          </div>
          {/* </button> */}
        </div>
        <div className={Selected?`pop`:""}></div>
        <div className="selectDiv">
          <div className="whiteSelect">By Date </div>
          <div className="blueSelect">
            <img src={arrow} />
          </div>
        </div>
        <div className="selectDiv">
          <div className="whiteSelect"> 7 Days </div>
          <div className="blueSelect">
            <img src={arrow} />
          </div>
        </div>
      </div>
    </>
  );
};
