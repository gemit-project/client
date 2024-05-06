import React from "react";
import "./Diamond.css";
import hands from "../../../../assets/icons/Checkout-icons/hands.svg"
import "./Price.css";

export const Price: React.FC<{diamondPrice: string }> = ({ diamondPrice }) => {
  return (
    <>
      <div className="priceFrame">
        <div className="squarePrice">
          <div className="titleWithHandsIcon">
            <div className="price">PRICE</div>
            <img className="hand" src={hands.toString()}></img>
          </div>
          <div className="cost">${diamondPrice}</div>
        </div>
      </div>
    </>
  );
};
