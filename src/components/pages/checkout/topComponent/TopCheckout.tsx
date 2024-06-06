import React, { useEffect, useState } from "react";
import { DiamondDisplay } from "./DiamondDisplay";
import "./TopCheckout.css";
import { DiamondDetails } from "./DiamondDetails";
import { Price } from "./Price";
import { Vendor } from "./Vendor";
import { StatusLine } from "../StatusLine";
import { useSelector } from "react-redux";
export const TopCheckout: React.FC = () => {
  debugger
  const currentDaimond = useSelector(
    (state: any) => state.daimond.currentDaimond
  );
  const TheDiamondPrice = currentDaimond?.data.attributes.price.amount;
  const diamondTitle = currentDaimond?.data.attributes.title;
  const vendorEmail = currentDaimond?.data.attributes.publicData?.Email;
  const vendorName = currentDaimond?.data.attributes.publicData?.Profil.displayName;
  const vendorImg = currentDaimond?.data.attributes.publicData?.img;
  debugger
  const diamondImg = currentDaimond.included
  ? currentDaimond.included[1].attributes.variants.default.url
  : "";
  return (
    <>
      <div className="border">
        <div className="positionInsideBorder">
          <div className="diamondComponent">
          <DiamondDisplay diamondImg={diamondImg} />
            <div>
              <DiamondDetails diamondDetails={diamondTitle} />
            </div>
            <div>
              <Price diamondPrice={TheDiamondPrice} />
            </div>
            <Vendor name={vendorName} mail={vendorEmail} img={vendorImg} />
          </div>
          <div className="checkoutComponent">
            <StatusLine />
          </div>
        </div>
      </div>
    </>
  );
};
