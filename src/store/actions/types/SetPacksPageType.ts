import { SET_PACKS_PAGE } from 'store/actions/constants';

export type SetPacksPageType = {
    type: typeof SET_PACKS_PAGE;
    payload: { page: number };
};
