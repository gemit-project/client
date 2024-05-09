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


const cards = [card, american, visa];
const propsCol1 = ["SHAPE", "SIZE", "COLOR", "CLARITY"];
const propsCol2 = ["CUT", "POLISH", "SYMMETRY", "FLUORESCENCE"];

export const DiamodFeaters = () => {
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
                  <div className="right-header-chart">{p}</div>
                  <div className="props">cProduct.{p}</div>
                </div>
              ))}
            </div>
            <div className="left-chart">
              {propsCol2.map((p) => (
                <div style={{ display: "flex" }}>
                  <div className="left-header-chart">{p}</div>
                  <div className="props">cProduct.{p}</div>
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
              <div style={{ width: "650px", display: "flex", gap: "2px" }}>
                <img className="card-img" src={c} />
                <div className="card-company">Company Name</div>
                <Accordion sx={{ flex: "50%" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Condition
                  </AccordionSummary>
                  <AccordionDetails>bla bla bla ????????????</AccordionDetails>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
