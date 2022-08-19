import { AppRootState } from 'store/types';

export const selectCardsSelectValues = (state: AppRootState): number[] => {
    // console.log('select => cardsSelectValues');

    return state.cards.cardsSelectValues;
};
