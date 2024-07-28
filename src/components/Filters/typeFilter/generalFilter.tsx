import React, { useState } from "react";
import "./generalFilter.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Switch from "react-switch";
import Card from "@mui/material/Card";

export default function GeneralFilter() {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [num3, setNum3] = React.useState("");
  const [checked, setChecked] = useState(false);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 2, 2, 2];
  const style1 = {
    backgroundColor: "#EDFAFF",
    display: "flex",
    height: "15vh",
    marginLeft: "auto",
    marginRight: "auto",
    width: "78vw",
    marginTop: "3vh",
  };
  const style2 = { width: "12vw", height: "30px" };
  const style3 = {
    backgroundColor: "#00B2FF",
    borderBlockEnd: "1px solid white",
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 150 },
    },
  };
  const handleChange1 = (event: SelectChangeEvent) => {
    setNum1(event.target.value);
  };
  const handleChange2 = (event: SelectChangeEvent) => {
    setNum2(event.target.value);
  };
  const handleChange3 = (event: SelectChangeEvent) => {
    setNum3(event.target.value);
  };
  return (
    <>
      <div className="scrollBar">
        <section className="section">
          <Card style={style1}>
            <div
              className=""
              style={{ borderRight: "1px solid gray", width: "26vw" }}
            >
              <b style={{ marginLeft: "1vw" }}>Price</b>
              <br />
              <label className="lab2">$ / CT</label>
              <div style={{ marginLeft: "0.5vw" }}>
                <input type="text" placeholder="From" className="inpo"></input>
                <input type="text" placeholder="To" className="inpo"></input>
              </div>
            </div>
            <div
              style={{
                marginLeft: "0.5vw",
                borderRight: "1px solid gray",
                width: "26vw",
              }}
            >
              <b></b>
              <br />
              <label className="lab">Total ($)</label>
              <div>
                <input type="text" placeholder="From" className="inpo"></input>
                <input type="text" placeholder="To" className="inpo"></input>
              </div>
            </div>
            <div style={{ marginLeft: "0.5vw" }}>
              <b></b>
              <br />
              <label className="lab">Discount (%)</label>
              <div>
                <input type="text" placeholder="From" className="inpo"></input>
                <input type="text" placeholder="To" className="inpo"></input>
              </div>
            </div>
          </Card>
          <div className="switch">
            <b>Natural / Lab</b>
            <br />
            <div style={{ margin: "auto" }}>
              <Switch
                onChange={() => {
                  setChecked(!checked);
                }}
                checked={checked}
                offHandleColor="#fff"
                onHandleColor="#fff"
                width={200}
                onColor="#afb4b7"
                offColor="#00B2FF"
                checkedIcon={<p className="pchecked">Natural</p>}
                uncheckedIcon={<p className="punchecked">Lab</p>}
              />
            </div>
          </div>
          <div className="inputs">
            <br />
            <div style={{ marginLeft: "5vw" }}>
              <b>Period</b>
              <br />
              <Select
                value={num1}
                onChange={handleChange1}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                MenuProps={MenuProps}
                style={style2}
              >
                <MenuItem value="" style={style3}>
                  <em>ALL</em>
                </MenuItem>
                {arr.map((element: number) => (
                  <MenuItem value={element} style={style3}>
                    {element}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="buttomInputs">
              <b>Location</b>
              <br />
              <Select
                value={num2}
                onChange={handleChange2}
                displayEmpty
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
                style={style2}
              >
                <MenuItem value="" style={style3}>
                  <em>ALL</em>
                </MenuItem>
                {arr.map((element: number) => (
                  <MenuItem value={element} style={style3}>
                    {element}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="buttomInputs">
              <b>Vendors</b>
              <br />
              <Select
                value={num3}
                onChange={handleChange3}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                MenuProps={MenuProps}
                style={style2}
              >
                <MenuItem value="" style={style3}>
                  <em>ALL</em>
                </MenuItem>
                {arr.map((element: number) => (
                  <MenuItem value={element} style={style3}>
                    {element}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
