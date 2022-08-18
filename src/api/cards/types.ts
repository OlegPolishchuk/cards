import { CardsSortType } from 'store/reducers/types';
import { CardType } from 'store/reducers/types/CardType';

export type CardsSearchParamsType = {
    cardAnswer: string;
    min: number;
    max: number;
    sortCards: CardsSortType;
    page: number;
    pageCount: number;
    cardsPack_id: string;
};

export type GetCardsResponseType = {
    cards: CardType[];
    cardsTotalCount: number;
    maxGrade: number;
    minGrade: number;
    page: number;
    pageCount: number;
    packUserId: string;
};

export type CreateNewCardType = {
    cardsPack_id: string;
    question: string;
    questionType?: string;
    answer: string;
};

export type UpdateCardType = {
    _id: string;
    question: string;
    questionType?: string;
    answer: string;
};
