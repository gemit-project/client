import React, { useState } from "react";
import d2 from "../../../../assets/diamonds/2.svg";
import { Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import back from "../../../../assets/icons/product-icons/back.svg";
import fullLove from "../../../../assets/icons/product-icons/fullLike.png";
import emptyLove from "../../../../assets/icons/product-icons/EmptyLike.png";
import deleted from "../../../../assets/ButtonSection/delete.svg";
import lookfor from "../../../../assets/ButtonSection/lookfor.svg";
import { blue } from "@mui/material/colors";

export const Compare = (prop: any) => {
  // const [comparsDiamond,setComparesDaimond]=useState(Array<string>)
  const comparsDiamond = [
    "664f1446-6cbf-486b-9546-528b3298d87f",
    "664f16f0-3cd8-4905-9d84-5da9007017ad",
    "664f16f0-3cd8-4905-9d84-5da9007017ad",
    "664f1446-6cbf-486b-9546-528b3298d87f",
  ];
  const navigation = useNavigate();
  const [isClick, setClick] = useState<boolean>(false);

  return (
    <div style={{}}>
      <div className="backSearch">
        <Typography className="titleBack">Back To All Results</Typography>
        <IconButton
          onClick={() => {
            navigation("/Search");
          }}
        >
          <img src={back}></img>
        </IconButton>
      </div>
      <div style={{ display: "flex" ,gap:"5px" }}>
        {comparsDiamond.map((i: string) => {
          return (
            <div style={{backgroundColor:" rgba(230, 230, 230, 0.60)", display: "flex",flexDirection:"column", width: "293px",height: "192px",padding:"12px",alignItems: "center",gap:"12px",flexShrink: 0}}>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "flex-end",
                  width:"100%"
                }}
              >
                <img
                  onClick={() => setClick((isClick) => !isClick)}
                  style={{ width: "25px", height: "25px" }}
                  src={emptyLove}
                ></img>



                <img style={{ width: "25px", height: "25px" }} src={deleted} />
              </div>
              <div>
                <img src={d2} style={{ width: "90px", height: "90px" }} />
              </div>
              <div>
                <Button style={{backgroundColor:"blue",color:"white",width:"250px",fontFamily:"Assistant"}}><img src={lookfor}style={{marginRight:"5px"}}/>    Explorer</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
