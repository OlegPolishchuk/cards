import { SET_PACKS } from 'store/actions/constants';
import { SetPacksType } from 'store/actions/types/SetPacksType';
import { PackType } from 'store/reducers/types/PackType';

export const setPacksAC = (packs: PackType[]): SetPacksType => {
    return {
        type: SET_PACKS,
        payload: { packs },
    };
};
