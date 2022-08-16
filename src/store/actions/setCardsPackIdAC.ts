import { SET_CARDS_PACK_ID } from 'store/actions/constants';
import { SetCardsPackIdType } from 'store/actions/types';

export const setCardsPackIdAC = (cardsPack_id: string): SetCardsPackIdType => {
    return {
        type: SET_CARDS_PACK_ID,
        payload: { cardsPack_id },
    };
};
