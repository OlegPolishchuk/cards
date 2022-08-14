import { SET_SORT_PACKS } from 'store/actions/constants';
import { PacksSortType } from 'store/reducers/types';

export type SetSortPacksType = {
    type: typeof SET_SORT_PACKS;
    payload: { sortPacks: PacksSortType };
};
