import {
    SET_CARDS,
    SET_CARDS_PACK_ID,
    SET_CARDS_SEARCH_PARAMS,
} from 'store/actions/constants';
import { CardsActionsType } from 'store/actions/types/CardsActionsType';
import { CardsReducerType, PackType } from 'store/reducers/types';

const initState: CardsReducerType = {
    cards: [],
    cardsTotalCount: 0,
    maxGrade: 5,
    minGrade: 0,
    page: 1,
    pageCount: 4,
    packUserId: '',
    cardQuestion: '',
    cardAnswer: '',
    cardsPack_id: '',
    sortCards: '',
    currentPack: {} as PackType,
    tableData: [
        {
            id: 1,
            title: 'Question',
            isSorted: true,
            direction: 'asc',
            search: 'cardQuestion',
        },
        {
            id: 2,
            title: 'Answer',
            isSorted: false,
            direction: 'asc',
            search: 'cardAnswer',
        },
        {
            id: 3,
            title: 'Last updated',
            isSorted: true,
            direction: 'asc',
            search: 'updated',
        },
        {
            id: 4,
            title: 'Grade',
            isSorted: true,
            direction: 'asc',
            search: 'grade',
        },
        { id: 5, title: 'Actions', search: null, isSorted: false, direction: 'asc' },
    ],
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
        default:
            return state;
    }
};
