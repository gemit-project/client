import React, { useState } from 'react';
import './side-bar.css';
import Dashoard from '../assets/icons/Dashoard.svg';
import search from '../assets/icons/search.svg';
import checkOut from '../assets/icons/check-out.svg';
import chat from '../assets/icons/chat.svg';
import setting from '../assets/icons/settings.svg';
import logOut from '../assets/icons/log-out.svg';
import logo from'../assets/logo/logo.svg';



export const SideBar = () => {


    const [isExpanded, setIsExpanded] = useState(false);
      

    const handleMouseEnter = () => {
        setIsExpanded(true);
      };
    
    const handleMouseLeave = () => {
        setIsExpanded(false);
      };

    return(
        <>
        <div 
          className={`sidebar ${isExpanded ? 'expanded' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div>
            { isExpanded ? <img src={logo} className='logo'/> : null } 
          </div>

          <div className="allDiv">
            <div className='my'>
              {/* <div className='side' style={{marginTop:  isExpanded ? 80 : 165 }}/> */}
              <img src={Dashoard} style={{marginTop:  isExpanded ? 80 : 165  , height: 14.3}}  className="img" alt="Dashboard"/>
              <div className="name">{ isExpanded ? "Dashboard" : null }</div>
            </div>
            <div className='my'>
              <img src={search} style={{marginTop: 40 , height: 17.078}}  className="img" alt="Search" />
              <div className="name">{ isExpanded ? "Search" : null }</div>
            </div>
            <div className='my'>
              <img src={checkOut} style={{marginTop: 40 , height: 17}}  className="img" alt="CheckOut" />
              <div className="name">{ isExpanded ? "CheckOut" : null }</div>
            </div>
            <div className='my'>
              <img src={chat} style={{marginTop: 40, height: 14.841}}  className="img" alt="Chat" />
              <div className="name">{ isExpanded ? "Chat" : null }</div>
            </div>
            <div className='my'>
              <img src={setting} style={{marginTop: 100 , height: 17}}  className="img" alt="Setting" />
              <div className="name">{ isExpanded ? "Setting" : null }</div>
            </div>
            <div className='my'>
              <img src={logOut} style={{marginTop: 40 , height: 17}}  className="img" alt="LogOut" />
              <div className="name">{ isExpanded ? "LogOut" : null }</div>
            </div>
          </div>
        </div>
        </>
    )
}

export default SideBar;