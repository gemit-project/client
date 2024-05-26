import React from "react";
import "./Vendor.css";

export const Vendor: React.FC<{ name: string; mail: string; img: string }> = ({
  name,
  mail,
  img,
}) => {
  return (
    <>
      <div className="vendor">
        <div className="title">Vendor</div>
        <div className="vendorDetails">
          <img className="picture" src={img} />
          <div className="nameAndEmail" >
            <div className="vendorName">{name}</div>
            <div className="vendorEmail">{mail}</div>
          </div>
        </div>
      </div>
    </>
  );
};
