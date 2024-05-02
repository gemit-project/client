import React from "react";
import './Diamond.css';

export const Diamond: React.FC<{ myimg: string }> = ({ myimg }) => {
  return <>
    <div className="square" >
      <img className="diamond" src={myimg}></img>
    </div>

  </>;
};