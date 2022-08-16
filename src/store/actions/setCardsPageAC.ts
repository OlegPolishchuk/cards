import { SET_CARDS_PAGE } from 'store/actions/constants';
import { SetCardsPageType } from 'store/actions/types';

export const setCardsPageAC = (page: number): SetCardsPageType => {
    return {
        type: SET_CARDS_PAGE,
        payload: { page },
    };
};
