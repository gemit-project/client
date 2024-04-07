import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { User } from "../Types/User";
import 'sharetribe-flex-sdk';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { InputAdornment, IconButton, createTheme, Select, MenuItem, Dialog } from '@mui/material';
import { sdk } from '../config/sharetribeSDK.config';
import { Outlet, useNavigate } from 'react-router';
import { useState } from 'react';
import diamond from "../assets/icons/app-icons/diamond.svg";
import gemit from "../assets/icons/app-icons/gemit.svg";
import MuiPhoneNumber from 'material-ui-phone-number';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../app/slices/UserSlice';
import InputLabel from '@mui/material/InputLabel';

const defaultTheme = createTheme();

export function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  //validation
  const [Errors, setErrors] = useState({ Emailerror: "Required!", PassError: "Required", FirstNameError: 'Required!!', LastNameError: "Required" })
  const [StyleErrors, setStyleErrors] = useState({ styleEmail: "red", stylePass: "red", styleFirstName: 'red', styleLastName: 'red' })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [flag, setFlag] = useState<boolean>(true);
  const [user, setUser] = useState<User>({
    firstName: '', email: '', password: '', lastName: '', displayName: '', privateData: {}, protectedData: { phoneNumber: '' }, publicData: { age: 0, type: "" }, bio: ''
  })

  const create = () => {
    sdk.currentUser.create(user, {
      expand: true
    }).then((res: any) => {
      dispatch(setCurrentUser(res.data.data))
      navigate("/Dashboard")
    }).catch((err: any) => {
      console.log(err)
    })
  }

  function convertPhoneNumber(phoneNumber: string) {
    if (phoneNumber) {
      // Remove dashes from the phone number
      const strippedPhoneNumber = phoneNumber.replace(' ', '-');
      const strippedPhone = strippedPhoneNumber.replaceAll(' ', '');
      return strippedPhone;
    }
    else return "";
  }

  //Email validation
  const validateEmail = (event: any) => {
    if (!event.target.value) {
      setErrors(
        {
          ...Errors,
          Emailerror: "Required!"
        }
      );
      setStyleErrors({
        ...StyleErrors,
        styleEmail: "red"
      });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.target.value)) {
      setErrors(
        {
          ...Errors,
          Emailerror: "Email invalid"
        }
      );
      setStyleErrors({
        ...StyleErrors,
        styleEmail: "red"
      });

    }
    else {
      setErrors({ ...Errors, Emailerror: "Correct!" });
      setStyleErrors({
        ...StyleErrors,
        styleEmail: "green"
      });
    }
    setUser({ ...user, email: (event.target.value) });

  }
  //Password validation
  const validatePass = (event: any) => {
    var passw = /^[A-Za-z0-9!-*]\w{7,256}$/;
    if (event.target.value.match(passw)) {
      setErrors({ ...Errors, PassError: 'Correct!' });
      setStyleErrors({
        ...StyleErrors,
        stylePass: "green"
      });
      setUser({ ...user, password: event.target.value })
    }
    else {
      setErrors({ ...Errors, PassError: 'Wrong...!! password password between 8 to 256 characters which contain any characters!!!' })
      setStyleErrors({
        ...StyleErrors,
        stylePass: "red"
      });
    }
  }

  return (
    <>
      <Dialog open={flag}>
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <circle className='pic'>
                <img src={gemit} style={{ width: "53px", height: "25px" }}></img>
                <img src={diamond} style={{ width: "80px", height: "50px" }}></img>
              </circle>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  color={StyleErrors.styleEmail == 'red' ? 'error' : 'success'}
                  onChange={(e) => validateEmail(e)}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  required
                  color={StyleErrors.stylePass == 'red' ? 'error' : 'success'}
                  sx={{ color: StyleErrors.styleEmail }}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" >
                        <IconButton
                          aria-label="toggl"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  label="Password"
                  onChange={(e) => { validatePass(e) }}
                />
                {StyleErrors.stylePass == 'red' && <small style={{ color: StyleErrors.stylePass }}>{Errors.PassError}</small>}
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  label="Age"
                  required
                  fullWidth
                  defaultValue={''}
                  onChange={(e) => { setUser({ ...user, publicData: { ...user.publicData, type: e.target.value } }) }}

                >
                  <MenuItem value={'Buyer'}>Buyer</MenuItem>
                  <MenuItem value={'Vendor'}>Vendor</MenuItem>
                </Select>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="first Name"
                  name="firstName"
                  onChange={(e) => {
                    setUser({ ...user, firstName: e.target.value })
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="last Name"
                  name="lastName"

                  onChange={(e) => { setUser({ ...user, lastName: e.target.value }) }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="displayName"
                  label="display Name"
                  name="displayName"
                  onChange={(e) => { setUser({ ...user, displayName: e.target.value }) }}
                  value={user?.displayName}
                />
                <MuiPhoneNumber variant='outlined' fullWidth defaultCountry={'us'} onChange={(e: any) => { }}
                  onBlur={(e: any) => { setUser({ ...user, protectedData: { phoneNumber: convertPhoneNumber(e.target.value) } }) }} />
                <TextField
                  margin="normal"
                  fullWidth
                  id="age"
                  label="age"
                  name="age"
                  type="number"
                  onChange={(e) => { setUser({ ...user, publicData: { ...user.publicData, age: parseInt(e.target.value) } }) }}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="bio"
                  label="bio"
                  name="bio"
                  onChange={(e) => { setUser({ ...user, bio: e.target.value }) }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={create}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Dialog>
      <Outlet></Outlet>
    </>);
}