import React, { useEffect } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import s from './Profile.module.css';

import { Title } from 'components/title/Title';
import { UserDescription } from 'components/userDescription/UserDescription';
import { UserPhoto } from 'components/userPhoto/UserPhoto';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { logout } from 'store/middlewares/auth/logout';
import { updateUser } from 'store/middlewares/auth/updateUser';
import { selectIsUserAuth } from 'store/selectors/selectIsUserAuth/selectIsUserAuth';
import { ReturnComponentType } from 'types';

export const Profile = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const userName = useTypedSelector(state => state.auth.userData.name);
    const userEmail = useTypedSelector(state => state.auth.userData.email);

    const editUserNameHandler = (newUSerName: string): void => {
        const newUserData = {
            userName: newUSerName,
            userPhoto: '', // заглушка. Позже доделать добавление фото
        };

        dispatch(updateUser(newUserData));
    };

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
                <UserDescription
                    userName={userName}
                    userEmail={userEmail}
                    callback={editUserNameHandler}
                />
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
