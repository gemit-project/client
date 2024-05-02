import React from "react";
import { Diamond } from "./Diamond";
import "./TopCheckout.css";
import { CheckOut } from "../CheckOut";
import { DiamondDetails } from "./DiamondDetails";
import { Price } from "./Price";
import { Vendor } from "./Vendor";
import diamond from "../../assets/diamonds/2.svg";

export const Top: React.FC = () => {
  return (
    <>
      <div className="border">
        <div className="diamondComponent">
          <Diamond myimg={diamond.toString()} />
          <div>
            <DiamondDetails diamondDetails={"1.08 Carat G SI1 Excellent Cut"} />
          </div>
          <div>
            <Price price={"3430"} />
          </div>
          <Vendor
            name={"David schwartz"}
            mail={"davidschwartz@gmail.com"}
            img={"https://via.placeholder.com/50x50"}
          />
        </div>
        <div className="checkoutComponent">
          <CheckOut />
        </div>
      </div>
    </>
  );
};
