import { SET_PACKS } from 'store/actions/constants';
import { PacksActionType } from 'store/actions/types';
import { PackReducerType } from 'store/reducers/types/PackReducerType';

const initialState: PackReducerType = {
    cardPacks: [],
    cardPackTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 8,
    token: '',
    tokenDeathTime: 0,
    max: 120,
    min: 0,
    packName: '',
    sortPacks: '0updated',
    user_id: '',
};

export const packReducer = (
    state = initialState,
    action: PacksActionType,
): PackReducerType => {
    switch (action.type) {
        case SET_PACKS:
            return {
                ...state,
                cardPacks: action.payload.packs,
            };
        default:
            return state;
    }
};
