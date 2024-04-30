import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import { sdk } from "../config/sharetribeSDK.config";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import back from "../assets/icons/product-icons/back.svg";
import lock from "../assets/icons/product-icons/Vector.svg";
import madalya from "../assets/icons/product-icons/Madalya.svg";
import arrowDount from "../assets/icons/product-icons/Group 1652.svg";
import love from "../assets/icons/personal-area-icons/heart.svg";
const { UUID } = require("sharetribe-flex-sdk").types;

export const ProductPage = () => {
  const navigation = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const imagges = useSelector((state: any) => state.user.images);
  const [imgsUuid, setImgsUuid] = useState<
    Array<{ id: typeof UUID; type: "" }>
  >([]);
  const [imgsUrl, setImgsUrl] = useState<Array<string>>([]);
  const [image, setImgList] = useState<Array<any>>([]);
  const [file, setFile] = useState<File | undefined | null>();
  const [selected, setSelected] = useState<string>("");
  useEffect(() => {
    fff();
  }, []);
  useEffect(() => {
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
  const fff = async () => {
    sdk.listings.query({ include: ["images"] }).then((res: any) => {
      const urls: string[] = [];
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
          <Typography className="typografy">Back To All Results</Typography>
          <IconButton
            onClick={() => {
              navigation("/Search");
            }}
          >
            <img  src={back}></img>
          </IconButton>
        </div>

        <div className="div-details-images">
          <div className="images">
            <div className="calom">
              {imgsUrl.map((imgg) => (
                <img
                  style={{
                    width: "180px",
                    height: "130px",
                    borderRadius: "8px",
                  }}
                  src={imgg}
                  onClick={() => setSelected(imgg)}
                ></img>
              ))}
            </div>
           <div >
            <img className="current" src={selected}></img>
            <div className="addwish">
              <IconButton >
               <img src={love}></img>
              </IconButton>
          <Typography>Add To WishList</Typography>
        </div>
        <div className="frame2012">
          <div className="frame2010">
            <div className="fetures">
                 <div className="frame2398">
                  <div className="frame2397">
                    <Typography className="featers">Diamond’s Features</Typography>
                    <Typography>ee</Typography>
                  </div>
                  <Button className="buto">Fill AAAAAAAAAAAAAAAAAA</Button>
                 </div>
            </div>
          </div>
        </div>
        <div className="diamondFeters">

        </div>
           </div> 
         
          </div>
          <div className="frame2005">
            <label
              style={{
                color: " #000",
                fontFamily: "Poppins",
                fontSize: "34px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "120%" /* 40.8px */,
                textTransform: "uppercase",
              }}
            >
              Current Product Titel
            </label>
            <div className="frame2003">
              <button className="certificates">
                <img src={madalya}></img>
                Certificates
              </button>
              <div className="frame1936">
                <img src="" alt="country img" />
                <label className="country">country</label>
              </div>
            </div>
            <div className="frame20055">
              <div className="frame1970">
                  <div className="frame2363">
                    <div className="frame1967">
                      <Typography className="tipp">S/CR</Typography>
                      <Typography className="tippp">$3333</Typography>
                    </div>
                    <div className="frame1967">
                      <Typography className="tipp">Discount</Typography>
                      <Typography className="tippp">32%</Typography>
                    </div>
                    <div className="frame1967">
                      <Typography className="tipp">Total</Typography>
                      <Typography className="tippp">$4321</Typography>
                    </div>
                  
                  </div>
              </div>
            <div className="frame1971">
                 <Typography className="tiip">NETORAL</Typography>
                 <Typography className="tiipLab">LAB</Typography>
            </div>
           </div>
            <div className="frame1988">
              <div className="frame1986">
                <div className="frame2396">
                  <div className="profil-contact">
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
                    <div className="farm1765">
                      <Typography variant="subtitle2">vendor name</Typography>
                      <Typography variant="body1">mail</Typography>
                    </div>
                  </div>
                  <div className="frame2395">
                    <button className="but">BID Price</button>
                    <button className="but">CHAT</button>
                  </div>
                </div>
              </div>
              <div className="frame1985">
                <Typography className="tip">
                  <b>Vendor’s Notes</b>
                </Typography>
                <img src={lock}></img>
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
              <button className="button-checkout">Check-Out</button>
            </div>
          </div>
        </div>
           {/* <div className="wishing">
          <img src={love}></img>
          <Typography>Wishing</Typography>
        </div> */}
        <Outlet></Outlet>
      </div>
    </>
  );
};
