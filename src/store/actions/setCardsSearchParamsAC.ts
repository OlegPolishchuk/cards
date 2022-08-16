import { CardsSearchParamsType } from 'api/cards/types';
import { SET_CARDS_SEARCH_PARAMS } from 'store/actions/constants';
import { SetCardsSearchParamsType } from 'store/actions/types';

export const setCardsSearchParamsAC = (
    searchParams: CardsSearchParamsType,
): SetCardsSearchParamsType => {
    return {
        type: SET_CARDS_SEARCH_PARAMS,
        payload: { searchParams },
    };
};
