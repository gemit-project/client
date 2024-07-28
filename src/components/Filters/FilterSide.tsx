import React from "react";
import "./FilterSide.css";

export const FilterSide = (props: any) => {
  return (
    <div>
      <div
        className="filterSide"
        style={{ backgroundColor: props.color }}
      ></div>
    </div>
  );
};
