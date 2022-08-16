import { CardType } from 'store/reducers/types';
import { AppRootState } from 'store/types';

export const selectCards = (state: AppRootState): CardType[] => state.cards.cards;
