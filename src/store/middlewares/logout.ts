import axios, { AxiosError } from 'axios';

import { authAPI } from 'api';
import { AddedUserType, RegisterUserErrorType } from 'api/types';
import { REQUEST_STATUS } from 'enums';
import { setStatusAC } from 'store/actions/setStatus';
import { setUser } from 'store/actions/setUser';
import { AppThunkType } from 'store/types';
import { pureUser } from 'utils/pureUser';

export const logout = (): AppThunkType => async dispatch => {
    const user: AddedUserType = pureUser;

    try {
        dispatch(setStatusAC(REQUEST_STATUS.LOADING));
        await authAPI.logout();
        dispatch(setUser(user));
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
