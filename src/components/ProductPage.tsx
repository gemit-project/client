import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import { sdk } from "../config/sharetribeSDK.config";
import { useSelector } from "react-redux";
import { IconButton, Typography } from "@mui/material";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import back from "../assets/icons/product-icons/back.svg";
import madalya from "../assets/icons/product-icons/Madalya.svg";
import arrowDount from "../assets/icons/product-icons/Group 1652.svg";
import fullLove from "../assets/icons/product-icons/fullLike.png";
import emptyLove from "../assets/icons/product-icons/EmptyLike.png";
import { DiamodFeaters } from "./DiamondsFeatures";
import { SecuretyProtection } from "./Securety & Protection";

const { UUID } = require("sharetribe-flex-sdk").types;

export const ProductPage = () => {
  const navigation = useNavigate();
  const params = useParams();
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const [currentDiamond,setCurrentDiamond]=useState();
  const [imgsUuid, setImgsUuid] = useState<
    Array<{ id: typeof UUID; type: "" }>
  >([]);
  const [imgsUrl, setImgsUrl] = useState<Array<string>>([]);
  const [image, setImgList] = useState<Array<any>>([]);
  const [selected, setSelected] = useState<string>("");
  const [isClick, setClick] = useState<boolean>(false);
  useEffect(() => {
    getListingsImages();
  }, []);
  useEffect(() => {
    sdk.listings.show({id:params["uuid"] },{included:["images"]}).then((res:any) => {
      setCurrentDiamond(res.data)
    });
    imgsUuid.forEach((i) => {
      image.forEach((j: any) => {
        if (i.id.uuid == j.id.uuid) {
          if (imgsUrl.length < imgsUuid.length) {
            imgsUrl.push(j.attributes.variants.default.url);
            setImgsUrl(imgsUrl);
          }
        }
      });
    });
  }, [imgsUuid, image]);
  const getListingsImages = async () => {
    sdk.listings.query({ include: ["images"] }).then((res: any) => {
      const uuid: string | undefined = params["uuid"];
      res.data.data.forEach((ele: any) => {
        if (uuid == ele.id.uuid) {
          setImgsUuid(ele.relationships.images.data);
          setImgList(res.data.included);
        }
      });
    });
  };

  return (
    <>
      <div className="page">
       
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
        <div className="detailsImagesDiv">
          <div style={{width:"60%"}}>
            <div className="images">
              <div className="calom">
                {imgsUrl.map((imgg) => (
                  <img
                    style={{
                      width: "100%",
                      height:"150px",
                      borderRadius: "8px",
                    }}
                    src={imgg}
                    onClick={() => setSelected(imgg)}
                  ></img>
                ))}
              </div>
              <div>
                <img
                  className="current"
                  src={selected ? selected : imgsUrl[0]}
                ></img>
                <div className="addwish">
                  <IconButton onClick={() => setClick((isClick) => !isClick)}>
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={isClick ? fullLove : emptyLove}
                    ></img>
                  </IconButton>
                  <Typography>Add To WishList</Typography>
                </div>
               
              </div> 
           
            </div> 
              <DiamodFeaters />
          </div>
          <div className="deatails">
            <div className="diamondTitle">Current Product Titel</div>
            <div className="certificatesCountry">
              <button className="certificates">
                <img src={madalya}></img>
                Certificates
              </button>
              <div className="countryDiv">
                <img src="" alt="country img" />
                <label className="country">country</label>
              </div>
            </div>
            <div className="pricesDeatails">
              <div className="prices">
                <div className="price">
                  <Typography className="priceHeader">S/CR</Typography>
                  <Typography className="priceAmount">$3333</Typography>
                </div>
                <div className="price">
                  <Typography className="priceHeader">Discount</Typography>
                  <Typography className="priceAmount">-32%</Typography>
                </div>
                <div className="price">
                  <Typography className="priceHeader">Total</Typography>
                  <Typography className="priceAmount">$4321</Typography>
                </div>
              </div>
              <div className="netoralLab">
                <Typography className="netoral">NETORAL</Typography>
                <Typography className="lab">LAB</Typography>
              </div>
            </div>
            <div className="vendorDiv">
              <div className="vendorContact">
                <div className="vendorProfil">
                  <img
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "90%",
                    }}
                    src={
                      currentUser.included
                        ? currentUser.included[0].attributes.variants.default
                            .url
                        : ""
                    }
                    className="imag"
                    alt="Change"
                  ></img>
                  <div className="vendorDeatails">
                    <Typography variant="subtitle2">vendor name</Typography>
                    <Typography variant="body1">mail</Typography>
                  </div>
                </div>
                <div className="priceAndChatButtons">
                  <button className="bidPriceButton">BID Price</button>
                  <button className="chatButton">CHAT</button>
                </div>
              </div>
              <div className="notes">
                <Typography className="vendorsNotes">
                  <b>Vendor’s Notes</b>
                </Typography>
              </div>
              <p className="p">
                Ullamcorper eget nulla facilisi etiam dignissim diam quis.
                Accumsan sit amet nulla facilisi morbi. Dignissim convallis
                aenean et tortor at risus viverra adipiscing at. Pellentesque id
                nibh tortor id aliquet lectus proin nibh nisl. Neque viverra
                justo nec ultrices dui sapien. Gravida dictum fusce ut placerat
                orci nulla. Eget aliquet nibh...
              </p>
              <img src={arrowDount}></img>
              <button className="buttonCheckout">Check-Out</button>
            </div>
            <SecuretyProtection />
          </div>
        </div> 
        <Outlet></Outlet>
     
      </div>
    </>
  );
};
