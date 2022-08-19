import { AppRootState } from 'store/types';

export const selectCardsPage = (state: AppRootState): number => {
    // console.log('select => page');

    return state.cards.page;
};
