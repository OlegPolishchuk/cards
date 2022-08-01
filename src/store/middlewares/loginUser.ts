import axios, { AxiosError } from 'axios';

import { authAPI } from 'api';
import { RegisterUserErrorType } from 'api/types';
import { REQUEST_STATUS } from 'enums';
import { setStatusAC } from 'store/actions/setStatus';
import { setUser } from 'store/actions/setUser';
import { LoginUserType } from 'store/middlewares/types';
import { AppThunkType } from 'store/types';

export const loginUser =
    ({ email, password, rememberMe }: LoginUserType): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setStatusAC(REQUEST_STATUS.LOADING));
            const response = await authAPI.login(email, password, rememberMe);

            console.log(response.data);
            dispatch(setUser(response.data));
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
