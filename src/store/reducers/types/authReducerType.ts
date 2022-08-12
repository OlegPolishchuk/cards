import { AddedUserType } from 'api/types';

export type AuthReducerType = {
    userData: AddedUserType;
    error?: string | null;
    isUserAuth: boolean;
    isEmailSent: boolean;
    userEmailFoCheck: string;
    info: string;
    isPasswordChanged: boolean;
};
