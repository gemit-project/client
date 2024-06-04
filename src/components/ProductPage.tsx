import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import { sdk } from "../config/sharetribeSDK.config";
import { useSelector } from "react-redux";
import {  IconButton, Typography } from "@mui/material";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import back from "../assets/icons/product-icons/back.svg";
import madalya from "../assets/icons/product-icons/Madalya.svg";
import arrowDount from "../assets/icons/product-icons/Group 1652.svg";
import fullLove from "../assets/icons/product-icons/fullLike.png";
import emptyLove from "../assets/icons/product-icons/EmptyLike.png";
import { DiamodFeaters } from "./DiamondsFeatures";
import { SecuretyProtection } from "./Securety & Protection";


type Countries = {
  [key: string]: string;
};

const countriesCode: Countries = { USA: "US", Israel: "IL" };

export const ProductPage = () => {
  const str = "http://purecatamphetamine.github.io/country-flag-icons/3x2/";
  const navigation = useNavigate();
  const currentDiamond = useSelector(
    (state: any) => state.daimond.currentDaimond
  );
  const [selected, setSelected] = useState<string>(
    currentDiamond.included
      ? currentDiamond.included[1].attributes.variants.default.url
      : ""
  );
  const [isClick, setClick] = useState<boolean>(false);

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
          <div>
            <div
              className="images"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "20%" }}>
                <div className="calom">
                  {currentDiamond?.included?.map(
                    (imagge: any) =>
                      imagge.type == "image" && (
                        <img
                          style={{
                            width: "100%",
                            height: "70px",
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
          <div>
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
                  <img
                    src={`${str}${
                      countriesCode[
                        currentDiamond?.data.attributes?.publicData?.Country
                      ]
                    }.svg`}
                    style={{ width: "50px", height: "50px" }}
                  ></img>
                  <label className="country">
                    {currentDiamond?.data.attributes?.publicData?.Country}
                  </label>
                </div>
              </div>
              <div className="pricesDeatails">
                <div className="prices">
                  <div className="priceDiv">
                    <Typography className="priceHeader">S/CR</Typography>
                    <Typography className="priceAmount">
                      ${currentDiamond?.data?.attributes?.price?.amount}
                    </Typography>
                  </div>
                  <div className="priceDiv">
                    <Typography className="priceHeader">Discount</Typography>
                    <Typography className="priceAmount">0%</Typography>
                  </div>
                  <div className="priceDiv">
                    <Typography className="priceHeader">Total</Typography>
                    <Typography className="priceAmount">??</Typography>
                  </div>
                </div>
                <div className="netoralLab">
                  <Typography
                    className="netoral"
                    sx={{
                      backgroundColor:
                        currentDiamond?.data.attributes?.publicData?.Natural ==
                        "Natural"
                          ? "rgb(104, 112, 112)"
                          : " transparent",
                    }}
                  >
                    Netural
                  </Typography>
                  <Typography
                    className="lab"
                    sx={{
                      backgroundColor:
                        currentDiamond?.data.attributes?.publicData?.Lab ==
                        "Lab"
                          ? "rgb(104, 112, 112)"
                          : "transparent",
                    }}
                  >
                    LAB
                  </Typography>
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
                      src={currentDiamond?.data.attributes.publicData?.img}
                      className="imag"
                      alt="Change"
                    ></img>
                    <div className="vendorDeatails">
                      <Typography variant="subtitle2">
                        {
                          currentDiamond?.data.attributes?.publicData.Profil
                            ?.displayName
                        }
                      </Typography>
                      <Typography variant="body1">
                        {currentDiamond?.data.attributes.publicData.Email}
                      </Typography>
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
                <p className="pVendor">                 
                  ??
                </p>
                <img src={arrowDount}></img>
                <button className="buttonCheckout">Check-Out</button>
              </div>
              <div
                style={{
                  borderLeft: "1px solid rgba(3, 4, 6, 0.50)",
                  marginLeft: "8vw",
                }}
              >
                <SecuretyProtection />
              </div>
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};
