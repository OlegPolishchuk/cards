import { SET_PACKS_SEARCH_PARAMS } from 'store/actions/constants';
import { PacksSearchParamsType } from 'store/reducers/types';

export type SetPacksSearchParamsType = {
    type: typeof SET_PACKS_SEARCH_PARAMS;
    payload: { params: PacksSearchParamsType };
};
