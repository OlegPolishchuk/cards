import React from 'react';

import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { StyledAppBar, StyledButton } from './styles';

import logo from 'assets/images/logo.svg';
import s from 'components/header/Header.module.scss';
import { UserPhoto } from 'components/userPhoto/UserPhoto';
import { useTypedSelector } from 'hooks';
import { selectIsUserAuth, selectUserName } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const userName = useTypedSelector(selectUserName);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledAppBar position="static">
                <div className={s.container}>
                    <img src={logo} alt="logo" />
                    {isUserAuth ? (
                        <NavLink to="/profile" className={s.userDescrLink}>
                            <span className={s.userName}>{userName}</span>
                            <UserPhoto variant="small" />
                        </NavLink>
                    ) : (
                        <StyledButton variant="contained">Sign in</StyledButton>
                    )}
                </div>
            </StyledAppBar>
        </Box>
    );
};
