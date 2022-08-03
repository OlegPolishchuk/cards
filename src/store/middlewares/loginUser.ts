import { AxiosError } from 'axios';

import { authAPI } from 'api';
import { REQUEST_STATUS } from 'enums';
import { setIsUserAuth } from 'store/actions';
import { setStatusAC } from 'store/actions/setStatus';
import { setUser } from 'store/actions/setUser';
import { LoginUserType } from 'store/middlewares/types';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils/errorHandler';

export const loginUser =
    ({ email, password, rememberMe }: LoginUserType): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setStatusAC(REQUEST_STATUS.LOADING));
            const response = await authAPI.login(email, password, rememberMe);

            dispatch(setIsUserAuth(true));
            dispatch(setUser(response.data));
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setStatusAC(REQUEST_STATUS.IDLE));
        }
    };
