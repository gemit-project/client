import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import 'sharetribe-flex-sdk';
import {  Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle } from '@mui/material';
import { sdk } from '../config/sharetribeSDK.config';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

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

