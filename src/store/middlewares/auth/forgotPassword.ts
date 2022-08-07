import { AxiosError } from 'axios';

import { authAPI } from 'api';
import { REQUEST_STATUS } from 'enums';
import { setIsEmailSendAC, setStatusAC, setUserEmailForCheckAC } from 'store/actions';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils/errorHandler';

export const forgotPassword =
    (email: string): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setStatusAC(REQUEST_STATUS.LOADING));

            await authAPI.forgotPassword(email);
            dispatch(setIsEmailSendAC(true));
            dispatch(setUserEmailForCheckAC(email));
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setStatusAC(REQUEST_STATUS.IDLE));
        }
    };
