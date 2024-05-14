import "./Frame1.css";
import Search from "../../../../../assets/icons/side-bar-icons/search.svg";
import { SearchRounded } from "@mui/icons-material";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import arrow from "../../../../assets/Listing/arrow.svg";

export const Frame1: React.FC = () => {
  return (
    <>
      <div className="Frame1">
        <input
          type="text"
          placeholder=" Search "
          className="saerchText"
        ></input>
        <input type="button" className="searchButton" value="Search"></input>
        <div className="selectDiv">
          <div className="whiteSelect"> All Statuses </div>
          <div className="blueSelect">
            <img src={arrow} />
          </div>
        </div>
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
