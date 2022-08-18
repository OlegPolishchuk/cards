import { AxiosError } from 'axios';

import { packsAPI } from 'api/packs/packsAPI';
import { REQUEST_STATUS } from 'enums';
import { setStatusAC } from 'store/actions';
import { setCurrentPuckAC } from 'store/actions/setCurrentPuckAC';
import { PacksSearchParamsType, PackType } from 'store/reducers/types';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils/errorHandler';

export const fetchCurrentUserPackTC =
    (cardPack_id: string): AppThunkType =>
    async (dispatch, getState) => {
        try {
            const user_id = getState().cards.packUserId;

            dispatch(setStatusAC(REQUEST_STATUS.LOADING));

            const packs = await packsAPI.fetchPack({ user_id } as PacksSearchParamsType);

            const pack = packs.data.cardPacks.find(
                pack => pack._id === cardPack_id,
            ) as PackType;

            console.log(`cardsPack_id = ${cardPack_id}`);
            console.log(packs.data.cardPacks);
            console.log(pack);
            dispatch(setCurrentPuckAC(pack));
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setStatusAC(REQUEST_STATUS.IDLE));
        }
    };
