import { AxiosError } from 'axios';

import { authAPI } from 'api';
import { REQUEST_STATUS } from 'enums';
import { setStatusAC, setUser } from 'store/actions';
import { UpdateUserDataType } from 'store/middlewares/types/UpdateUserDataType';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils/errorHandler';

export const updateUser =
    ({ userName, userPhoto }: UpdateUserDataType): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setStatusAC(REQUEST_STATUS.LOADING));

            const response = await authAPI.updateUser(userName, userPhoto);

            dispatch(setUser(response.data.updatedUser));
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setStatusAC(REQUEST_STATUS.IDLE));
        }
    };
