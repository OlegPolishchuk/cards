import React from 'react';

import {
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import s from './SignIn.module.css';

import { FormBottomText } from 'components/formBottomText/FormBottomText';
import { EMAIL_REG_EXP } from 'constants/formRules';
import { useVisibility } from 'hooks/useVisibility/useVisibility';
import { ReturnComponentType } from 'types';

type FormType = {
    email: string;
    password: string;
};

export const SignIn = (): ReturnComponentType => {
    const [visible, visibility] = useVisibility(false);
    const inputType = visibility ? 'text' : 'password';

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
