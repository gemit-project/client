import React, { useState } from 'react';
import './side-bar.css';
import Dashoard from '../assets/icons/Dashoard.svg';
import search from '../assets/icons/search.svg';
import checkOut from '../assets/icons/check-out.svg';
import chat from '../assets/icons/chat.svg';
import setting from '../assets/icons/settings.svg';
import logOut from '../assets/icons/log-out.svg';
import logo from'../assets/logo/logo.svg';
import { Outlet, Link, useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import { Search } from './Search';




export const SideBar = (props: { top: any; topTo: any; }) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const whiteSideLine=[true,false,false,false,false,false];

  let top=props.top;
  let topTo=props.topTo;

  const handleMouseEnter = () => {
      setIsExpanded(true);
    };
  
  const handleMouseLeave = () => {
      setIsExpanded(false);
    };

  const icons = [
    {
    src: Dashoard,
    style: {marginTop:  isExpanded ? 80 : 165 , height: 14.3},
    to: "Dashboard",
    stylelink:{marginTop:  isExpanded ? 74 : 142 },
    styleSide:{marginTop:  isExpanded ? 60 : 146 },
    },
    {
    src: search,
    style:{marginTop: 31 , height: 17.078},
    to: "Search",
    stylelink:{marginTop:  27 },
    styleSide:{marginTop:  12 },
    },
    {
      src: checkOut,
      style:{marginTop: 31 , height: 17},
      to: "CheckOut",
      stylelink:{marginTop: 27},
      styleSide:{marginTop: 12 },
    },
    {
      src: chat,
      style:{marginTop: 31, height: 14.841},
      to: "Chat",
      stylelink:{marginTop: 27},
      styleSide:{marginTop: 12 },
    },
    {
      src: setting,
      style:{marginTop: 92 , height: 17},
      to: "Setting",
      stylelink:{marginTop: 90},
      styleSide:{marginTop: 75 },
    },
    {
      src: logOut,
      style:{marginTop: 31 , height: 17},
      to: "LogOut",
      stylelink:{marginTop: 27 },
      styleSide:{marginTop: 12 },
      },
    
    ]

    const location = useLocation();
    const myLocation=location.pathname;
    debugger
  return (
    <>
      <div 
          className={`sidebar ${isExpanded ? 'expanded' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      >
          <div>
            { isExpanded ? <img src={logo} className='logo'/> : null } 
          </div>
      {icons.map((icon ,i) => (
        <div key={i} className='myDiv'>
        {/* <div className={`side ${whiteSideLine[i] ? 'true':''}`} style={icon.styleSide} /> */}
        <div className={`side ${myLocation ==`/${icon.to}` ? 'true':''}`} style={icon.styleSide} />
        <img className="img" src={icon.src} style={icon.style} />
        <div style={icon.stylelink}>
          { isExpanded ?  <Link to={`/${icon.to}`} className="name">{icon.to}</Link> : null }
        </div>
        </div> 
      ))}

      </div>
      <Outlet/>
    </>
    );
    };



export default SideBar;