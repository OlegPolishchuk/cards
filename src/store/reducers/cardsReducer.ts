import {
    CARDS_SELECT_VALUE_MIN,
    CARDS_SELECT_VALUES,
} from 'constants/cardsSelectValues/cardsSelectValues';
import {
    SET_CARD_SEARCH_QUESTION,
    SET_CARDS,
    SET_CARDS_PACK_ID,
    SET_CARDS_PAGE,
    SET_CARDS_PAGE_COUNT,
    SET_CARDS_SEARCH_PARAMS,
    SET_CARDS_TABLE_DATA,
    SET_SORT_CARDS,
} from 'store/actions/constants';
import { CardsActionsType } from 'store/actions/types/CardsActionsType';
import { CardsReducerType, PackType } from 'store/reducers/types';

const initState: CardsReducerType = {
    cards: [],
    cardsTotalCount: 0,
    maxGrade: 5,
    minGrade: 0,
    page: 1,
    pageCount: CARDS_SELECT_VALUE_MIN,
    packUserId: '',
    cardQuestion: '',
    cardAnswer: '',
    cardsPack_id: '',
    sortCards: '0updated',
    currentPack: {} as PackType,
    tableData: [
        {
            id: 1,
            title: 'Question',
            isSorted: false,
            direction: 'asc',
            search: null,
            type: 'card',
        },
        {
            id: 2,
            title: 'Answer',
            isSorted: false,
            direction: 'asc',
            search: null,
            type: 'card',
        },
        {
            id: 3,
            title: 'Last updated',
            isSorted: true,
            direction: 'asc',
            search: 'updated',
            type: 'card',
        },
        {
            id: 4,
            title: 'Grade',
            isSorted: true,
            direction: 'asc',
            search: 'grade',
            type: 'card',
        },
        {
            id: 5,
            title: 'Actions',
            type: 'card',
            search: null,
            isSorted: false,
            direction: 'asc',
        },
    ],
    cardsSelectValues: CARDS_SELECT_VALUES,
};

export const cardsReducer = (
    state = initState,
    action: CardsActionsType,
): CardsReducerType => {
    switch (action.type) {
        case SET_CARDS:
            return { ...state, ...action.payload.data };
        case SET_CARDS_PACK_ID:
            return { ...state, cardsPack_id: action.payload.cardsPack_id };
        case SET_CARDS_SEARCH_PARAMS:
            return { ...state, ...action.payload.searchParams };
        case SET_CARDS_PAGE:
            return { ...state, page: action.payload.page };
        case SET_CARDS_PAGE_COUNT:
            return { ...state, pageCount: action.payload.pageCount };
        case SET_CARDS_TABLE_DATA:
            return {
                ...state,
                tableData: state.tableData.map(el =>
                    el.id === action.payload.id
                        ? { ...el, direction: action.payload.direction }
                        : el,
                ),
            };
        case SET_SORT_CARDS:
            return { ...state, sortCards: action.payload.sort };
        case SET_CARD_SEARCH_QUESTION:
            return { ...state, cardQuestion: action.payload.question };
        default:
            return state;
    }
};
