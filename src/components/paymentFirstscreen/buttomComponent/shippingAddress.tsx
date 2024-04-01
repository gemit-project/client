import { Checkbox, TextField } from '@mui/material'
import React from 'react'

export default function ShippingAddress() {
  return (
      

<div style={{width: 672, flexDirection: 'column', gap: 10, display: 'inline-flex'}}>

  <div style={{ width:'600',justifyContent: 'flex-start', alignItems: 'flex-start'}}><div style={{width: 408,height: 350, color: '#030406', textAlign:'left', fontSize: 24, fontFamily: 'Poppins', fontWeight: '600', textTransform: 'uppercase', lineHeight: 30.80, wordWrap: 'break-word'}}>SHIPPING Address</div>
  <div style={{marginLeft:35}}><Checkbox />Same as company address</div></div>
  
  <div style={{width: 840, height: 90, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>

    <div> <div style={{ textAlign:'left',width: 192, color: '#0000FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 2.40, letterSpacing: 0.54, wordWrap: 'break-word'}}>Company name</div>     <TextField focused  /></div>  
    
    <div>  <div style={{ textAlign:'left',width: 192, color: '#0000FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 2.40, letterSpacing: 0.54, wordWrap: 'break-word'}}>State</div>    <TextField focused  /></div>  

    <div>  <div style={{ textAlign:'left',width: 192, color: '#0000FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 2.40, letterSpacing: 0.54, wordWrap: 'break-word'}}>City</div>   <TextField focused  /></div>

  </div>

  <div style={{width: 840, height: 90, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>

    <div> <div style={{ textAlign:'left',width: 192, color: '#0000FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 2.40, letterSpacing: 0.54, wordWrap: 'break-word'}}>Street </div>     <TextField focused  /></div>  
    
    <div>  <div style={{ textAlign:'left',width: 192, color: '#0000FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 2.40, letterSpacing: 0.54, wordWrap: 'break-word'}}>Number</div>    <TextField focused  /></div>  

    <div>  <div style={{ textAlign:'left',width: 192, color: '#0000FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 2.40, letterSpacing: 0.54, wordWrap: 'break-word'}}>Zip code</div>   <TextField focused  /></div>

  </div>
  
  <div style={{width: 654, height: 0, opacity: 0.65, border: '1px #030406 solid'}}></div>
</div>
  )
}
