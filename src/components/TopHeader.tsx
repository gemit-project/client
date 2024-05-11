import React, { useEffect, useState } from "react";
import groupd from "../assets/icons/app-icons/diamond.svg";
import groupg from "../assets/icons/app-icons/gemit.svg";
import heart from "../assets/icons/personal-area-icons/heart.svg";
import bell from "../assets/icons/personal-area-icons/bell.svg";
import circle from "../assets/icons/personal-area-icons/circle.svg";
import "./TopHeader.css";
import { useSelector } from "react-redux";
import { PersonalArea } from "./PersonalArea";
import { Box, Typography } from "@mui/material";

export const TopHeader: React.FC = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const userName = currentUser.data?.attributes.profile.abbreviatedName;
  const buyerOrSeller = currentUser.data?.attributes.profile.publicData.type;

  useEffect(() => {
    console.log("current user", currentUser);
  }, [currentUser]);

  return (
    <div className="top-header">
      <div className="top-header-logo">
        <img src={groupg.toString()} alt="gemit-logo" className="gemit"></img>
        <br />
        <img
          src={groupd.toString()}
          alt="diamond-logo"
          className="second-word-in-logo"
        ></img>
      </div>
      <div className="right-icons">
        <div className="the-whole-page">
          <div className="heart-bell-imag-circle">
            <div className="heart-bell">
              <img src={heart.toString()} className="heart" alt="heart"></img>
              <img src={bell.toString()} className="bell" alt="bell"></img>
            </div>
            <div className="imag-circle">
              <PersonalArea />
              <img
                src={circle.toString()}
                className="circle"
                alt="circle"
              ></img>
            </div>
          </div>
          {userName && (
            <Box>
              <Typography variant="subtitle2">{userName}</Typography>
              <Typography variant="body1">{buyerOrSeller}</Typography>
            </Box>
          )}
        </div>
      </div>
    </div>
  );
};
