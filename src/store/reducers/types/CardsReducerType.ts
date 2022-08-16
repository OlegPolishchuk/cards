import { CardType } from 'store/reducers/types/CardType';
import { PackType } from 'store/reducers/types/PackType';

export type CardsReducerType = {
    cards: CardType[];
    cardsTotalCount: number;
    maxGrade: number;
    minGrade: number;
    page: number;
    pageCount: number;
    packUserId: string;

    cardQuestion: string;
    cardAnswer: string;
    cardsPack_id: string;
    sortCards: string;
    currentPack: PackType;
};

export type GetCardsType = {
    cards: CardType[];
    cardsTotalCount: number;
    maxGrade: number;
    minGrade: number;
    page: number;
    pageCount: number;
    packUserId: string;
};
