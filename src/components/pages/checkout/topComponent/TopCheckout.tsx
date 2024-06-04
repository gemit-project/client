import React, { useEffect, useState } from "react";
import { DiamondDisplay } from "./DiamondDisplay";
import "./TopCheckout.css";
import { DiamondDetails } from "./DiamondDetails";
import { Price } from "./Price";
import { Vendor } from "./Vendor";
import { StatusLine } from "../StatusLine";
import { useSelector } from "react-redux";
export const TopCheckout: React.FC = () => {
  const currentDaimond = useSelector(
    (state: any) => state.daimond.currentDaimond
  );
  const TheDiamondPrice = currentDaimond?.attributes.price.amount;
  const diamondTitle = currentDaimond?.attributes.title;
  const vendorEmail = currentDaimond?.attributes.publicData?.Email;
  const vendorName = currentDaimond?.attributes.publicData?.Profil.displayName;
  const vendorImg = currentDaimond?.attributes.publicData?.img;

  return (
    <>
      <div className="border">
        <div className="positionInsideBorder">
          <div className="diamondComponent">
          
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
