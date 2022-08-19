import { AppRootState } from 'store/types';

export const selectCardsPageCount = (state: AppRootState): number => {
    // console.log('select => pageCount');

    return state.cards.pageCount;
};
