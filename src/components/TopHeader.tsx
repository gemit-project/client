import React, { useEffect, useState } from "react";
import groupd from "../assets/icons/app-icons/diamond.svg"
import groupg from "../assets/icons/app-icons/gemit.svg"
import heart from "../assets/icons/personal-area-icons/heart.svg"
import bell from "../assets/icons/personal-area-icons/bell.svg"
import circle from "../assets/icons/personal-area-icons/circle.svg"
import "./TopHeader.css";
import { PersonalArea } from "./PersonalArea";
import { useSelector } from "react-redux";
import { Profil } from "./Profile";


export const TopHeader: React.FC = () => {
const [flag,setFlag]=useState(false);
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const userName = "";
  useEffect(() => { console.log('current user', currentUser) }, [currentUser])

  return (
    <div className="top-header">
      <div className="top-header-logo">
        <img src={groupg.toString()} alt="gemit-logo" className="gemit"></img>
        <br />
        <img src={groupd.toString()} alt="diamond-logo"></img>
      </div>
      <div className="right-icons">
        <div className="the-whole-page">
          <div className="heart-bell-imag-circle">
            <div className="heart-bell">
              <img src={heart.toString()} className="heart" alt="heart"></img>
              <img src={bell.toString()} className="bell" alt="bell"></img>
            </div>
            <div className="imag-circle">
              <img style={{height:"50px",width:"50px",borderRadius:"90%"}}  src={currentUser.included?currentUser.included[0].attributes.variants.default.url:""} className="imag" alt="img"></img>
              <img
                src={circle.toString()}
                className="circle"
                alt="circle"
              ></img>
            </div>
          </div>
          {userName && (
            <div className="labels">
              <label className="user-name">{userName}</label>
              <label className="buyer-or-seller">{userName}</label>
            </div>
          )}
        </div>
      </div>
      <button onClick={()=>setFlag(true)}>Edit Profil</button>
      {flag && <Profil flagD={true} setFlegD={setFlag} />}
    </div>

  );
};
