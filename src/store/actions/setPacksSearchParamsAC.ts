import { SET_PACKS_SEARCH_PARAMS } from 'store/actions/constants';
import { SetPacksSearchParamsType } from 'store/actions/types/SetPacksSearchParamsType';
import { PacksSearchParamsType } from 'store/reducers/types';

export const setPacksSearchParamsAC = (
    params: PacksSearchParamsType,
): SetPacksSearchParamsType => {
    return {
        type: SET_PACKS_SEARCH_PARAMS,
        payload: { params },
    };
};
