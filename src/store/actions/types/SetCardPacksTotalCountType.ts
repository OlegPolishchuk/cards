import { SET_CARD_PACKS_TOTAL_COUNT } from 'store/actions/constants';

export type SetCardPacksTotalCountType = {
    type: typeof SET_CARD_PACKS_TOTAL_COUNT;
    payload: { cardPacksTotalCount: number };
};
