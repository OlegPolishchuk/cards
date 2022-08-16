import { SET_CARDS } from 'store/actions/constants';
import { GetCardsType } from 'store/reducers/types/CardsReducerType';

export type SetCardsType = {
    type: typeof SET_CARDS;
    payload: { data: GetCardsType };
};
