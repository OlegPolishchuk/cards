import { SET_PACKS_NAME } from 'store/actions/constants';
import { SetPacksNameType } from 'store/actions/types';

export const setPacksNameAC = (packName: string): SetPacksNameType => {
    return {
        type: SET_PACKS_NAME,
        payload: { packName },
    };
};
