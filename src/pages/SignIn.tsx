import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ThemeProvider, createTheme } from '@mui/material';
import {LogInUser} from "../types/LogInUser";
import 'sharetribe-flex-sdk';
import { VisibilityOff, Visibility} from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { InputAdornment, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { sdk } from '../config/sharetribeSDK.config';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import diamond from "./Group (1).svg";
import gemit from "./Group.svg";
import { Register } from './Register';
import { useDispatch } from 'react-redux';
//import { setCurrentUser } from '../app/slices/UserSlice/userSlice';
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme(
);

export default function SignIn() {
  let rout=useNavigate()
 // const dispatch=useDispatch()
  const [myUser, setUser] =useState<LogInUser>({});
const[flag,setFlag]=useState<boolean>(false);
const[dissable,setDissable]=useState<boolean>(false);
const [showPassword, setShowPassword] = React.useState<boolean>(false);
const [closeSignIn,setClose]=useState<boolean>(true);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sdk.login({ username:myUser.email, password: myUser.pass})
    .then((loginRes:any) => {
      console.log("Login successful.");
      sdk.currentUser.show().then((res:any) => {
         console.log(res)
        // dispatch(setCurrentUser(res)) 
         rout("Home")
      });
     
     
    })
    .catch((error:any)=>{
      console.log("you have to register");
      setFlag(true)     
     // rout("Register")
      
    });;
  };
  //Email Validation
  function  validateEmail (event:any)  {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.target.value)) {
          setDissable(false)        
        }
        else{
          setUser({...myUser,email:event.target.value})
        }
      }
//Password validation
const validatePass = (event:any) => {
  var passw = /^[A-Za-z0-9!-*]\w{7,256}$/;

  if (event.target.value.match(passw)) {
    if(!dissable)  
      {setDissable(true)
      setUser({...myUser,pass:event.target.value})}
  }
  else {
     if(dissable)
       setDissable(false)
  }
}
const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

 function handlClose(){
  rout("Register")
  }
  return (
    <>
     <Dialog  
       fullWidth      
       open={closeSignIn}     
      >
        <DialogContent>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" onSubmit={handleSubmit}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '3px darkblue solid',           
          }}
          boxShadow={'revert'}
        >
         
          <circle className='pic'>
            <img src={gemit} style={{width:"53px",height:"25px"}}></img>
                        
            <img src={diamond} style={{width:"80px",height:"50px"}}></img>
          </circle>
          <Typography component="h1" variant="h5" sx={{color:'darkblue'}}>
            Sign in
          </Typography> 
         
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus     
                    
              onChange={(e)=>{validateEmail(e)}}
            />
        <TextField
        variant="outlined"
        fullWidth
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" >
                <IconButton
                  aria-label="toggl"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                         sx={{color:'darkblue'}}          
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
          ),
        }}
        label="Password"  
        onChange={(e)=>validatePass(e)}      
      />      
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,bgcolor:"blueviolet"}}
             disabled={!dissable}
            >
              Sign In
            </Button>
           
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </DialogContent>
    </Dialog>
    <Dialog  
       fullWidth      
        open={flag}
      >
        <DialogTitle>Sorry We Didn't Found you</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You Have To Register Or Come Back For Try Again...
          </DialogContentText>
           
         <Register isflag={false}></Register>
        </DialogContent>
        <DialogActions>
       <IconButton
          aria-label="close"
          onClick={()=>setFlag(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            fontSize:'15px'
          }}>
            Back
          <ArrowForwardIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    <Outlet></Outlet>
   
    </>
  );
  
}
