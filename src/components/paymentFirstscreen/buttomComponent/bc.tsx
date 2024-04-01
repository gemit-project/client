import React from 'react'
import PersonalDetails from './personalDetails'
import CompanyDetails from './companyDetails'
import ContactDetails from './contactDetails'
import Address from './address'
import ShippingAddress from './shippingAddress'
import { Button } from '@mui/material'
export default function Bc() {
  return (

    <div style={{ width: '100wv', height: '100hv' }}>


      {/* <div style={{marginLeft:205,marginTop:280,textAlign:'left',color: '#030406', fontSize: 36, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>General Details</div> */}
      <div style={{ alignContent: 'flex-start', display: 'inline-flex', marginTop: 1 }}>

        {/* <div style={{flexDirection: 'column',marginLeft:192,marginTop:31}}>
        
        <div style={{marginTop:550,marginBottom:32,textAlign:'left',color: '#030406', fontSize: 36, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>General Details</div>
        <div style={{marginTop:-300}}><PersonalDetails/></div>
        <div style={{marginTop:-150}}><CompanyDetails/></div>
        <div style={{marginTop:-150}}><ContactDetails/></div>

      </div> */}

        <div style={{ flexDirection: 'column', display: 'inline-flex', marginLeft: 400, marginTop: '10%' }}>

          <div style={{}}><Address /></div>
          <div style={{ marginTop: -200 }}><ShippingAddress /></div>

        </div>

      </div>
      {/* <div style={{width: '100%', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Assistant', fontWeight: '700', lineHeight: 24}}>Next</div> */}
      <div style={{ marginLeft: 1620 }}><Button style={{ width: '172px', height: '24px', wordWrap: 'break-word' }} variant="contained">Next</Button></div>
    </div>
  )
}
