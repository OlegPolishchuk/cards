import React, { useEffect } from 'react';

import { Container } from '@mui/material';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Header, Links } from 'components';
import { Progress } from 'components/common/circularProgress/Progress';
import { SnackBar } from 'components/common/snackBar/SnackBar';
import { SetNewPassword } from 'components/setNewPassword/SetNewPassword';
import { REQUEST_STATUS } from 'enums';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { ForgotPassword, NotFound, Profile, Registration, SignIn } from 'pages';
import { Packs } from 'pages/packs/Packs';
import { initializeAppTC } from 'store/middlewares/app/initializeAppTC';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    const dispatch = useAppDispatch();
    const status = useTypedSelector(state => state.app.status);

    useEffect(() => {
        dispatch(initializeAppTC());
    }, []);

    return (
        <HashRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="login" element={<SignIn />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="password_recovery/:token" element={<SetNewPassword />} />
                    <Route path="enter_new_password" element={<ForgotPassword />} />
                    <Route path="packs" element={<Packs />} />
                    <Route path="packs/:pack_id" element={<div>cards</div>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
            <Links />
            <SnackBar />
            {status === REQUEST_STATUS.LOADING && <Progress />}
        </HashRouter>
    );
};

export default App;
