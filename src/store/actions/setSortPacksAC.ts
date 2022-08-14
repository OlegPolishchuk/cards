import { SET_SORT_PACKS } from 'store/actions/constants';
import { SetSortPacksType } from 'store/actions/types';
import { PacksSortType } from 'store/reducers/types';

export const setSortPacksAC = (sortPacks: PacksSortType): SetSortPacksType => {
    return {
        type: SET_SORT_PACKS,
        payload: { sortPacks },
    };
};
