import React from 'react'
import { Map } from './map'
import { Button, Grid } from '@mui/material'
import './cssFirstScreen.css'
export const Buttom: React.FC = () => {
  
  const personalDetails = [ 'First name','Second name', 'Phone number', 'Email Addreess'];
  const companyDetails = ['Company Details', 'Company ID','Company ID Desc'];
  const contactDetails = ['Phone number','Email Addreess'];
  const address = [ 'City','State','Company name','Street','Number','Zip code'];
  const shippingAddress = [ 'City','State','Company name','Street','Number','Zip code'];

  return (
    <div className='first-screen'>
      <div style={{ textAlign: 'left', color: '#030406', fontSize: 36, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>General Details</div>
      <div className="table">
        <div className='right-culomn'>
          <Map name='PERSONAL DETAILS' list={personalDetails} />
          <Map name='COMPANY DETAILS' list={companyDetails} />
          <Map name='CONTACT DETAILS' list={contactDetails} />
        </div>
        <div className='left-culomn'>
          <Map name='ADDRESS' list={address} />
          <Map name='SHIPPING ADDRESS' list={shippingAddress} />
        </div>
      </div>
      <div className='button-next'><Button variant="contained" sx={{ width: '11vw' }}>Next</Button></div>
    </div>
  )
}
