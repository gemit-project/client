import { StackedLineChart } from '@mui/icons-material'
import React from 'react'

export default function StatusLine() {
  return (

    <div >
      <div style={{ marginLeft:132,width: 1400, height: 50, justifyContent: 'space-between', alignItems: 'center', alignContent: 'start', display: 'inline-flex' }}>
        {/* circle */}
        <Circle current={false}/>
        <Circle current={true}/>
        <Circle current={false}/>
        <Circle current={false}/>
        <Circle current={false}/>


        <div style={{ zIndex: -1, width: 1360, height: 0, position: 'absolute', border: '4px #0000FF solid' }}></div>
      </div>
    <Line text='General Details' current={false}/>
    <Line text='Shipping & Insurance' current={true}/>
    <Line text='Funding options' current={false}/>
    <Line text='Payment' current={false}/>
    <Line text='Confirmation' current={false}/>


      {/* <div style={{ width: 190, height: 30, textAlign: 'center', marginTop: -60, color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 29.86, wordWrap: 'break-word' }}>General Details</div>
      <div style={{ width: 190, height: 27, textAlign: 'center', color: 'rgba(3, 4, 6, 0.80)', fontSize: 18, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 26.87, wordWrap: 'break-word' }}>Shipping & Insurance</div>
      <div style={{ width: 190, height: 27, textAlign: 'center', color: 'rgba(3, 4, 6, 0.80)', fontSize: 18, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 26.87, wordWrap: 'break-word' }}>Funding options</div>
      <div style={{ width: 190, height: 27, textAlign: 'center', color: 'rgba(3, 4, 6, 0.80)', fontSize: 18, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 26.87, wordWrap: 'break-word' }}>Payment</div> */}

    </div>


  )
}

const Circle:React.FC<{current:boolean}> = ({current}) => {
  
  return (<div>
    {current ? <div style={{ width: 50, height: 50, position: 'relative' }}>
      <div style={{ width: 50, height: 50, left: 0, top: 0, position: 'absolute', background: '#B4B4FF', borderRadius: 9999 }} />
      <div style={{ width: 32, height: 32, left: 9, top: 9, position: 'absolute', background: '#0000FF', borderRadius: 9999, border: '0px #E6E6E6 solid' }} />
    </div> :
      <div style={{ width: 34, height: 34, background: '#C0C0FF', borderRadius: 9999 }} />}
  </div>
  )
}

const Line: React.FC<{ current: boolean, text: string }> = ({ current, text }) => {
  return (
<div style={{ marginLeft: 5,padding:69,marginTop: -270,display: 'inline-flex' }}>
           {current ? <div style={{ width: 190, height: 30, textAlign: 'center', marginTop: -60, color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 29.86, wordWrap: 'break-word' }}>{text}</div>:
        <div style={{ width: 190, height: 27, textAlign: 'center', color: 'rgba(3, 4, 6, 0.80)', fontSize: 18, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 26.87, wordWrap: 'break-word' }}>{text}</div>
      }
    </div>
  )
}