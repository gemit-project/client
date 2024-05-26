import React from "react";
import "./Securety & Protection.css";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import shipping from "../assets/icons/product-icons/shipping.svg";
import secutery from "../assets/icons/product-icons/secutery.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import lock from "../assets/icons/product-icons/Vector.svg";

const shippingOptions =["Secure Courier Services","Private Jet Cargo Services","Air Freight"]
const inssurance =["All-Risk","Valuable Goods","Declared Value","Parcel","Transit"];
export const SecuretyProtection = () => {
  return (
    <>
      <div className="secutery-Protection">
        <div id="secutery">
          <div className="secutery">
            <Typography className="secutery-title">
              <b>secutery & Protection</b>
            </Typography>
            <img src={lock}></img>
          </div>
          <p style={{ width: "540px" }}>
            {/* Ullamcorper eget nulla facilisi etiam dignissim diam quis. Accumsan
            sit amet nulla facilisi morbi. Dignissim convallis aenean et tortor
            at risus viverra adipiscing at. Pellentesque id nibh tortor id
            aliquet lectus proin nibh nisl. Neque viverra justo nec ultrices dui
            sapien. Gravida dictum fusce ut placerat orci nulla. Eget aliquet
            nibh praesent tristique magna sit. Enim nec dui nunc mattis enim ut.
            Netus et malesuada fames ac turpis egestas maecenas. Morbi blandit
            cursus risus at ultrices mi. Morbi quis commodo odio aenean sed
            adipiscing diam donec. Congue quisque egestas diam in arcu cursus
            euismod. Mi proin sed libero enim sed. Orci eu lobortis elementum
            nibh tellus. Elit duis tristique sollicitudin nibh. Vitae proin
            sagittis nisl rhoncus mattis rhoncus urna neque. */}???
          </p>
        </div>
        
        <div>
          <div className="secutery">
            <Typography className="secutery-title">
              <b>Shipping options</b>
              
            </Typography>
            <img src={shipping}></img>
          </div>
          <div style={{ width: "540px" }}>
            {shippingOptions.map((shipping)=>(
              <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {shipping}
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
           ) )}
          </div>
        </div>
        <div>
          <div className="secutery">
            <Typography className="secutery-title">
              <b>Inssurance </b>
            </Typography>
            <img src={secutery}></img>
          </div>
          <div style={{ width: "540px" }}>
            {inssurance.map((inss)=>(
              <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {inss} Insurance
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
           ) )}
          </div>
        </div>
      </div>
    </>
  );
};
