import React from "react";
import './Diamond.css';

export const Diamond: React.FC<{ myimg: string }> = ({ myimg }) => {
  return <>
    <div className="sqr" >
      <img className="dmnd" src={myimg}></img>
    </div>

  </>;
};