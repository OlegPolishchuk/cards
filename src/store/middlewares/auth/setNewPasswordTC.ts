import { AxiosError } from 'axios';

import { authAPI } from 'api';
import { REQUEST_STATUS } from 'enums';
import { setStatusAC } from 'store/actions';
import { setIsPasswordChangedAC } from 'store/actions/setIsPasswordChangedAC';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils/errorHandler';

export const setNewPasswordTC =
    (password: string, token: string): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setStatusAC(REQUEST_STATUS.LOADING));

            await authAPI.setNewPassword(password, token);
            dispatch(setIsPasswordChangedAC(true));
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setStatusAC(REQUEST_STATUS.IDLE));
        }
    };
