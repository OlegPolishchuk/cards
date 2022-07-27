import React, { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
    TextField,
    Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import s from './SignIn.module.css';

import { FormBottomText } from 'components/formBottomText/FormBottomText';
import { ReturnComponentType } from 'types';

export const SignIn = (): ReturnComponentType => {
    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = (flag: boolean): void => {
        setVisibility(flag);
    };

    const visible = visibility ? (
        <IconButton aria-label="visibility" onClick={() => toggleVisibility(false)}>
            <VisibilityIcon />
        </IconButton>
    ) : (
        <IconButton aria-label="visibilityOff" onClick={() => toggleVisibility(true)}>
            <VisibilityOffIcon />
        </IconButton>
    );

    return (
        <Grid container justifyContent="center">
            <Grid item justifyContent="center">
                <div className={s.wrapper}>
                    <Typography variant="h4" component="div">
                        Sign in
                    </Typography>
                    <form className={s.form}>
                        <FormControl fullWidth>
                            <FormGroup>
                                <TextField
                                    variant="standard"
                                    label="Email"
                                    margin="normal"
                                />
                                <TextField
                                    variant="standard"
                                    type={`${visibility ? 'text' : 'password'}`}
                                    label="Password"
                                    margin="normal"
                                    InputProps={{
                                        endAdornment: visible,
                                    }}
                                />
                                <FormControlLabel
                                    label="Remember me"
                                    checked
                                    control={<Checkbox />}
                                />
                                <NavLink
                                    style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        textAlign: 'right',
                                        marginTop: '9px',
                                    }}
                                    to="/enter_new_password"
                                >
                                    Forgot password?
                                </NavLink>
                            </FormGroup>
                        </FormControl>
                        <FormBottomText
                            btnTitle="Sign In"
                            tooltipText={"Don't have an account ?"}
                            redirectUrl="registration"
                            redirectLinkText="Sign Up"
                        />
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};
