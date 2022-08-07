import React, { useEffect } from 'react';

import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header, Links } from 'components';
import { Progress } from 'components/circularProgress/Progress';
import { SetNewPassword } from 'components/setNewPassword/SetNewPassword';
import { SnackBar } from 'components/snackBar/SnackBar';
import { REQUEST_STATUS } from 'enums';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { ForgotPassword, NotFound, Profile, Registration, SignIn } from 'pages';
import { initializeApp } from 'store/middlewares/app/initializeApp';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    const dispatch = useAppDispatch();
    const status = useTypedSelector(state => state.app.status);

    useEffect(() => {
        dispatch(initializeApp());
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Container fixed>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="login" element={<SignIn />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="password_recovery/:token" element={<SetNewPassword />} />
                    <Route path="enter_new_password" element={<ForgotPassword />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
            <Links />
            <SnackBar />
            {status === REQUEST_STATUS.LOADING && <Progress />}
        </BrowserRouter>
    );
};

export default App;
