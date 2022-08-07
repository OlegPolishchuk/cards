import React, { ChangeEvent, useState } from 'react';

import { TextField } from '@mui/material';
import { useParams } from 'react-router-dom';

import s from './SetNewPassword.module.scss';

import { StyledButton } from 'components/header/styles';
import { Title } from 'components/title/Title';
import { useVisibility } from 'hooks/useVisibility/useVisibility';
import { ReturnComponentType } from 'types';

export const SetNewPassword = (): ReturnComponentType => {
    const { token } = useParams();

    const [value, setValue] = useState('');

    const [visible, visibility] = useVisibility(false);

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.currentTarget.value);
    };

    console.log(token);

    return (
        <div className={s.wrapper}>
            <Title title="Create new password" />
            <TextField
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
            <div>
                <span className={s.tooltip}>
                    Create new password and we will send you further instructions to email
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
        </div>
    );
};
