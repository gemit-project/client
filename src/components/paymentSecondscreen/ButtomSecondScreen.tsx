import { Button } from "@mui/material";
import React from "react";
import "./CheckoutSecondScreen.css";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router";
import { MapSecondScreen } from "./MapSecondScreen";
import truck from "../../assets/checkoutIcons/truck.svg";
import vi from "../../assets/checkoutIcons/vi.svg";

export const ButtomSecondScreen: React.FC = () => {
  let navigate = useNavigate();
  const ShippingOptions = [
    {
      text: "Secure Courier Services",
    },
    {
      text: "Air Freight",
    },
    {
      text: "Private Jet Cargo Services",
    },
  ];
  const Inssurance = [
    {
      text: "All-Risk Insurance",
    },
    {
      text: "Valuable Goods Insurance",
    },
    {
      text: "Declared Value Insurance",
    },
    {
      text: "Parcel Insurance",
    },
    {
      text: "Transit Insurance",
    },
  ];
  return (
    <div className="second-screen">
      <div className="up-line">
        <div className="shipping">Shipping & Insurance</div>
        <div className="button-skip1">
          <Button
            variant="contained"
            sx={{
              width: "9vw",
              backgroundColor: "rgba(204, 204, 204, 0.8)",
              color: "blue",
              border: " 1px solid rgba(0, 0, 255, 1)",
              marginLeft:"10px"
            }}
            
          >
            skip
          </Button>
        </div>
      </div>
      <div className="table2">
        <div className="right-culomn2">
          <MapSecondScreen
            name="SHIPPING OPTIONS"
            list={ShippingOptions}
            icon={truck}
          />
        </div>
        <div className="left-culomn2">
          <MapSecondScreen name="INSSURANCE" list={Inssurance} icon={vi} />
        </div>
      </div>
      <div className="buttons">
        <div className="button-back2">
          <Button
            variant="contained"
            sx={{
              width: "9vw",
              backgroundColor: "rgba(204, 204, 204, 0.8)",
              color: "blue",
            }}
            onClick={() => navigate("/CheckOut/General")}
          >
            Back
          </Button>
        </div>
        <div className="button-next2">
          <Button variant="contained" sx={{ width: "9vw" }}  onClick={() => navigate("/CheckOut/FundingOptions")}>
            Next
          </Button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
