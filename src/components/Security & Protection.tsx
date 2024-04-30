import React from "react";
import "./Security & Protection.css"
import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import shipping from "../assets/icons/product-icons/shipping.svg";
import secutery from "../assets/icons/product-icons/secutery.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const SecurityProtection=()=>{

    return <>
        <div className="secutery">
                <Typography className="secutery-title">
                  <b>Shipping options</b>
                </Typography>
                <img src={shipping}></img>
              </div>
              <div style={{ width: "540px" }}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Secure Courier Services
                  </AccordionSummary>
                  <AccordionDetails>bla bla bla ????????????</AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Private Jet Cargo Services
                  </AccordionSummary>
                  <AccordionDetails>bla bla bla ????????????</AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Air Freight
                  </AccordionSummary>
                  <AccordionDetails>bla bla bla ????????????</AccordionDetails>
                </Accordion>
              </div>
              <div className="secutery">
                <Typography className="secutery-title">
                  <b>Inssurance </b>
                </Typography>
                <img src={secutery}></img>
              </div>
              <div style={{ width: "540px" }}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    All-Risk Insurance
                  </AccordionSummary>
                  <AccordionDetails>bla bla bla ????????????</AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Valuable Goods Insurance
                  </AccordionSummary>
                  <AccordionDetails>bla bla bla ????????????</AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Declared Value Insurance
                  </AccordionSummary>
                  <AccordionDetails>bla bla bla ????????????</AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Parcel Insurance
                  </AccordionSummary>
                  <AccordionDetails>bla bla bla ????????????</AccordionDetails>
                </Accordion>{" "}
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Transit Insurance
                  </AccordionSummary>
                  <AccordionDetails>bla bla bla ????????????</AccordionDetails>
                </Accordion>
              </div>
    
    </>
}