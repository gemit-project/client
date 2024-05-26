import React from "react";
import Box from "@mui/material/Box";
import "./CheckoutFourthScreen.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export const BottomFourthScreen: React.FC = () => {
  let navigate = useNavigate();

  return (
    <div className="fourth-screen">
      <div className="payment">Payment</div>
      <div className="table">
        <div className="first-table-title">
          <div className="">Basic Price</div>
          <div className="basic-price">$3,430.00</div>
        </div>
        <Box
          height={"25vh"}
          width={"42vw"}
          borderRadius={"10px"}
          marginLeft={"7vw"}
          sx={{ backgroundColor: "rgba(230, 230, 230, 0.7)" }}
        >
          <div style={{ marginLeft: "10px" }}>
            <table className="table-list">
              <tr>
                <td>Funding percentage</td>
                <td>40%</td>
                <td>Funding amount</td>
                <td>$1,372.00</td>
              </tr>
              <tr>
                <td>Num of payments</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Funding Period</td>
                <td>30 days</td>
                <td>Interest rate</td>
                <td>0.30%</td>
              </tr>
            </table>
            <tr>
              <td>
                <div
                  style={{
                    width: "40vw",
                    height: 0,
                    opacity: 0.35,
                    border: "1px #030406 solid",
                    marginTop: "15px",
                  }}
                ></div>
              </td>
            </tr>
            <div className="total">
              <div>Total refunding amount</div>
              <div style={{ marginLeft: "23vw" }}>$1,783.60</div>
            </div>
          </div>
        </Box>
        <div className="second-table-title">
          <div>Balance Due </div>
          <div className="balance-due">$2,058.00</div>
        </div>
        <Box
          height={"15vh"}
          width={"42vw"}
          borderRadius={"10px"}
          marginLeft={"7vw"}
          sx={{ backgroundColor: "rgba(236, 236, 236, 0.7)" }}
        >
          <div style={{ marginLeft: "10px" }}>
            <div style={{ display: "inline-flex", marginTop: "10px" }}>
              <div>Shipping </div>
              <div style={{ marginLeft: "31vw" }}>$508.22</div>{" "}
            </div>
            <div
              style={{
                width: "40vw",
                height: 0,
                opacity: 0.35,
                border: "1px #030406 solid",
                marginTop: "15px",
              }}
            ></div>
            <div style={{ display: "inline-flex", marginTop: "10px" }}>
              <div> Insurane</div>
              <div style={{ marginLeft: "31vw" }}>$730.12</div>
            </div>
          </div>
        </Box>
        <table className="total-table">
          <tr className="tr1">
            <td> Total amount</td>
            <td className="td1">$3,296.34</td>
          </tr>
          <tr className="tr2">
            <td>VAT %0.15</td>
            <td className="td2">$494.451</td>
          </tr>
        </table>
        <div className="tr3">
          <div style={{ width: "10vw" }}>Total amount</div>
          <div className="td3">$3,790.791</div>
          <div className="payment-buttons">
            <div>
              <Button
                variant="contained"
                sx={{
                  width: "9vw",
                  height: "5vh",
                  backgroundColor: "rgba(204, 204, 204, 0.8)",
                  color: "blue",
                }}
                onClick={() => navigate("/CheckOut/FundingOptions")}
              >
                Back
              </Button>
            </div>
            <div className="payment-button-next">
              <Button
                variant="contained"
                sx={{ width: "9vw", height: "5vh" }}
                onClick={() => navigate("/CheckOut/Confirmation")}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
