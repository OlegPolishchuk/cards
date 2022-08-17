import { PackType } from 'store/reducers/types';

export type createNewPackType = {
    name: string;
    deckCover: string;
    isPrivate: boolean;
};

export type GetPacksResponseType = {
    cardPacks: PackType[];
    page: number;
    pageCount: number;
    cardPacksTotalCount: number;
    minCardsCount: number;
    maxCardsCount: number;
    token: string;
    tokenDeathTime: number;
};

export type UpdatePackDataType = {
    _id: string;
    name?: string;
    isPrivate?: boolean;
};
