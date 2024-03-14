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
      <div className='logo'>
        <img src={groupg.toString()} className='word'></img>
        <br />
        <img src={groupd.toString()}></img>
      </div>
      <div className='right-icons'>
        <div className='hbicl'>
          <div className='hbic'>
            <div className='hb'>
              <img src={heart.toString()} className='heart'></img>
              <img src={bell.toString()} className='bell'></img>
            </div>
            <div className='ic'>
              <img src={imag.toString()} className='imag'></img>
              <img src={circle.toString()} className='circle'></img>
            </div>
          </div>
          {userName && <div className='ll'>
            <label className='name'>{userName}</label>
            <label className='bos'>{userName}</label>
          </div>}
        </div>
      </div>
    </div>
  )
};

