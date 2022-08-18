import { SET_SORT_CARDS } from 'store/actions/constants';
import { SetSortCardsType } from 'store/actions/types';
import { CardsSortType } from 'store/reducers/types';

export const setSortCardAC = (sort: CardsSortType): SetSortCardsType => {
    return {
        type: SET_SORT_CARDS,
        payload: { sort },
    };
};
