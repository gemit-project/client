import { TextField } from '@mui/material'
import React from 'react'
import './general.css'
export default function ContactDetails() {
  return (
    <div style={{width: 672, flexDirection: 'column', gap: 10, display: 'inline-flex'}}>
    <div style={{width: 408,height: 350, color: '#030406', textAlign:'left', fontSize: 24, fontFamily: 'Poppins', fontWeight: '600', textTransform: 'uppercase', lineHeight: 28.80, wordWrap: 'break-word'}}>Contact Details</div>
  
    
    <div style={{width: 840, height: 90, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
  
      <div> <div style={{ textAlign:'left',width: 192, color: '#0000FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 2.40, letterSpacing: 0.54, wordWrap: 'break-word'}}>Phone number</div>     <TextField focused  /></div>  
      
      <div>  <div style={{ textAlign:'left',width: 192, color: '#0000FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 2.40, letterSpacing: 0.54, wordWrap: 'break-word'}}>Email Addreess</div>    <TextField focused  /></div>  
  
    </div>
    
    <div style={{width: 440, height: 0, opacity: 0.65, border: '1px #030406 solid'}}></div>
  </div>
  
  )
}
