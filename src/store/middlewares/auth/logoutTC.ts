import { AxiosError } from 'axios';

import { authAPI } from 'api';
import { AddedUserType } from 'api/types';
import { REQUEST_STATUS } from 'enums';
import { setIsUserAuthAC } from 'store/actions';
import { setStatusAC } from 'store/actions/setStatusAC';
import { setUserAC } from 'store/actions/setUserAC';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils/errorHandler';
import { pureUser } from 'utils/pureUser';

export const logoutTC = (): AppThunkType => async dispatch => {
    const user: AddedUserType = pureUser;

    try {
        dispatch(setStatusAC(REQUEST_STATUS.LOADING));
        await authAPI.logout();
        dispatch(setIsUserAuthAC(false));
        dispatch(setUserAC(user));
    } catch (e) {
        errorHandler(e as Error | AxiosError, dispatch);
    } finally {
        dispatch(setStatusAC(REQUEST_STATUS.IDLE));
    }
};
