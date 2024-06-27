import React from "react";
import SideBar from "./side-bar/side-bar";
import { TopHeader } from "./TopHeader";
import { Routing } from "../utils/routing";
import {FormProduct} from "../components/form-product";

export const BaseScreen: React.FC = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "fixed",
          }}
        >
          <TopHeader />
          <FormProduct/>
          <Routing />
        </div>
      </div>
    </div>
  );
};
