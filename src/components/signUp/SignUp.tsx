import React, { useState } from 'react';

import { FormControl, Grid, TextField, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { FormBottomText } from 'components/formBottomText/FormBottomText';
import s from 'components/signUp/SignUp.module.scss';
import { EMAIL_REG_EXP } from 'constants/formRules';
import { useAppDispatch } from 'hooks';
import { useVisibility } from 'hooks/useVisibility/useVisibility';
import { registerUserTC } from 'store/middlewares/auth/registerUserTC';
import { ReturnComponentType } from 'types';

type FormType = {
    email: string;
    password: string;
    confirmPassword: string;
};

export const SignUp = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [visible, visibility] = useVisibility(false);
    const [passError, setPassError] = useState('');
    const inputType = visibility ? 'text' : 'password';

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormType>({ mode: 'onBlur' });

    const onSubmit: SubmitHandler<FormType> = data => {
        if (data.password === data.confirmPassword) {
            dispatch(registerUserTC({ email: data.email, password: data.password }));
            reset();
            navigate('/login');
        } else {
            setPassError('passwords do not match');
        }
    };

    return (
        <Grid container justifyContent="center">
            <Grid item justifyContent="center">
                <div className={s.wrapper}>
                    <Typography variant="h4" component="div">
                        Sign Up
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl fullWidth className={s.inputBox}>
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
                        <FormControl fullWidth className={s.inputBox}>
                            <TextField
                                variant="standard"
                                type={inputType}
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
                                    (errors.password.message || 'Require')}
                            </p>
                        </FormControl>
                        <FormControl fullWidth className={s.inputBox}>
                            <TextField
                                {...register('confirmPassword')}
                                variant="standard"
                                type={inputType}
                                label="Confirm Password"
                                margin="normal"
                                InputProps={{
                                    endAdornment: visible,
                                }}
                            />
                            <p className={s.error}>{passError}</p>
                        </FormControl>
                        <FormBottomText
                            btnTitle="Sign Up"
                            tooltipText={"Don't have an account ?"}
                            redirectUrl="/login"
                            redirectLinkText="Sign In"
                        />
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};
