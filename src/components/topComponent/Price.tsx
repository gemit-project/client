import React from "react";
import "./Diamond.css";
import hands from "../../assets/icons/Checkout-icons/hands.svg";
import "./Price.css";

export const Price: React.FC<{diamondPrice: string }> = ({ diamondPrice }) => {
  return (
    <>
      <div className="all">
        <div className="squarePrice">
          <div className="in">
            <div className="price">PRICE</div>
            <img src={hands.toString()}></img>
          </div>
          <div className="cost"> ${diamondPrice}</div>
        </div>
      </div>
    </>
  );
};
