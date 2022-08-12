import { AxiosError } from 'axios';

import { packsAPI } from 'api/packs/packsAPI';
import { REQUEST_STATUS } from 'enums';
import { setStatusAC } from 'store/actions';
import { setPacksAC } from 'store/actions/setPacksAC';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils/errorHandler';

export const setAllPacksTC = (): AppThunkType => async (dispatch, getState) => {
    try {
        dispatch(setStatusAC(REQUEST_STATUS.LOADING));

        const { packName } = getState().packs;
        const { min } = getState().packs;
        const { max } = getState().packs;
        const { sortPacks } = getState().packs;
        const { page } = getState().packs;
        const { pageCount } = getState().packs;
        const { user_id } = getState().packs;

        const response = await packsAPI.fetchPack({
            sortPacks,
            min,
            max,
            page,
            user_id,
            pageCount,
            packName,
        });

        dispatch(setPacksAC(response.data.cardPacks));
    } catch (e) {
        errorHandler(e as Error | AxiosError, dispatch);
    } finally {
        dispatch(setStatusAC(REQUEST_STATUS.IDLE));
    }
};
