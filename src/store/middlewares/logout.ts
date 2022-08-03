import { AxiosError } from 'axios';

import { authAPI } from 'api';
import { AddedUserType } from 'api/types';
import { REQUEST_STATUS } from 'enums';
import { setIsUserAuth } from 'store/actions';
import { setStatusAC } from 'store/actions/setStatus';
import { setUser } from 'store/actions/setUser';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils/errorHandler';
import { pureUser } from 'utils/pureUser';

export const logout = (): AppThunkType => async dispatch => {
    const user: AddedUserType = pureUser;

    try {
        dispatch(setStatusAC(REQUEST_STATUS.LOADING));
        await authAPI.logout();
        dispatch(setIsUserAuth(false));
        dispatch(setUser(user));
    } catch (e) {
        errorHandler(e as Error | AxiosError, dispatch);
    } finally {
        dispatch(setStatusAC(REQUEST_STATUS.IDLE));
    }
};
