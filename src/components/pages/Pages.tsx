import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Cards } from 'components/cards/Cards';
import { SetNewPassword } from 'components/setNewPassword/SetNewPassword';
import { ForgotPassword, NotFound, Profile, Registration, SignIn } from 'pages';
import { Learn } from 'pages/learn/Learn';
import { Packs } from 'pages/packs/Packs';
import { ReturnComponentType } from 'types';

export const Pages = (): ReturnComponentType => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="login" element={<SignIn />} />
            <Route path="registration" element={<Registration />} />
            <Route path="profile" element={<Profile />} />
            <Route path="password_recovery/:token" element={<SetNewPassword />} />
            <Route path="enter_new_password" element={<ForgotPassword />} />
            <Route path="packs" element={<Packs />} />
            <Route path="packs/:pack_id" element={<Cards />} />
            <Route path="learn/:pack_id" element={<Learn />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
