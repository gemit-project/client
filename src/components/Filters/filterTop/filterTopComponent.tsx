import React, { useState } from "react";
import "./filterTopComponent.css";
import { CiFilter } from "react-icons/ci";
import Button from "@mui/material/Button";
import BasicFilter from "../typeFilter/basicFilter";
import AdvancedFilter from "../typeFilter/advancedFilter";
import GeneralFilter from "../typeFilter/generalFilter";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import { FilterSide } from "../FilterSide";

export const FilterTopComponent: React.FC = () => {
  const [switchTypeFilter, setSwitchTypeFilter] = useState("basic");
  const style = {
    marginLeft: "6vw",
    width: "89vw",
    height: "78vh",
    marginTop: "1vh",
    boxShadow: "2px 2px 2px 2px #5c575765 ",
  };
  const style1 = {
    backgroundColor: "#D200FF",
    marginLeft: "5vw",
    height: "25px",
    width: "100px",
  };
  const style2 = {
    backgroundColor: "#FF00FF",
    marginLeft: "5vw",
    height: "25px",
    width: "100px",
  };
  const style3 = {
    backgroundColor: "#00B2FF",
    marginLeft: "5vw",
    height: "25px",
    width: "100px",
  };
  const style4 = {
    marginLeft: "38vw",
    color: "black",
    borderColor: "black",
    height: "25px",
  };
  const style5 = {
    marginLeft: "3vw",
    width: "10px",
    color: "black",
    borderColor: "black",
    height: "25px",
  };

  return (
    <>
      <b className="firstSentence">No Filter Criteria was selected</b>
      <Card sx={{ minWidth: 275 }} style={style}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <FilterSide
            color={
              switchTypeFilter === "basic"
                ? "#D200FF"
                : switchTypeFilter === "advanced"
                ? "#FF00FF"
                : "#00B2FF"
            }
          />
          <div style={{ marginLeft: "3vw" }}>
            <div className="reka">
              <br />
              <Button
                variant="contained"
                size="small"
                style={style1}
                onClick={(x) => setSwitchTypeFilter("basic")}
              >
                Basic
              </Button>
              <Button
                variant="contained"
                size="small"
                style={style2}
                onClick={(x) => setSwitchTypeFilter("advanced")}
              >
                Advanced
              </Button>
              <Button
                variant="contained"
                size="small"
                style={style3}
                onClick={(x) => setSwitchTypeFilter("general")}
              >
                General
              </Button>
              <Button variant="outlined" size="small" style={style4}>
                <CiFilter /> Apply{" "}
              </Button>
              <Link to="/Search">
                <Button variant="outlined" style={style5}>
                  {" "}
                  x{" "}
                </Button>
              </Link>
            </div>
            <br />
            <div>
              {switchTypeFilter === "basic" ? (
                <BasicFilter />
              ) : switchTypeFilter === "advanced" ? (
                <AdvancedFilter />
              ) : (
                <GeneralFilter />
              )}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
