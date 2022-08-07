import React from 'react';

import { useNavigate } from 'react-router-dom';

import emailImg from '../../assets/images/email.svg';

import s from './CheckEmail.module.scss';

import { StyledButton } from 'components/header/styles';
import { Title } from 'components/title/Title';
import { useTypedSelector } from 'hooks';
import { selectUserEmailForCheck } from 'store/selectors/selectUserEmailForCheck/selectUserEmailForCheck';
import { ReturnComponentType } from 'types';

export const CheckEmail = (): ReturnComponentType => {
    const navigate = useNavigate();

    const userEmailForCheck = useTypedSelector(selectUserEmailForCheck);

    const style = {
        background: `url(${emailImg}) center no-repeat`,
    };

    const redirectHandler = (): void => {
        navigate('/login');
    };

    return (
        <div className={s.wrapper} style={style}>
            <div>
                <Title title="Check Email" />
                <span className={s.tooltip}>
                    We’ve sent an Email with instructions to {userEmailForCheck}
                </span>
            </div>
            <StyledButton
                variant="contained"
                color="primary"
                style={{ marginTop: '60px' }}
                className={s.btn}
                onClick={redirectHandler}
            >
                Back to login
            </StyledButton>
        </div>
    );
};
