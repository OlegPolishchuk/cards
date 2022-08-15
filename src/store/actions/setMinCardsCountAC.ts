import { SET_PACKS_MIN_CARDS_COUNT } from 'store/actions/constants';
import { SetMinCardsCountType } from 'store/actions/types';

export const setMinCardsCountAC = (min: number): SetMinCardsCountType => {
    return {
        type: SET_PACKS_MIN_CARDS_COUNT,
        payload: { min },
    };
};
