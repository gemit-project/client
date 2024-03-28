import React, { useState } from "react";
import dashboard from '../assets/icons/side-bar-icons/dashoard.svg'
import search from "../assets/icons/side-bar-icons/search.svg";
import checkOut from "../assets/icons/side-bar-icons/check-out.svg"
import chat from "../assets/icons/side-bar-icons/chat.svg"
import settings from "../assets/icons/side-bar-icons/settings.svg"
import logOut from "../assets/icons/side-bar-icons/log-out.svg"
import logo from "../assets/icons/side-bar-icons/logo/logo.svg"
import { Outlet, Link, useLocation } from "react-router-dom";
import "./side-bar.css";

export const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const TopIcons = [
    {
      src: dashboard,
      to: "Dashboard",
    },
    {
      src: search,
      to: "Search",
    },
    {
      src: checkOut,
      to: "CheckOut",
    },
    {
      src: chat,
      to: "Chat",
    },
  ];

  const buttomIcons = [
    {
      src: settings,
      to: "Setting",
    },
    {
      src: logOut,
      to: "LogOut",
    },
  ];

  const location = useLocation();
  const myLocation = location.pathname;

  return (
    <>
      <div
        className={`sidebar ${isExpanded ? "expanded" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          {isExpanded ? (
            <img src={logo} className="logo" alt="logo" />
          ) : (
            <div style={{ height: "27vh" }} />
          )}
        </div>
        <div className={`oneDiv ${isExpanded ? "expanded" : ""}`}>
          {TopIcons.map((icon, i) => (
            <div key={i} className="myDiv">
              <div
                className={`side ${myLocation === `/${icon.to}` ? "true" : ""}`}
              />
              <img className="img" src={icon.src} alt="side-bar-icon" />
              <div>
                {isExpanded ? (
                  <Link to={`/${icon.to}`} className="name">
                    {icon.to}
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
          <div className="buttom">
            {buttomIcons.map((icon, i) => (
              <div key={i} className="myDiv">
                <div
                  className={`side ${
                    myLocation === `/${icon.to}` ? "true" : ""
                  }`}
                />
                <img className="img" src={icon.src} alt="img" />
                <div>
                  {isExpanded ? (
                    <Link to={`/${icon.to}`} className="name">
                      {icon.to}
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SideBar;
