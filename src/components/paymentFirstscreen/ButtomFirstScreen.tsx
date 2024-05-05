import React from 'react'
import { Button } from '@mui/material'
import {  Outlet,Link } from "react-router-dom";
import './CheckoutFirstScreen.css'
import { MapFirstScreen } from './MapFirstScreen';
export const ButtomFirstScreen: React.FC = () => {
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
          <MapFirstScreen name='PERSONAL DETAILS' list={personalDetails} />
          <MapFirstScreen name='COMPANY DETAILS' list={companyDetails} />
          <MapFirstScreen name='CONTACT DETAILS' list={contactDetails} />
        </div>
        <div className='left-culomn1'>
          <MapFirstScreen name='ADDRESS' list={address} />
          <MapFirstScreen name='SHIPPING ADDRESS' list={shippingAddress} />
        </div>
      </div>
      <div className='button-next1'>
        <Link to='/Shipping&inssurance'>
        <Button  variant="contained" sx={{ width: '10vw' }}>Next</Button>
        </Link>
        </div>
        <Outlet/>
    </div>
  )
}
