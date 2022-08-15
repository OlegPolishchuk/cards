import { SET_CARD_PACKS_TOTAL_COUNT } from 'store/actions/constants';
import { SetCardPacksTotalCountType } from 'store/actions/types';

export const setCardPacksTotalCountAC = (
    cardPacksTotalCount: number,
): SetCardPacksTotalCountType => {
    return {
        type: SET_CARD_PACKS_TOTAL_COUNT,
        payload: { cardPacksTotalCount },
    };
};
