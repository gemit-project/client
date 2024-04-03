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
import { useParams, useNavigate } from 'react-router-dom'
import { Routing } from '../utils/routing';

export const PasswordReset = (props: any) => {

    const [flag, setFlag] = useState<boolean>(true);
    const params = useParams();
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState("");

    function savePassword() {
        sdk.passwordReset.reset({
            email: params["email"],
            passwordResetToken: params["token"],
            newPassword: newPassword
        }, {}).then((res: any) => {
            navigate("Dashboard")
        });
    }

    return <>
        <Dialog open={flag}>
            <DialogTitle>Password Reset</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Put yuor new Password
                </DialogContentText>
                <TextField
                    fullWidth
                    required
                    label="New Password"
                    onChange={(e) => setNewPassword(e.target.value)}
                >
                </TextField>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={savePassword}
                >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    </>
}

