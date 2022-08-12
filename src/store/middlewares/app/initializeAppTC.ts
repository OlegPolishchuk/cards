import { AxiosError } from 'axios';

import { authAPI } from 'api';
import { REQUEST_STATUS } from 'enums';
import { setInitializedAC, setIsUserAuthAC, setStatusAC, setUserAC } from 'store/actions';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils/errorHandler';

export const initializeAppTC = (): AppThunkType => async (dispatch, getState) => {
    try {
        const response = await authAPI.getMe();

        dispatch(setStatusAC(REQUEST_STATUS.LOADING));

        dispatch(setUserAC(response.data));
        dispatch(setIsUserAuthAC(true));
    } catch (e) {
        const { isUserAuth } = getState().auth;

        if (isUserAuth) {
            errorHandler(e as Error | AxiosError, dispatch);
        }
    } finally {
        dispatch(setInitializedAC(true));
        dispatch(setStatusAC(REQUEST_STATUS.IDLE));
    }
};
