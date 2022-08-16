import { SET_CARDS_PAGE_COUNT } from 'store/actions/constants';
import { SetCardsPageCountType } from 'store/actions/types/SetCardsPageCountType';

export const setCardsPageCountAC = (pageCount: number): SetCardsPageCountType => {
    return {
        type: SET_CARDS_PAGE_COUNT,
        payload: { pageCount },
    };
};
