import React from "react";
import diamond from '../../assets/diamonds/2.svg';
import './DiamondDetails.css';

// export const DiamondDetails: React.FC = () => {
//   return <>
// <div className="d">1.08 Carat G SI1 Excellent Cut</div>
//   </>;
// };
export const DiamondDetails: React.FC<{diamondDetails:string }>= ({diamondDetails}) => {
    return <>
  <div className="d">{diamondDetails}</div>
    </>;
  };