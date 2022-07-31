import React, { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
    FormControl,
    FormGroup,
    Grid,
    IconButton,
    TextField,
    Typography,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

import s from './SignUp.module.css';

import { FormBottomText } from 'components/formBottomText/FormBottomText';
import { ReturnComponentType } from 'types';

type FormType = {
    email: string;
    password: string;
    confirmPassword: string;
};

export const SignUp = (): ReturnComponentType => {
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

    const onSubmit: SubmitHandler<FormType> = data => console.log(data);

    return (
        <Grid container justifyContent="center">
            <Grid item justifyContent="center">
                <div className={s.wrapper}>
                    <Typography variant="h4" component="div">
                        Sign Up
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl fullWidth>
                            <FormGroup>
                                <TextField
                                    variant="standard"
                                    label="Email"
                                    margin="normal"
                                    {...(register('email'), { require })}
                                />
                                {errors.email && (
                                    <p className={s.error}>Email is required</p>
                                )}
                                <TextField
                                    variant="standard"
                                    type={`${visibility ? 'text' : 'password'}`}
                                    label="Password"
                                    margin="normal"
                                    InputProps={{
                                        endAdornment: visible,
                                    }}
                                    {...(register('password'), { require })}
                                />
                                {errors.password && <p>Password is required</p>}
                                <TextField
                                    {...register('confirmPassword')}
                                    variant="standard"
                                    type={`${visibility ? 'text' : 'password'}`}
                                    label="Confirm Password"
                                    margin="normal"
                                    InputProps={{
                                        endAdornment: visible,
                                    }}
                                />
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
