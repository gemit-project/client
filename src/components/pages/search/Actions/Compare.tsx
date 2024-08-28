import React, { useEffect, useState } from "react";
import d2 from "../../../../assets/diamonds/2.svg";
import { Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import back from "../../../../assets/icons/product-icons/back.svg";
import fullLove from "../../../../assets/icons/product-icons/fullLike.png";
import emptyLove from "../../../../assets/icons/product-icons/EmptyLike.png";
import deleted from "../../../../assets/ButtonSection/delete.svg";
import lookfor from "../../../../assets/ButtonSection/lookfor.svg";
import { blue } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { sdk } from "../../../../config/sharetribeSDK.config";
import './Compare.css';
export const Compare = () => {
  const props=["Shape","CARAT","Clarity","Color","cut","polish","Symmetry","Fluor","$List","$/CT","Discount","$total","Location"]
  const navigation = useNavigate();
  const [isClick, setClick] = useState<boolean>(false);
  const [images, setImages] = useState<Array<any>>([]);
  const compares = useSelector((state: any) => state.compare.comparesDiamond);
 console.log(compares)
  const getData = () => {
    sdk.listings
      .query({
        include: ["images"],
      })
      .then((res: any) => {      
        setImages(res.data.included);
        console.log(res.data)
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
 const getimagebyid=(id:string)=>{
 const s=images.find(x=> x.id.uuid==id)
   return s?.attributes?.variants?.default.url;
  }
  useEffect(() => {
    getData();
  }, []);
  return ( <div style={{marginLeft:"10vw"}}>  
      <div className="backkSearch">
        <Typography className="titleBack">Back To All Results</Typography>
        <IconButton       
          onClick={() => {
            navigation("/Search");
          }}
        >
          <img src={back}></img>
        </IconButton>
      </div>
      <div style={{ display: "flex" ,gap:"5px" ,alignItems:"center",justifyContent: "flex-start"}}>
        {compares.map((c:any) => {
          return (           
              <div style={{backgroundColor:" rgba(230, 230, 230, 0.60)", display: "flex",flexDirection:"column", width: "250px",height: "170px",padding:"12px",alignItems: "center",gap:"12px",flexShrink: 0,justifyContent: "flex-end"

              }}>
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
                <IconButton >
                  
                </IconButton>


                <img style={{ width: "25px", height: "25px" }} src={deleted} />
              </div>
              <div>
                <img src={getimagebyid(c.relationships?.images?.data[0].id.uuid)} style={{ width: "90px", height: "90px" }} />
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
