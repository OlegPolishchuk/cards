import { PacksSortType } from 'store/reducers/types/PacksSortType';
import { PackTableDataType } from 'store/reducers/types/PackTableDataType';
import { PackType } from 'store/reducers/types/PackType';

export type PackReducerType = {
    cardPacks: PackType[];
    cardPackTotalCount: number;
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
    tableData: PackTableDataType[];
};
