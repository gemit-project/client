import {
  Box,
  Button,
  Container,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../app/slices/UserSlice";
import { sdk } from "../config/sharetribeSDK.config";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Edit } from "@mui/icons-material";
import { ChangeImage } from "./AddOrChangeImage";

const defaultTheme = createTheme();

export const Profil = (props: any) => {
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const [file, setfile] = useState<any>();
  const [user, setUser] = useState({
    firstName: currentUser.data?.attributes.profile.firstName,
    lastName: currentUser.data?.attributes.profile.lastName,
    displayName: currentUser.data?.attributes.profile.displayName,
    privateData: currentUser.data?.attributes.profile.privateData,
    protectedData: currentUser.data?.attributes.profile.protectedData,
    publicData: currentUser.data?.attributes.profile.publicData,
    bio: currentUser.data?.attributes.profile.bio,
  });
  const dispatch = useDispatch();
  const [flagImage, setFlagImage] = useState<boolean>(false);
  const [flagEmail, setFlagEmail] = useState<boolean>(true);
  const [ff, setF] = useState<boolean>(true);
  const { flagD, setFlegD } = props;
  const [email, setEmail] = useState<string>("");
  const [password, setaPssword] = useState<string>("");

  const changeEmail = (e: any) => {
    sdk.currentUser
      .changeEmail(
        {
          currentPassword: password,
          email: email,
        },
        {
          expand: true,
        },
        {
          expand: true,
          include: ["profileImage"],
        }
      )
      .then((res: any) => {
        dispatch(setCurrentUser(res.data));
      });
  };

  const saveProfil = () => {
    sdk.currentUser
      .updateProfile(user, {
        expand: true,
        include: ["profileImage"],
      })
      .then((res: any) => {
        dispatch(setCurrentUser(res.data));
        setF((ff) => !ff);
      });
  };

  return (
    <>
      <Dialog
        open={flagD}
        sx={{
          width: "auto",
          boxShadow: "8px 8px 16px 0px rgba(0, 0, 255, 0.15)",
        }}
      >
        <DialogTitle>
          <IconButton
            aria-label="close"
            onClick={() => setFlegD(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 2,
              fontSize: "15px",
            }}
          >
            Back
            <ArrowForwardIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <ThemeProvider theme={defaultTheme}>
            <Container>
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "apx",
                  width: "400px",
                  zIndex: 20,
                  flexShrink: 0,
                  border: "3px darkblue solid ",
                  borderRadius: "10%",
                }}
                boxShadow={"revert"}
              >
                <button
                  onClick={() => {
                    setFlagImage((flagImage)=>!flagImage);
                  }}
                >
                  <img
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "90%",
                    }}
                    src={
                      currentUser.included
                        ? currentUser.included[0].attributes.variants.default
                            .url
                        : ""
                    }
                    className="imag"
                    alt="Change"
                  ></img>
                </button>
                <h6>{currentUser.data?.attributes.profile.displayName}</h6>
                <TextField
                  variant="standard"
                  disabled={flagEmail}
                  id="Email"
                  label="Email"
                  defaultValue={currentUser.data?.attributes.email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggl"
                          onClick={() =>
                            setFlagEmail((flagEmail) => !flagEmail)
                          }
                          edge="end"
                        >
                          <Edit />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {!flagEmail && (
                  <Box>
                    <TextField
                      variant="standard"
                      disabled={flagEmail}
                      id="password"
                      label="password"
                      onChange={(e) => {
                        setaPssword(e.target.value);
                      }}
                    />
                    <button disabled={flagEmail} onClick={changeEmail}>
                      save email
                    </button>
                  </Box>
                )}
                <Typography
                  component="h1"
                  variant="h3"
                  sx={{ color: "darkblue" }}
                >
                  Profil
                </Typography>
                <IconButton
                  aria-label="edit"
                  size="large"
                  onClick={() => setF((ff) => !ff)}
                  sx={{ color: !ff ? "primary" : "green" }}
                >
                  <Edit />
                </IconButton>
                <br />
                <br />
                <TextField
                  variant="standard"
                  disabled={ff}
                  id="outlined-disabled"
                  label="displayName"
                  defaultValue={user.displayName}
                  onChange={(e) => {
                    setUser({ ...user, displayName: e.target.value });
                  }}
                />
                <TextField
                  variant="standard"
                  disabled={ff}
                  id="firstName"
                  label="firstName"
                  defaultValue={user.firstName}
                  onChange={(e) => {
                    setUser({ ...user, firstName: e.target.value });
                  }}
                />
                <TextField
                  variant="standard"
                  disabled={ff}
                  id="lastName"
                  label="lastName"
                  defaultValue={user.lastName}
                  onChange={(e) => {
                    setUser({ ...user, lastName: e.target.value });
                  }}
                />{" "}
                <TextField
                  variant="standard"
                  disabled={ff}
                  id="bio"
                  label="bio"
                  defaultValue={user.bio}
                  onChange={(e) => {
                    setUser({ ...user, bio: e.target.value });
                  }}
                />{" "}
                <TextField
                  variant="standard"
                  disabled={ff}
                  id="age"
                  label="age"
                  defaultValue={user?.publicData.age}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      publicData: { ...user?.publicData, age: e.target.value },
                    });
                  }}
                />{" "}
                <TextField
                  variant="standard"
                  disabled={ff}
                  id="phoneNumber"
                  label="phoneNumber"
                  defaultValue={user?.protectedData.phoneNumber}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      protectedData: {
                        ...user.protectedData,
                        phoneNumber: e.target.value,
                      },
                    });
                  }}
                />
              </Box>
            </Container>
          </ThemeProvider>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={ff}
            sx={{
              position: "absolute",
              left: 8,
              right: 8,
            }}
            onClick={saveProfil}
          >
            save changes
          </Button>
        </DialogActions>
      </Dialog>
      {flagImage && <ChangeImage flag={flagImage} setFlag={setFlagImage}/>}
    </>
  );
};
