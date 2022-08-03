import React, { useEffect } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import s from './Profile.module.css';

import { Title } from 'components/title/Title';
import { UserDescription } from 'components/userDescription/UserDescription';
import { UserPhoto } from 'components/userPhoto/UserPhoto';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { logout } from 'store/middlewares/logout';
import { ReturnComponentType } from 'types';

export const Profile = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const isUserAuth = useTypedSelector(state => state.auth.isUserAuth);

    const editUserPhotoHandler = (): void => {
        console.log('some action');
    };

    const logoutHandler = (): void => {
        dispatch(logout());
    };

    useEffect(() => {
        if (!isUserAuth) {
            navigate('/login');
        }
    });

    return (
        <Container maxWidth="sm">
            <Box className={s.wrapper}>
                <Title title="Personal information" />
                <UserPhoto variant="standard" isEdit callback={editUserPhotoHandler} />
                <UserDescription />
                <Button
                    variant="outlined"
                    startIcon={<LogoutIcon />}
                    onClick={logoutHandler}
                >
                    Logout
                </Button>
            </Box>
        </Container>
    );
};
