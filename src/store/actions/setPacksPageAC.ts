import { SET_PACKS_PAGE } from 'store/actions/constants';
import { SetPacksPageType } from 'store/actions/types';

export const setPacksPageAC = (page: number): SetPacksPageType => {
    return {
        type: SET_PACKS_PAGE,
        payload: { page },
    };
};
