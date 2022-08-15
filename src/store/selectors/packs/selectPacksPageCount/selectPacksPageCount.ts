import { AppRootState } from 'store/types';

export const selectPacksPageCount = (state: AppRootState): number => {
    return state.packs.pageCount;
};
