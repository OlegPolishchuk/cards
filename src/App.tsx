import React from 'react';

import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header, Links } from 'components';
import { Progress } from 'components/circularProgress/Progress';
import { REQUEST_STATUS } from 'enums';
import { useTypedSelector } from 'hooks';
import {
    ForgotPassword,
    NotFound,
    PasswordRecovery,
    Profile,
    Registration,
    SignIn,
} from 'pages';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    const status = useTypedSelector(state => state.app.status);

    return (
        <BrowserRouter>
            <Header />
            <Container fixed>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="login" element={<SignIn />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="password_recovery" element={<PasswordRecovery />} />
                    <Route path="enter_new_password" element={<ForgotPassword />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
            <Links />
            {status === REQUEST_STATUS.LOADING && <Progress />}
        </BrowserRouter>
    );
};

export default App;
