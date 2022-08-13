import {
    SET_PACKS,
    SET_PACKS_NAME,
    SET_PACKS_SEARCH_PARAMS,
    SET_PACKS_TABLE_DATA,
} from 'store/actions/constants';
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
    tableData: [
        { id: 1, title: 'Name', isSorted: true, direction: 'asc' },
        { id: 2, title: 'Cards', isSorted: true, direction: 'asc' },
        { id: 3, title: 'Last Updated', isSorted: true, direction: 'asc' },
        { id: 4, title: 'Created by', isSorted: true, direction: 'asc' },
        { id: 5, title: 'Actions', isSorted: false, direction: 'asc' },
    ],
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
        case SET_PACKS_SEARCH_PARAMS:
            return {
                ...state,
                ...action.payload.params,
            };
        case SET_PACKS_NAME:
            return {
                ...state,
                packName: action.payload.packName,
            };
        case SET_PACKS_TABLE_DATA:
            return {
                ...state,
                tableData: state.tableData.map(el =>
                    el.id === action.payload.id
                        ? { ...el, direction: action.payload.direction }
                        : el,
                ),
            };
        default:
            return state;
    }
};
