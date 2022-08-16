import { AppRootState } from 'store/types';

export const selectPacksSelectValues = (state: AppRootState): number[] => {
    return state.packs.packsSelectValues;
};
