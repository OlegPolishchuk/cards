import axios from 'axios';

import { UpdatedUserType } from 'api/auth/types/UpdatetUserType';
import { instance } from 'api/config';
import {
    AddedUserType,
    RegisterUserErrorType,
    SetNewPasswordType,
    UserDataType,
} from 'api/types';

export const authAPI = {
    login: async (email: string, password: string, rememberMe: boolean) => {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    register: ({ email, password }: UserDataType) => {
        return instance.post<AddedUserType | RegisterUserErrorType>('auth/register', {
            email,
            password,
        });
    },
    logout: () => {
        return instance.delete('auth/me');
    },
    getMe: () => {
        return instance.post<AddedUserType>('auth/me', {});
    },
    updateUser: (name: string, avatar: string = '') => {
        return instance.put<UpdatedUserType>('auth/me', {
            name,
            avatar,
        });
    },
    forgotPassword: (email: string) => {
        return axios.post<{ info: string; error: string }>(
            'https://neko-back.herokuapp.com/2.0/auth/forgot',
            {
                email,
                from: 'test-front-admin <hvi17@yandex.ru>',
                message: `<div style='background-color: lime; padding: 15px'>
                          password recovery link: <a href='http://localhost:3000/#/password_recovery/$token$'>link</a>
                      </div>`,
            },
            { withCredentials: true },
        );
    },
    setNewPassword: (password: string, token: string) => {
        return instance.post<SetNewPasswordType>('auth/set-new-password', {
            password,
            resetPasswordToken: token,
        });
    },
};
