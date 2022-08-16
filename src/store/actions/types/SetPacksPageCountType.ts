import { SET_PACKS_PAGE_COUNT } from 'store/actions/constants';

export type SetPacksPageCountType = {
    type: typeof SET_PACKS_PAGE_COUNT;
    payload: { pageCount: number };
};
