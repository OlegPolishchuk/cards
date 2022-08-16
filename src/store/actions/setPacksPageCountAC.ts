import { SET_PACKS_PAGE_COUNT } from 'store/actions/constants';
import { SetPacksPageCountType } from 'store/actions/types';

export const setPacksPageCountAC = (pageCount: number): SetPacksPageCountType => {
    return {
        type: SET_PACKS_PAGE_COUNT,
        payload: { pageCount },
    };
};
