import React, { useEffect, useState } from "react";
import d2 from "../../../../assets/diamonds/2.svg";
import { Avatar, Button, IconButton, Typography } from "@mui/material";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import back from "../../../../assets/icons/product-icons/back.svg";
import fullLove from "../../../../assets/icons/product-icons/fullLike.png";
import emptyLove from "../../../../assets/icons/product-icons/EmptyLike.png";
import deleted from "../../../../assets/ButtonSection/delete.svg";
import lookfor from "../../../../assets/ButtonSection/lookfor.svg";
import { blue } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { sdk } from "../../../../config/sharetribeSDK.config";
import "./Compare.css";
import { IndexKind } from "typescript";
import { setIsClose } from "../../../../app/slices/CompareSlice";
export const Compare = () => {
  const props = [
    {name:"",color:""},
    {name:"Vendor num",color: "var(--background-light-blue, #aae6e6)"},
    {name:"Shape",color: "var(--purple---basic, #d200ff)"},
    {name: "CARAT",color: "var(--purple---basic, #d200ff)"},
   {name:"Clarity",color: "var(--purple---basic, #d200ff)"},
    {name:"Color",color: "var(--purple---basic, #d200ff)"},
    {name:"Cut",color: "var(--light-purple-advanced, #f0f)"},
   {name:"Polish",color: "var(--light-purple-advanced, #f0f)"},
   {name:"Symmetry",color: "var(--light-purple-advanced, #f0f)"},
    {name:"Fluor",color: "var(--light-purple-advanced, #f0f)"},
   {name:"SList",color: "var(--background-light-blue, #24a4ef)"},
    {name:"S/CT",color: "var(--background-light-blue, #24a4ef)"},
   {name:"Discount",color: "var(--background-light-blue, #24a4ef)"},
   {name:"Stotal",color: "var(--background-light-blue, #24a4ef)"},
   {name:"Location",color: "var(--background-light-blue, #24a4ef)"},
  ];
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [isClick, setClick] = useState<boolean>(false);
  const [images, setImages] = useState<Array<any>>([]);
  const compares = useSelector((state: any) => state.compare.comparesDiamond);
  console.log(compares);
  const getData = () => {
    sdk.listings
      .query({
        include: ["images"],
      })
      .then((res: any) => {
        setImages(res.data.included);
        console.log(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  const getimagebyid = (id: string) => {
    const s = images.find((x) => x.id.uuid == id);
    return s?.attributes?.variants?.default.url;
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ marginLeft: "10vw" }}>
      <div className="backkSearch">
        <Typography className="titleBack">Back To All Results</Typography>
        <IconButton
          onClick={() => {
            dispatch(setIsClose(false));
            navigation("/Search");
          }}
        >
          <img src={back}></img>
        </IconButton>
      </div>
      <div className="scrollBarTabled">
        <Table>
          <TableBody>
            {props.map((pr: any) => {
              debugger;
              return (
                <TableRow
                  style={{ writingMode: "vertical-lr", whiteSpace: "nowrap", gap:"6px"}}
                >   
                  <TableCell sx={{  width: 230 ,backgroundColor:pr.color,color:pr.name=="Vendor num"?"black":"white"}}>{pr.name}</TableCell>
                  {pr.name == "" ? (
                    <Header getimagebyid={getimagebyid} inputString="" />
                  ) : (
                     <div style={{
                        display: "flex",
                        alignItems:"center",
                        gap:"6px"}}> 
                      {compares.map((c: any) => {
                        return (
                          <TableCell sx={{  backgroundColor:pr.name=="Vendor num"? pr.color:"",   width: 250, textAlign: "center" }}>
                            {c.attributes.publicData[pr.name]
                              ? c.attributes.publicData[pr.name]
                              : "???"}
                          </TableCell>
                        );
                      })}</div>
                   
                  )}
             </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
const Header = ({
  getimagebyid,
  inputString,
}: {
  getimagebyid: (input: string) => string;
  inputString: string;
}) => {
  const compares = useSelector((state: any) => state.compare.comparesDiamond);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap:"5px"
      }}
    >
      {compares.map((c: any) => {
        return (
          <TableCell className="cssMuiTableCell-root">
            <div
              style={{
                backgroundColor: " rgba(230, 230, 230, 0.60)",
                display: "flex",
                flexDirection: "column",
                width: "230px",
                height: "170px",
                padding: "10px",
                alignItems: "center",
                gap: "8px",
                flexShrink: 0,
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <IconButton>
                  <Avatar
                    onClick={() => {
                      console.log(c);
                    }}
                    sx={{ width: 25, height: 25 }}
                    src={emptyLove}
                  ></Avatar>
                </IconButton>
                <IconButton>
                  <Avatar sx={{ width: 25, height: 25 }} src={deleted}></Avatar>
                </IconButton>
              </div>
              <div>
                <img
                  alt=""
                  src={getimagebyid(c.relationships?.images?.data[0].id.uuid)}
                  style={{ width: "90px", height: "90px" }}
                />
              </div>
              <div>
                <Button
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    width: "200px",
                    fontFamily: "Assistant",
                  }}
                >
                  <img src={lookfor} style={{ marginRight: "5px" }} />
                  Explorer
                </Button>
              </div>
            </div>
          </TableCell>
        );
      })}
    </div>
  );
};
