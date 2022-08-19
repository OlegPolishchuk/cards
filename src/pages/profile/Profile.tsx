import React from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Button, Container } from '@mui/material';
import { Navigate } from 'react-router-dom';

import { BreadCrumbs } from 'components/common/breadCrumbs/BreadCrumbs';
import { Title } from 'components/title/Title';
import { UserDescription } from 'components/userDescription/UserDescription';
import { UserPhoto } from 'components/userPhoto/UserPhoto';
import { useAppDispatch, useTypedSelector } from 'hooks';
import s from 'pages/profile/Profile.module.scss';
import { logoutTC } from 'store/middlewares/auth/logoutTC';
import { updateUserTC } from 'store/middlewares/auth/updateUserTC';
import { selectUserEmail, selectUserName } from 'store/selectors';
import { selectIsUserAuth } from 'store/selectors/auth/selectIsUserAuth/selectIsUserAuth';
import { ReturnComponentType } from 'types';

export const Profile = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const userName = useTypedSelector(selectUserName);
    const userEmail = useTypedSelector(selectUserEmail);
    const userPhoto = useTypedSelector(state => state.auth.userData.avatar);

    const editUserNameHandler = (newUSerName: string): void => {
        const newUserData = {
            userName: newUSerName,
            userPhoto: userPhoto || '',
        };

        dispatch(updateUserTC(newUserData));
    };

    const editUserPhotoHandler = (file: string): void => {
        const newUserData = {
            userName,
            userPhoto: file,
        };

        dispatch(updateUserTC(newUserData));
    };

    const logoutHandler = (): void => {
        dispatch(logoutTC());
    };

    if (!isUserAuth) {
        return <Navigate to="/login" />;
    }
    console.log(`profile rendered`);

    return (
        <>
            <BreadCrumbs linkTo="packs" spanText="Back to Packs list" />
            <Container maxWidth="sm">
                <Box className={s.wrapper}>
                    <Title title="Personal information" />
                    <UserPhoto
                        photo={userPhoto || ''}
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
