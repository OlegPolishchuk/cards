import { instance } from './config';

import { AddedUserType, RegisterUserErrorType, UserDataType } from 'api/types';
import { UpdatedUserType } from 'api/types/UpdatetUserType';

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
};
