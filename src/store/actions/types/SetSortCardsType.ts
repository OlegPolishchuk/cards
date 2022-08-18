import { SET_SORT_CARDS } from 'store/actions/constants';
import { CardsSortType } from 'store/reducers/types';

export type SetSortCardsType = {
    type: typeof SET_SORT_CARDS;
    payload: { sort: CardsSortType };
};
