import React from "react";
import './Diamond.css';
import hands from './../icons/hands.svg';
import './Price.css';

export const Price: React.FC<{ prc: string }> = ({ prc }) => {
    return <>
        <div className="all">
            <div className="squarePrice">
                <div className="in" >
                    <div className="price">PRICE</div>
                    <img src={hands.toString()}></img>
                </div>
                <div className="cost" > ${prc}</div>
            </div>
        </div>
    </>;
};
