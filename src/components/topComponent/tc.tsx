import React from "react";
import { Diamond } from "./diamond";
import './Tc.css';
import { CheckOut } from "../CheckOut";
import { DiamondDetails } from "./DiamondDetails";
import { Price } from "./Price";
import { Vendor } from "./Vendor";
import diamond from '../../assets/diamonds/2.svg';

export const Top: React.FC = () => {
  return <>
    <div className="brdr" >
      <div className="dmndCmp">
        <Diamond myimg={diamond.toString()} />
        <div><DiamondDetails diamondDetails={"1.08 Carat G SI1 Excellent Cut"} /></div>
        <div><Price prc={"3430"} /></div>
        <Vendor name={"David schwartz"} mail={"davidschwartz@gmail.com"} img={"https://via.placeholder.com/50x50"} />

      </div>
      <div className="cktCmp">
        <CheckOut />
      </div>
    </div>
  </>;
};
