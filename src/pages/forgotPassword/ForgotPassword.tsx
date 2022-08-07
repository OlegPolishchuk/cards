import React, { ChangeEvent, useState } from 'react';

import { TextField } from '@mui/material';

import s from './ForgotPassword.module.scss';

import { CheckEmail } from 'components/checkEmail/CheckEmail';
import { FormBottomText } from 'components/formBottomText/FormBottomText';
import { Title } from 'components/title/Title';
import { EMAIL_REG_EXP } from 'constants/formRules';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { forgotPassword } from 'store/middlewares/auth/forgotPassword';
import { selectIsEmailSend } from 'store/selectors/selectIsEmailSend/selectIsEmailSend';
import { ReturnComponentType } from 'types';

const btnTitle = 'Send instructions';
const redirectUrl = '/login';
const tooltipText = 'Did you remember your password ?';
const redirectLinkText = 'Try to log in';

export const ForgotPassword = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const isEmailSend = useTypedSelector(selectIsEmailSend);

    const [value, setValue] = useState('');
    const [validEmail, setValidEmail] = useState(checkMail(value, EMAIL_REG_EXP));
    const [label, setLabel] = useState('Email');
    const [error, setError] = useState(false);

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.currentTarget.value);
        setValidEmail(() => checkMail(value, EMAIL_REG_EXP));
    };

    function checkMail(mail: string, regExp: RegExp): boolean {
        return regExp.test(mail);
    }

    const sendHandler = (): void => {
        if (validEmail || checkMail(value, EMAIL_REG_EXP)) {
            dispatch(forgotPassword(value));
        } else {
            setError(true);
            setLabel('Invalid email');
        }
    };

    if (isEmailSend) {
        return <CheckEmail />;
    }

    return (
        <div className={s.wrapper}>
            <Title title="Forgot password ?" />
            <span className={s.tooltip}>
                Enter your email address and we will send you further instructions
            </span>
            <TextField
                variant="standard"
                value={value}
                label={label}
                required
                onChange={onChangeInputHandler}
                error={error}
            />
            <FormBottomText
                btnTitle={btnTitle}
                redirectUrl={redirectUrl}
                tooltipText={tooltipText}
                redirectLinkText={redirectLinkText}
                callback={sendHandler}
            />
        </div>
    );
};
