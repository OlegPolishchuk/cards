import { CardType } from 'store/reducers/types/CardType';

export type CardsSearchParamsType = {
    cardAnswer: string;
    min: number;
    max: number;
    sortCards: string;
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
