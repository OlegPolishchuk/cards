import React from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Button, Container } from '@mui/material';

import s from './Profile.module.css';

import { Title } from 'components/title/Title';
import { UserDescription } from 'components/userDescription/UserDescription';
import { UserPhoto } from 'components/userPhoto/UserPhoto';
import { ReturnComponentType } from 'types';

export const Profile = (): ReturnComponentType => {
    const editUserPhotoHandler = (): void => {
        console.log('some action');
    };

    return (
        <Container maxWidth="sm">
            <Box className={s.wrapper}>
                <Title title="Personal information" />
                <UserPhoto variant="standard" isEdit callback={editUserPhotoHandler} />
                <UserDescription />
                <Button variant="outlined" startIcon={<LogoutIcon />}>
                    Logout
                </Button>
            </Box>
        </Container>
    );
};
