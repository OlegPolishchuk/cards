import { AppRootState } from 'store/types';

export const selectPacksPage = (state: AppRootState): number => {
    return state.packs.page;
};
