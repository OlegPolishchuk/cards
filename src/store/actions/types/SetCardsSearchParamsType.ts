import { CardsSearchParamsType } from 'api/cards/types';
import { SET_CARDS_SEARCH_PARAMS } from 'store/actions/constants';

export type SetCardsSearchParamsType = {
    type: typeof SET_CARDS_SEARCH_PARAMS;
    payload: { searchParams: CardsSearchParamsType };
};
