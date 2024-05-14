import { Button } from "@mui/material";
import React from "react";
import "./CheckoutThirdScreen.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { useNavigate } from "react-router";

export const BottomThirdScreen: React.FC = () => {
  let navigate = useNavigate();
  const [value1, setValue1] = React.useState<number>(0);
  const [value2, setValue2] = React.useState<number>(0);
  const firstSlideChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue1(newValue);
    }
  };
  const secondSlideChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue2(newValue);
    }
  };
  return (
    <div className="third-screen">
      <div className="title">
        <div className="funding">Funding options</div>
        <div className="button-skip">
          <Button
            variant="contained"
            sx={{
              width: "9vw",
              backgroundColor: "rgba(204, 204, 204, 0.8)",
              color: "blue",
              border: " 1px solid rgba(0, 0, 255, 1)",
            }}
            onClick={() => navigate("/CheckOut/Payment")}
          >
            {" "}
            skip
          </Button>
        </div>
      </div>
      <div className="first-slide">
        <div className="left-culomn">
          <div className="funding-percentage">Funding Percentage</div>
          <Box sx={{ width: "22vw" }}>
            <Typography
              className="typography"
              id="non-linear-slider"
              gutterBottom
            >
              {value1 + "%"}
            </Typography>
            <Slider
              value={value1}
              min={0}
              step={1}
              max={100}
              onChange={firstSlideChange}
            />
          </Box>
          <div className="please-text">
            Please slide to adjust funding percentage
          </div>
        </div>
        <div className="right-culomn">
          <div>Funding Amount</div>
          <Button variant="outlined" sx={{ width: "8vw", height: "4vh" }}>
            {value1}
          </Button>
        </div>
        <div
          style={{
            width: "31vw",
            height: 0,
            opacity: 0.35,
            border: "1px #030406 solid",
            marginTop: "15px",
          }}
        ></div>
      </div>

      <div className="second-slide">
        <div className="left-culomn">
          <div className="second-slide-title">Funding Period (days)</div>
          <Box sx={{ width: "22vw" }}>
            <Typography
              className="typography"
              id="non-linear-slider"
              gutterBottom
            >
              {value2}
            </Typography>
            <Slider
              value={value2}
              min={0}
              step={1}
              max={100}
              onChange={secondSlideChange}
            />
          </Box>
          <div className="please-text">
            Please slide to adjust funding period{" "}
          </div>
        </div>
        <div className="second-slide-right-culomn">
          <div>
            <div style={{ marginTop: "80px" }}>Interest Rate (%)</div>
            <Button variant="outlined" sx={{ width: "8vw", height: "4vh" }}>
              {"0.10"}
            </Button>
          </div>
          <div>
            <div style={{ marginTop: "80px" }}>Number of payements</div>
            <Button variant="outlined" sx={{ width: "11vw", height: "4vh" }}>
              {"1"}
            </Button>
          </div>
          <div>
            <div
              style={{
                width: "20vh",
                marginTop: "28px",
                textAlign: "center",
              }}
            >
              refunding Amount per payement ($)
            </div>
            <Button variant="outlined" sx={{ width: "9vw", height: "8vh" }}>
              {"1,509.00"}
            </Button>
          </div>
          <div>
            <div style={{ marginTop: "52px" }}>Total refunding Amount ($)</div>
            <Button variant="outlined" sx={{ width: "13vw", height: "8vh" }}>
              {"1,509.00"}
            </Button>
          </div>
        </div>
        <div
          style={{
            width: "73vw",
            height: 0,
            opacity: 0.35,
            border: "1px #030406 solid",
            marginTop: "15px",
          }}
        ></div>
      </div>
      <div className="buttons">
        <div className="button-back">
          <Button
            variant="contained"
            sx={{
              width: "9vw",
              backgroundColor: "rgba(204, 204, 204, 0.8)",
              color: "blue",
            }}
            onClick={() => navigate("/CheckOut/ShippingAndInsurance")}
          >
            Back
          </Button>
        </div>
        <div className="button-next">
          <Button
            variant="contained"
            sx={{ width: "9vw" }}
            onClick={() => navigate("/CheckOut/Payment")}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
