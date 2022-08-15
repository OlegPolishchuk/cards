import { SET_PACKS_MAX_CARDS_COUNT } from 'store/actions/constants';
import { SetMaxCardsCountType } from 'store/actions/types';

export const setMaxCardsCountAC = (max: number): SetMaxCardsCountType => {
    return {
        type: SET_PACKS_MAX_CARDS_COUNT,
        payload: { max },
    };
};
