import { AddedUserType } from 'api/types';

export type AuthReducerType = {
    userData: AddedUserType;
    error?: string | null;
    isUserAuth: boolean;
    isEmailSend: boolean;
    userEmailFoCheck: string;
};
