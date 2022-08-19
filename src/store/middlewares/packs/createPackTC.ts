import { AxiosError } from 'axios';

import { packsAPI } from 'api/packs/packsAPI';
import { AddNewPackFieldType } from 'components/modalsStates/packs/addNewPack/AddNewPack';
import { REQUEST_STATUS } from 'enums';
import { setStatusAC } from 'store/actions';
import { fetchPackTC } from 'store/middlewares/packs/fetchPackTC';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils/errorHandler';

export const createPackTC =
    (data: AddNewPackFieldType): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setStatusAC(REQUEST_STATUS.LOADING));

            // hardcode
            const newData = { ...data };

            await packsAPI.createPack(newData);
            dispatch(fetchPackTC());
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setStatusAC(REQUEST_STATUS.IDLE));
        }
    };
