import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material';
import { LogInUser } from "../Types/LoginUser";
import 'sharetribe-flex-sdk';
import { VisibilityOff, Visibility, ArrowForwardIos } from '@mui/icons-material';
import { InputAdornment, IconButton, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle } from '@mui/material';
import { sdk } from '../config/sharetribeSDK.config';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import diamond from "../assets/icons/app-icons/diamond.svg";
import gemit from "../assets/icons/app-icons/gemit.svg";
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../app/slices/UserSlice';
import { Link } from '@mui/material';
import { PasswordReset } from './ResetPassword';
import { useEffect } from 'react';

const defaultTheme = createTheme();

export default function SignIn() {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [myUser, setUser] = useState<LogInUser>({ email: "", pass: "" });
  const [flag, setFlag] = useState<boolean>(true);
  const [dissable, setDissable] = useState<boolean>(false);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sdk.login({ username: myUser.email, password: myUser.pass })
      .then(() => {
        console.log("Login successful.");
        sdk.currentUser.show({
          expand: true,
          include: ["profileImage"]
        }).then((res: any) => {
          console.log(res)
          dispatch(setCurrentUser(res.data))
          setFlag(false)
          navigate("Dashboard")
        });
      })
      .catch((error: any) => {
        console.log("you have to register");
        setFlag(true)
        navigate("Register")
      });
  };
  //Email Validation
  function validateEmail(event: any) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.target.value)) {
      setDissable(false)
    }
    else {
      setUser({ ...myUser, email: event.target.value })
    }
  }
  //Password validation
  const validatePass = (event: any) => {
    var passw =  /^(?=.*[0-9a-zA-Z])[\w\d\W]{8,256}$/;
    if (event.target.value.match(passw)) {     
        setDissable(true)
        setUser({ ...myUser, pass: event.target.value })     
    }
    else {
      if (dissable)
        setDissable(false)
    }
  }
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  function resetPassword() {

    sdk.passwordReset.request({
      email: myUser.email
    }, {}).then((res: any) => {
      console.log(res)
      alert(`we sent  an email to ${myUser.email}`)
    });

  }
  return (
    <>
      <Dialog
        fullWidth
        open={flag}
      >
        <DialogContent>
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" onSubmit={handleSubmit}>
              <CssBaseline />
              <Box
                sx={{
                  margin: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  border: '3px darkblue solid',
                }}
                boxShadow={'revert'}
              >
                <circle className='pic'>
                  <img src={gemit} style={{ width: "53px", height: "25px" }}></img>

                  <img src={diamond} style={{ width: "80px", height: "50px" }}></img>
                </circle>
                <Typography component="h1" variant="h5" sx={{ color: 'darkblue' }}>
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
                    onChange={(e) => { validateEmail(e) }}
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
                            sx={{ color: 'darkblue' }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    label="Password"
                    onChange={(e) => validatePass(e)}
                  />
                  <Link onClick={resetPassword}>Forgot Password?</Link>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: "blueviolet" }}
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
      <Outlet></Outlet>

    </>);

}


