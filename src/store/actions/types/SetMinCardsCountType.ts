import { SET_PACKS_MIN_CARDS_COUNT } from 'store/actions/constants';

export type SetMinCardsCountType = {
    type: typeof SET_PACKS_MIN_CARDS_COUNT;
    payload: { min: number };
};
