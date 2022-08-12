import { PacksSortType } from 'store/reducers/types/PacksSortType';

export type PacksSearchParamsType = {
    packName: string;
    min: number;
    max: number;
    sortPacks: PacksSortType;
    page: number;
    pageCount: number;
    user_id: string;
};
