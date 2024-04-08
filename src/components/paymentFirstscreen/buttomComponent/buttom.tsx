import React from 'react'
import { Map } from './map'
import { Button, Grid } from '@mui/material'
import './cssFirstScreen.css'
export const Buttom: React.FC = () => {




  const personalDetails = [
    {
      text: 'First name'
    },
    {
      text: 'Second name'
    },
    {
      text: 'Phone number'
    },
    {
      text: 'Email Addreess'
    }
  ]

  const companyDetails = [
    {
      text: 'Company Details'
    },
    {
      text: 'Company ID'
    },
    {
      text: 'Company ID Desc'
    }]


  const contactDetails = [
    {
      text: 'Phone number'
    },
    {
      text: 'Email Addreess'
    }

  ]

  const address = [
    {
      text: 'City'
    },
    {
      text: 'State'
    },
    {
      text: 'Company name'
    },
    {
      text: 'Street'
    },
    {
      text: 'Number'
    },
    {
      text: 'Zip code'
    }
  ]

  const shippingAddress = [
    {
      text: 'City'
    },
    {
      text: 'State'
    },
    {
      text: 'Company name'
    },
    {
      text: 'Street'
    },
    {
      text: 'Number'
    },
    {
      text: 'Zip code'
    }
  ]
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
