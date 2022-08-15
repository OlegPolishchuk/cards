import { AppRootState } from 'store/types';

export const selectMaxCardCount = (state: AppRootState): number => {
    return state.packs.maxCardsCount;
};
