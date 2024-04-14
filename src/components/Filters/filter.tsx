// import React from 'react'
// import FilterTopComponent from './filterTop/filterTopComponent'
// import RangeSlider from './typeFilter/advancedFilter'
// import GeneralFilter from './typeFilter/generalFilter'



// //app הדף הזה נטען ב
// //בו נציג את כל הקומפוננטות שלנו
// export default function Filter() {
//     return (
//         <>
//             <FilterTopComponent />
//         </>
//     )
// }





//ניסוי
import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  width: 200,
  height: 42,

  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    '&::before, &::after': {
      content: '"Lab"',
      position: 'absolute',
      top: 16,
      transform: 'translateY(-50%)',
      //   width: 200,
      height: 16,
      fontColor:'black'
    },
    '&::before': {
      //   backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
      //     theme.palette.getContrastText(theme.palette.primary.main),
      //   )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      context: ' theme.palette.getContrastText(Natural),',
      left: 20,

    },
    '&::after': {
      //   backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
      //     theme.palette.getContrastText(theme.palette.primary.main),
      //   )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      context: ' theme.palette.getContrastText(Natural),',
      right: 20,
      
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 22,
    height: 22,
    margin: 1,
    
  },
}));

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: '10vw',
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(8.35vw)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        // backgroundColor: theme.palette.mode === 'dark' ? 'red' : 'blue',
        backgroundColor: 'blue',
        label: theme.palette.mode === 'dark' ? 'bad' : 'good',
        context: ' theme.palette.getContrastText(Natural),',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    // '&.Mui-disabled .MuiSwitch-thumb': {
    //   color:
    //     theme.palette.mode === 'light'
    //       ? theme.palette.grey[100]
    //       : theme.palette.grey[600],
    // },

    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? 'blue' : 'blue',
    context: theme.palette.mode === 'dark' ? 'bad' : 'good',

    // bacgroundColor:'blue',
    label: theme.palette.mode === 'dark' ? 'good' : 'bad',
    opacity: 1,
    transition: theme.transitions.create(['label'], {
      duration: 500, 
    }),
  },
})); 


export default function Filter() {
  return (
    <FormGroup style={{ margin: 'auto' }}>
      <FormControlLabel
        control={<Android12Switch defaultChecked />}
        label="Android 12"
      />
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label="iOS style"
      />

    </FormGroup>
  );
}


