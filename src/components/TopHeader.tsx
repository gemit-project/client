import React from 'react';
import './TopHeader.css';
import groupd from './icons/diamond.svg';
import groupg from './icons/gemit.svg';
import heart from './icons/heart.svg';
import bell from './icons/bell.svg';
import imag from './icons/imag.svg';
import circle from './icons/circle.svg';

export const TopHeader: React.FC = () => {

  const userName = "";

  return (
    <div className='top-header'>
      <div className='top-header-logo'>
        <img src={groupg.toString()} className='gemit'></img>
        <br />
        <img src={groupd.toString()}></img>
      </div>
      <div className='right-icons'>
        <div className='the-whole-page'>
          <div className='heart-bell-imag-circle'>
            <div className='heart-bell'>
              <img src={heart.toString()} className='heart'></img>
              <img src={bell.toString()} className='bell'></img>
            </div>
            <div className='imag-circle'>
              <img src={imag.toString()} className='imag'></img>
              <img src={circle.toString()} className='circle'></img>
            </div>
          </div>
          {userName && <div className='labels'>
            <label className='user-name'>{userName}</label>
            <label className='buyer-or-seller'>{userName}</label>
          </div>}
        </div>
      </div>
    </div>
  )
};

