import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { User } from "../types/User";
import "sharetribe-flex-sdk";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  InputAdornment,
  IconButton,
  createTheme,
  Select,
  MenuItem,
} from "@mui/material";
import { sdk } from "../config/sharetribeSDK.config";
import { Outlet, useNavigate } from "react-router";
import { useState, useEffect } from "react";
//import MuiPhoneNumber from 'material-ui-phone-number';
import diamond from "./Group (1).svg";
import gemit from "./Group.svg";
import MuiPhoneNumber from "material-ui-phone-number";

const defaultTheme = createTheme();
export function Register(props: any) {
  let rout = useNavigate();
  const [flag, setFlag] = useState<boolean>(props.isflag);
  const [user, setUser] = useState<User>({
    firstName: "",
    email: "",
    password: "",
    lastName: "",
    displayName: "",
    privateData: {},
    protectedData: { phoneNumber: "" },
    publicData: { age: 0 },
    bio: "",
  });
  const [dissable, setDissable] = useState(false);

  const handleSubmit = () => {
    console.log("user", user);
    debugger;
    // sdk.currentUser.create(user,{
    //   expand: true
    // }).then((res: any) => {
    //   res.then(((ress:any)=>{
    //         console.log(ress)
    //         debugger

    //   })).catch((er:any)=>{
    //   debugger
    //     console.log(er)})

    //   //לשמור בסטור את היוזר הנוכחי
    //   //rout("Home")
    // })
    //   .catch((er: any) => {
    //     debugger
    //     console.log(er)
    //   });

    sdk.currentUser
      .create(
        {
          email: user.email,
          password: user.password,
          firstName: user.firstName,
          lastName: user.lastName,
          displayName: user.displayName,
          bio: user.bio,
          publicData: {
            age: user.publicData?.age,
          },
          protectedData: {
            phoneNumber: "+972-548503880",
          },
        },
        {
          expand: true,
        }
      )
      .then((res: any) => {
        debugger;
      })
      .catch((err: any) => {
        debugger;
      });
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  //validation
  const [Errors, setErrors] = useState({
    Emailerror: "Required!",
    PassError: "Required",
    FirstNameError: "Required!!",
    LastNameError: "Required",
  });
  const [StyleErrors, setStyleErrors] = useState({
    styleEmail: "red",
    stylePass: "red",
    styleFirstName: "red",
    styleLastName: "red",
  });
  const [valids, setvalids] = useState(new Array<boolean>(5));

  //Email validation
  const validateEmail = (event: any) => {
    if (!event.target.value) {
      setErrors({
        ...Errors,
        Emailerror: "Required!",
      });
      setStyleErrors({
        ...StyleErrors,
        styleEmail: "red",
      });
      setvalids([...valids, (valids[0] = false)]);
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.target.value)
    ) {
      setErrors({
        ...Errors,
        Emailerror: "Email invalid",
      });
      setStyleErrors({
        ...StyleErrors,
        styleEmail: "red",
      });
      setvalids([...valids, (valids[0] = false)]);
    } else {
      setErrors({ ...Errors, Emailerror: "Correct!" });
      setStyleErrors({
        ...StyleErrors,
        styleEmail: "green",
      });
      setvalids([...valids, (valids[0] = true)]);
    }
    setUser({ ...user, email: event.target.value });
  };
  //Password validation
  const validatePass = (event: any) => {
    var passw = /^[A-Za-z0-9!-*]\w{7,256}$/;
    if (event.target.value.match(passw)) {
      setErrors({ ...Errors, PassError: "Correct!" });
      setStyleErrors({
        ...StyleErrors,
        stylePass: "green",
      });
      setvalids([...valids, (valids[1] = true)]);
      setUser({ ...user, password: event.target.value });
    } else {
      setErrors({
        ...Errors,
        PassError:
          "Wrong...!! password password between 8 to 256 characters which contain any characters!!!",
      });
      setStyleErrors({
        ...StyleErrors,
        stylePass: "red",
      });
      setvalids([...valids, (valids[1] = false)]);
    }
  };

  function isValid(e: any) {
    if (e.target.value == "on") {
      setvalids([...valids, (valids[4] = true)]);

      var count = 0;
      for (let index = 0; index < valids.length; index++) {
        if (!valids[index]) {
          break;
        } else {
          count++;
        }
      }
      if (count == valids.length) setDissable(true);
    } else setvalids([...valids, (valids[4] = false)]);
  }

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <circle className="pic">
              <img src={gemit} style={{ width: "53px", height: "25px" }}></img>
              <img
                src={diamond}
                style={{ width: "80px", height: "50px" }}
              ></img>
            </circle>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                color={StyleErrors.styleEmail == "red" ? "error" : "success"}
                onChange={(e) => validateEmail(e)}
              />
              <TextField
                variant="outlined"
                fullWidth
                required
                color={StyleErrors.stylePass == "red" ? "error" : "success"}
                sx={{ color: StyleErrors.styleEmail }}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggl"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                label="Password"
                onChange={(e) => {
                  validatePass(e);
                }}
              />
              {StyleErrors.stylePass == "red" && (
                <small style={{ color: StyleErrors.stylePass }}>
                  {Errors.PassError}
                </small>
              )}
              <br></br>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                label="Age"
                required
                fullWidth
              >
                <MenuItem value={"Buyer"}>Buyer</MenuItem>
                <MenuItem value={"Vendor"}>Vendor</MenuItem>
              </Select>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="first Name"
                name="firstName"
                onChange={(e) => {
                  setUser({ ...user, firstName: e.target.value });
                  setvalids([...valids, (valids[2] = true)]);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="last Name"
                name="lastName"
                onChange={(e) => {
                  setUser({ ...user, lastName: e.target.value });
                  setvalids([...valids, (valids[3] = true)]);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="displayName"
                label="display Name"
                name="displayName"
                onChange={(e) => {
                  setUser({ ...user, displayName: e.target.value });
                }}
                value={user?.displayName}
              />
              <MuiPhoneNumber
                variant="outlined"
                fullWidth
                defaultCountry={"us"}
                onChange={(e: any) => {}}
                onBlur={(e: any) => {
                  setUser({
                    ...user,
                    protectedData: {
                      phoneNumber: e.currentTarget.value.replaceAll(" ", "-"),
                    },
                  });
                }}
              />
              <TextField
                margin="normal"
                fullWidth
                id="age"
                label="age"
                name="age"
                type="number"
                onChange={(e) => {
                  setUser({
                    ...user,
                    publicData: { age: parseInt(e.target.value) },
                  });
                }}
              />
              <TextField
                margin="normal"
                fullWidth
                id="bio"
                label="bio"
                name="bio"
                onChange={(e) => {
                  setUser({ ...user, bio: e.target.value });
                }}
              />
              <input
                name="ch"
                id="ch"
                type="checkbox"
                onChange={(e) => {
                  isValid(e);
                }}
              />{" "}
              I agree to the Terms of Use
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <button onClick={handleSubmit}>fffff</button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Outlet></Outlet>
    </>
  );
}
