import React from "react";
import diamond from '../../assets/diamonds/2.svg';
import './Diamond.css';
import hands from './../icons/hands.svg';
import './Price.css';

export const Price:React.FC<{prc:string }> = ({prc}) => {
    return <>
        <div className="all">
            <div className="sqre">
                <div className="in" >
                    <div className="prc">PRICE</div>
                    <img src={hands.toString()}></img>
                </div>
                <div className="cost" > ${prc}</div>
            </div>
        </div>
    </>;
};

// export const Price: React.FC = () => {
//     return <>
//         <div className="all">
//             <div className="sqre">
//                 <div className="in" >
//                     <div className="prc">PRICE</div>
//                     <img src={hands.toString()}></img>
//                 </div>
//                 <div className="cost" >$3,430</div>
//             </div>
//         </div>
//     </>;
// };
