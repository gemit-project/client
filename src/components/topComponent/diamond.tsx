import React from "react";
import diamond from '../../assets/diamonds/2.svg';
import './Diamond.css';
// export const Diamond: React.FC = () => {
//   return <>
//   <div className="sqr" >
//     <img className="dmnd"  src={diamond.toString()}></img>
//     </div>

//   </>;
// };
export const Diamond: React.FC<{myimg:string}> = ({myimg}) => {
    return <>
    <div className="sqr" >
      <img className="dmnd"  src={myimg}></img>
      </div>
  
    </>;
  };