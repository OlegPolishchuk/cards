import { SET_PACKS_USER_ID } from 'store/actions/constants';
import { SetPacksUserIdType } from 'store/actions/types';

export const setPacksUserIdAC = (userId: string): SetPacksUserIdType => {
    return {
        type: SET_PACKS_USER_ID,
        payload: { userId },
    };
};
