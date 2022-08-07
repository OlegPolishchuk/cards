import { UpdatedUserType } from 'api/auth/types/UpdatetUserType';
import { instance } from 'api/config';
import { AddedUserType, RegisterUserErrorType, UserDataType } from 'api/types';

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
        return instance.post('auth/forgot', {
            email,
            message: `<div style='background-color: lime; padding: 15px'>
                          password recovery link: <a href='http://localhost:3000/password_recovery/$token$'>link</a>
                      </div>`,
            from: 'test-front-admin <hvi17@yandex.ru>',
        });
    },
};
