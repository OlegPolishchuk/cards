import { SET_PACKS_MAX_CARDS_COUNT } from 'store/actions/constants';

export type SetMaxCardsCountType = {
    type: typeof SET_PACKS_MAX_CARDS_COUNT;
    payload: { max: number };
};
