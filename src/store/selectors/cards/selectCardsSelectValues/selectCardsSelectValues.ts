import { AppRootState } from 'store/types';

export const selectCardsSelectValues = (state: AppRootState): number[] => {
    return state.cards.cardsSelectValues;
};
