import React from "react";
import './Vendor.css';

export const Vendor: React.FC<{ name: string, mail: string, img: string }> = ({ name, mail, img }) => {
    return <>
        <div className="vndr"  >
            <div className="title" >Vendor</div>
            <div className="myimg">
                <img className="picture" src={img} />
                <div className="sqrotef" style={{ marginLeft: '0.3vw' }}>
                    <div className="vndrname" >{name}</div>
                    <div className="vndrmail">{mail}</div>

                </div>
            </div>
        </div>
    </>;
};
