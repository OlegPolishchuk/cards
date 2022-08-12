import React, { useEffect } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { BreadCrumbs } from 'components/breadCrumbs/BreadCrumbs';
import { Title } from 'components/title/Title';
import { UserDescription } from 'components/userDescription/UserDescription';
import { UserPhoto } from 'components/userPhoto/UserPhoto';
import { useAppDispatch, useTypedSelector } from 'hooks';
import s from 'pages/profile/Profile.module.scss';
import { logoutTC } from 'store/middlewares/auth/logoutTC';
import { updateUserTC } from 'store/middlewares/auth/updateUserTC';
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

        dispatch(updateUserTC(newUserData));
    };

    const editUserPhotoHandler = (): void => {
        console.log('some action');
    };

    const logoutHandler = (): void => {
        dispatch(logoutTC());
    };

    useEffect(() => {
        if (!isUserAuth) {
            navigate('/login');
        }
    });

    return (
        <>
            <BreadCrumbs linkTo="packs" spanText="Back to Packs list" />
            <Container maxWidth="sm">
                <Box className={s.wrapper}>
                    <Title title="Personal information" />
                    <UserPhoto
                        variant="standard"
                        isEdit
                        callback={editUserPhotoHandler}
                    />
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
        </>
    );
};
