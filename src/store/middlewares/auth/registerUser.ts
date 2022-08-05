import axios, { AxiosError } from 'axios';

import { authAPI } from 'api';
import { RegisterUserErrorType, UserDataType } from 'api/types';
import { REQUEST_STATUS } from 'enums';
import { setStatusAC } from 'store/actions/setStatus';
import { AppThunkType } from 'store/types';

export const registerUser =
    ({ email, password }: UserDataType): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setStatusAC(REQUEST_STATUS.LOADING));
            await authAPI.register({ email, password });
        } catch (err) {
            const error = err as AxiosError | RegisterUserErrorType;

            if (axios.isAxiosError(error)) {
                console.warn(error.message);
            } else {
                console.warn(error.error);
            }
        } finally {
            dispatch(setStatusAC(REQUEST_STATUS.IDLE));
        }
    };
