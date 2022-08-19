import { CardType } from 'store/reducers/types';
import { AppRootState } from 'store/types';

export const selectCards = (state: AppRootState): CardType[] => {
    // console.log('select => selectCards');

    return state.cards.cards;
};
