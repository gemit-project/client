import React from "react";
import SideBar from "./side-bar/side-bar";
import { TopHeader } from "./TopHeader";
import { Routing } from "../utils/routing";
import { FormProduct } from "./FormProduct";
import SignIn from "./SginIn";

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
          <SignIn></SignIn>
          <FormProduct></FormProduct>
          <Routing />
        </div>
    //   </div>
    // </div>
  );
};
