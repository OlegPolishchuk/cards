import { MAX_CARDS_COUNT, MIN_CARDS_COUNT } from 'constants/cardsCount/cardsCountSlider';
import {
    SET_CARD_PACKS_TOTAL_COUNT,
    SET_PACKS,
    SET_PACKS_MAX_CARDS_COUNT,
    SET_PACKS_MIN_CARDS_COUNT,
    SET_PACKS_NAME,
    SET_PACKS_PAGE,
    SET_PACKS_SEARCH_PARAMS,
    SET_PACKS_TABLE_DATA,
    SET_PACKS_USER_ID,
    SET_SORT_PACKS,
} from 'store/actions/constants';
import { PacksActionType } from 'store/actions/types';
import { PackReducerType } from 'store/reducers/types/PackReducerType';

const initialState: PackReducerType = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    maxCardsCount: MAX_CARDS_COUNT,
    minCardsCount: MIN_CARDS_COUNT,
    page: 1,
    pageCount: 8,
    token: '',
    tokenDeathTime: 0,
    max: 110,
    min: 0,
    packName: '',
    sortPacks: '0updated',
    user_id: '',
    tableData: [
        { id: 1, title: 'Name', search: 'name', isSorted: true, direction: 'asc' },
        { id: 2, title: 'Cards', search: 'cardsCount', isSorted: true, direction: 'asc' },
        {
            id: 3,
            title: 'Last Updated',
            search: 'updated',
            isSorted: true,
            direction: 'asc',
        },
        {
            id: 4,
            title: 'Created by',
            search: 'created',
            isSorted: true,
            direction: 'asc',
        },
        { id: 5, title: 'Actions', search: null, isSorted: false, direction: 'asc' },
    ],
};

export const packReducer = (
    state = initialState,
    action: PacksActionType,
): PackReducerType => {
    switch (action.type) {
        case SET_PACKS:
            return { ...state, cardPacks: action.payload.packs };
        case SET_CARD_PACKS_TOTAL_COUNT:
            return { ...state, cardPacksTotalCount: action.payload.cardPacksTotalCount };
        case SET_PACKS_SEARCH_PARAMS:
            return { ...state, ...action.payload.params };
        case SET_PACKS_NAME:
            return { ...state, packName: action.payload.packName };
        case SET_PACKS_TABLE_DATA:
            return {
                ...state,
                tableData: state.tableData.map(el =>
                    el.id === action.payload.id
                        ? { ...el, direction: action.payload.direction }
                        : el,
                ),
            };
        case SET_SORT_PACKS:
            return { ...state, sortPacks: action.payload.sortPacks };
        case SET_PACKS_USER_ID:
            return { ...state, user_id: action.payload.userId };
        case SET_PACKS_MIN_CARDS_COUNT:
            return { ...state, min: action.payload.min };
        case SET_PACKS_MAX_CARDS_COUNT:
            return { ...state, max: action.payload.max };
        case SET_PACKS_PAGE:
            return { ...state, page: action.payload.page };
        default:
            return state;
    }
};
