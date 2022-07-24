import axios, { AxiosError } from 'axios';

import { authAPI } from 'api';
import { RegisterUserErrorType, UserDataType } from 'api/types';
import { AppThunkType } from 'store/types';

export const registerUser =
    ({ email, password }: UserDataType): AppThunkType =>
    async () => {
        try {
            await authAPI.register({ email, password });
            window.location.href = 'login';
        } catch (err) {
            const error = err as AxiosError | RegisterUserErrorType;

            if (axios.isAxiosError(error)) {
                console.warn(error.message);
            } else {
                console.warn(error.error);
            }
        }
    };
