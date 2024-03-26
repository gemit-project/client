import React from "react";
import SideBar from "./side-bar";
import { TopHeader } from "./TopHeader";
import { Routing } from "../utils/routing";

export const BaseScreen: React.FC = () => {
  return <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SideBar />
          <div style={{ display: "flex", flexDirection: "column", marginLeft:'52px', position:'fixed'}}>
            <TopHeader />
            <Routing/>
          </div>
        </div>
  </div>
};
