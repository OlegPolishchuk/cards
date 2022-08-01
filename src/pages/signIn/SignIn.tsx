import React, { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    TextField,
    Typography,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import s from './SignIn.module.css';

import { FormBottomText } from 'components/formBottomText/FormBottomText';
import { EMAIL_REG_EXP } from 'constants/formRules';
import { ReturnComponentType } from 'types';

type FormType = {
    email: string;
    password: string;
};

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

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormType>({ mode: 'onBlur' });

    const onSubmit: SubmitHandler<FormType> = data => {
        console.log(data);
    };

    return (
        <Grid container justifyContent="center">
            <Grid item justifyContent="center">
                <div className={s.wrapper}>
                    <Typography variant="h4" component="div">
                        Sign in
                    </Typography>
                    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                        <FormControl fullWidth>
                            <TextField
                                variant="standard"
                                label="Email"
                                margin="normal"
                                {...register('email', {
                                    required: true,
                                    pattern: {
                                        value: EMAIL_REG_EXP,
                                        message: 'Not valid email',
                                    },
                                })}
                            />
                            <p className={s.error}>
                                {errors?.email && (errors.email.message || 'Required')}
                            </p>
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                variant="standard"
                                type={`${visibility ? 'text' : 'password'}`}
                                label="Password"
                                margin="normal"
                                InputProps={{
                                    endAdornment: visible,
                                }}
                                {...register('password', {
                                    required: true,
                                    minLength: {
                                        value: 8,
                                        message: 'Min length is 8',
                                    },
                                })}
                            />
                            <p className={s.error}>
                                {errors?.password &&
                                    (errors.password.message || 'Required')}
                            </p>
                        </FormControl>
                        <FormControl fullWidth>
                            <FormControlLabel
                                label="Remember me"
                                checked
                                control={<Checkbox />}
                            />
                        </FormControl>
                        <NavLink className={s.forgotPassLink} to="/enter_new_password">
                            Forgot password?
                        </NavLink>

                        <FormBottomText
                            btnTitle="Sign In"
                            tooltipText={"Don't have an account ?"}
                            redirectUrl="/registration"
                            redirectLinkText="Sign Up"
                        />
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};
