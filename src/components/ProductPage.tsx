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
import { Daimond } from "../Types/Daiamond";
import { User } from "../Types/User";

const { UUID } = require("sharetribe-flex-sdk").types;

export const ProductPage = () => {
  const navigation = useNavigate();
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const [selected, setSelected] = useState<string>("");
  const [isClick, setClick] = useState<boolean>(false);
  const [currentDiamond, setCurrentDiamond] = useState<Daimond>();
  const currentUUIDDaimond = useSelector(
    (state: any) => state.daimond.currentDaimond
  ).id.uuid;
  const [currentUUIDVendor, setUUIdVendor] = useState();
  const [currentVendor, setVendor] = useState();

  const getCurentDaimond = async () => {
    sdk.listings
      .show({ id: currentUUIDDaimond, include: ["author", "images"] })
      .then((res: any) => {
        setCurrentDiamond(res.data);
        setSelected(res.data.included[1].attributes.variants.default.url);
        setUUIdVendor(res.data.included[0].id.uuid);
        console.log(res.data);
      });
  };
  useEffect(() => {
    getCurentDaimond();
  }, []);
  useEffect(() => {
    debugger;
  }, [currentUUIDVendor]);

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
          <div style={{ width: "60%", height: "75%" }}>
            <div className="images">
              <div style={{ width: "20%" }}>
                <div className="calom">
                  {currentDiamond?.included?.map(
                    (imagge: any) =>
                      imagge.type == "image" && (
                        <img
                          style={{
                            width: "100%",
                            height: "100px",
                            borderRadius: "8px",
                          }}
                          src={imagge.attributes.variants.default.url}
                          onClick={() =>
                            setSelected(imagge.attributes.variants.default.url)
                          }
                        ></img>
                      )
                  )}
                </div>
              </div>
              <div style={{ height: "50%" }}>
                <img className="current" src={selected ? selected : ""}></img>
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
            <div className="diamondTitle">
              {currentDiamond ? currentDiamond.data.attributes?.title : ""}
            </div>
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
