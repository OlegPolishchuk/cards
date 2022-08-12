import React, { ChangeEvent, useEffect, useState } from 'react';

import { TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import s from './SetNewPassword.module.scss';

import { StyledButton } from 'components/header/styles';
import { Title } from 'components/title/Title';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { useVisibility } from 'hooks/useVisibility/useVisibility';
import { setNewPasswordTC } from 'store/middlewares';
import { selectIsPasswordChanged } from 'store/selectors/selectIsPasswordChanged/selectIsPasswordChanged';
import { ReturnComponentType } from 'types';

const TIME_TO_REDIRECT = 5000;
const TIMER_STEP = 1000;

export const SetNewPassword = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const { token } = useParams();

    const navigate = useNavigate();

    const isPasswordChanged = useTypedSelector(selectIsPasswordChanged);

    const [value, setValue] = useState('');
    const [time, setTime] = useState(TIME_TO_REDIRECT);

    const [visible, visibility] = useVisibility(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<{ password: string }>({ mode: 'onBlur' });

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.currentTarget.value);
    };

    const onSubmit: SubmitHandler<{ password: string }> = data => {
        if (token) {
            dispatch(setNewPasswordTC(data.password, token));
        }
        reset();
    };

    useEffect(() => {
        const intervalID = setInterval(() => {
            if (isPasswordChanged) {
                setTime(time - TIMER_STEP);
            }
        }, TIMER_STEP);

        if (isPasswordChanged && time / TIMER_STEP === -1) {
            clearInterval(intervalID);
            navigate('/login');
        }

        return () => {
            clearInterval(intervalID);
        };
    }, [isPasswordChanged, time, navigate]);

    if (isPasswordChanged) {
        return (
            <div className={s.wrapper}>
                <Title title="Password changed successful" />
                <StyledButton variant="contained" color="primary" className={s.btn}>
                    To Login
                </StyledButton>
                <p className={s.tooltip}>
                    You will be redirected to Login in <span>{time / TIMER_STEP}</span>{' '}
                    second
                </p>
            </div>
        );
    }

    return (
        <div className={s.wrapper}>
            <Title title="Create new password" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register('password', {
                        required: {
                            value: true,
                            message: 'Required',
                        },
                        minLength: {
                            value: 8,
                            message: 'Min length is 8',
                        },
                    })}
                    className={s.passwordInput}
                    type={`${visibility ? 'text' : 'password'}`}
                    variant="standard"
                    value={value}
                    label="Password"
                    required
                    onChange={onChangeInputHandler}
                    InputProps={{
                        endAdornment: visible,
                    }}
                />
                <p className={s.error}>{errors?.password && errors.password.message}</p>
                <div>
                    <span className={s.tooltip}>
                        Create new password and we will send you further instructions to
                        email
                    </span>
                    <StyledButton
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={s.btn}
                    >
                        Create new password
                    </StyledButton>
                </div>
            </form>
        </div>
    );
};
