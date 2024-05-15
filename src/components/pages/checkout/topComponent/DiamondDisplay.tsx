import React from "react";
import "./DiamondDisplay.css";

export const DiamondDisplay: React.FC<{ diamondImg?: string }> = ({ diamondImg }) => {
  return (
    <>
      <div className="square">
        <img className="diamond" src={diamondImg}></img>
      </div>
    </>
  );
};