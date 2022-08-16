import { CardType } from 'store/reducers/types/CardType';
import { PackType } from 'store/reducers/types/PackType';
import { TableDataType } from 'store/reducers/types/TableDataType';

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

    tableData: TableDataType[];
    cardsSelectValues: number[];
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
