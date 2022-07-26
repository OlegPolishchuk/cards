import React from 'react';

import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { StyledAppBar, StyledButton } from './styles';

import s from 'components/header/Header.module.scss';
import { UserPhoto } from 'components/userPhoto/UserPhoto';
import { useTypedSelector } from 'hooks';
import { selectIsUserAuth, selectUserName } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const userName = useTypedSelector(selectUserName);
    const userPhoto = useTypedSelector(state => state.auth.userData.avatar);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledAppBar position="static">
                <div className={s.container}>
                    {isUserAuth ? (
                        <NavLink to="/profile" className={s.userDescrLink}>
                            <span className={s.userName}>{userName}</span>
                            <UserPhoto photo={userPhoto || ''} variant="small" />
                        </NavLink>
                    ) : (
                        <StyledButton variant="contained">Sign in</StyledButton>
                    )}
                </div>
            </StyledAppBar>
        </Box>
    );
};
