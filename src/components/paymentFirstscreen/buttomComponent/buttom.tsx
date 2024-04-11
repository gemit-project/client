import React from 'react'
import { Map } from './map'
import { Button } from '@mui/material'

import {  Outlet,Link } from "react-router-dom";
import './cssFirstScreen.css'

export const Buttom: React.FC = () => {

  const personalDetails = [ 'First name','Second name', 'Phone number', 'Email Addreess'];
  const companyDetails = ['Company Details', 'Company ID','Company ID Desc'];
  const contactDetails = ['Phone number','Email Addreess'];
  const address = [ 'City','State','Company name','Street','Number','Zip code'];
  const shippingAddress = [ 'City','State','Company name','Street','Number','Zip code'];

  return (
    <div className='first-screen'>
      <div className='general-details'>General Details</div>
      <div className="table1">
        <div className='right-culomn1'>
          <Map name='PERSONAL DETAILS' list={personalDetails} />
          <Map name='COMPANY DETAILS' list={companyDetails} />
          <Map name='CONTACT DETAILS' list={contactDetails} />
        </div>
        <div className='left-culomn1'>
          <Map name='ADDRESS' list={address} />
          <Map name='SHIPPING ADDRESS' list={shippingAddress} />
        </div>
      </div>
      <div className='button-next1'>
        <Link to='/Shipping&inssurance'>
        <Button  variant="contained" sx={{ width: '11vw' }}>Next</Button>
        </Link>
        </div>
        <Outlet/>
    </div>
  )
}
