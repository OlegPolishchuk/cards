import { AppRootState } from 'store/types';

export const selectMinCardsCount = (state: AppRootState): number => {
    return state.packs.minCardsCount;
};
