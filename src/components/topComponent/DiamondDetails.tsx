import React from "react";
import './DiamondDetails.css';

export const DiamondDetails: React.FC<{ diamondDetails: string }> = ({ diamondDetails }) => {
  return <>
    <div className="detail">{diamondDetails}</div>
  </>;
};