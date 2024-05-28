import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import "./DiamondsFeaters.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import card from "../assets/icons/product-icons/card.svg";
import american from "../assets/icons/product-icons/american.svg";
import visa from "../assets/icons/product-icons/visa.svg";
import { useSelector } from "react-redux";
import { reduxStore } from '../app/store';
import { DaimondStore } from "../Types/DaimondStore";


const cards = [card, american, visa];
const propsCol1 = ["Shape", "Size", "Color", "Clarity"];
const propsCol2 = ["Cut", "Polish", "Symmetry", "Fluorescence"];

export const DiamodFeaters = () => {
  
  const currentDaimond=useSelector((state:any)=> state.daimond.currentDaimond)

  return (
    <>
      <div className="diamondsFeatures">
        <div>
          <div className="diamondsFeatures-header">
            <div>
              <Typography className="first-header">
                <b>Diamond’s Features</b>
              </Typography>
            </div>
            <div className="subTitle-button">
              <Typography sx={{ width: "300px" }}>Diamond #125-536</Typography>
              <div>
                <button className="Full-GIA-Report">Full GIA Report</button>
              </div>
            </div>
          </div>
          <div className="featersCharts">
            <div className="right-chart">
              {propsCol1.map((p) => (
                <div style={{ display: "flex" }}>
                  <div className="right-header-chart">{p.toUpperCase()}</div>
                  <div className="props">{currentDaimond.attributes.publicData[p]}</div>
                </div>
              ))}
            </div>
            <div className="left-chart">
              {propsCol2.map((p) => (
                <div style={{ display: "flex" }}>
                  <div className="left-header-chart">{p.toUpperCase()}</div>
                  <div className="props">{currentDaimond.attributes.publicData[p]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="funding-information-div">
          <Typography className="funding-information-header">
            <b>Funding information</b>
          </Typography>
          <div>
            {cards.map((c) => (
              <div style={{ width: "100%", display: "flex", gap: "2px" }}>
                <div style={{display:'flex',flexDirection:'column',flex:'10%',alignItems:'center',padding: '16px',borderBottom: '1px solid var(--black, #030406)'}}><img className="card-img" src={c} /></div>
                <div className="card-company">Company Name</div>
                <Accordion sx={{display:'flex',flexDirection:'column',flex:'70%'}}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Condition
                  </AccordionSummary>
                  <AccordionDetails>BKJKJ</AccordionDetails>
                </Accordion>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
