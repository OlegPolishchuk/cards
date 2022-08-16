import { PacksSortType } from 'store/reducers/types/PacksSortType';
import { PackType } from 'store/reducers/types/PackType';
import { TableDataType } from 'store/reducers/types/TableDataType';

export type PackReducerType = {
    cardPacks: PackType[];
    cardPacksTotalCount: number;
    maxCardsCount: number;
    minCardsCount: number;
    page: number;
    pageCount: number;
    token: string;
    tokenDeathTime: number;
    packName: string;
    min: number;
    max: number;
    sortPacks: PacksSortType;
    user_id: string;
    tableData: TableDataType[];
    currentPack: PackType;
    packsSelectValues: number[];
};
