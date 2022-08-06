import React from 'react';

import { Box, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { StyledAppBar, StyledButton, StyledToolbar } from './styles';

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
                <Container>
                    <StyledToolbar>
                        <img src={logo} alt="logo" />
                        {isUserAuth ? (
                            <NavLink to="/profile" className={s.userDescrLink}>
                                <span className={s.userName}>{userName}</span>
                                <UserPhoto variant="small" />
                            </NavLink>
                        ) : (
                            <StyledButton variant="contained">Sign in</StyledButton>
                        )}
                    </StyledToolbar>
                </Container>
            </StyledAppBar>
        </Box>
    );
};
