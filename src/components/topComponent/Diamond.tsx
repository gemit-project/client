import React from "react";
import "./Diamond.css";

export const Diamond: React.FC<{diamondImg: string }> = ({ diamondImg }) => {
  return (
    <>
      <div className="square">
        <img className="diamond" src={diamondImg}></img>
      </div>
    </>
  );
};
