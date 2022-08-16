import { CardType, PackType } from 'store/reducers/types';
import { TableDataType } from 'store/reducers/types/TableDataType';

export type CommonTableType = {
    packs?: PackType[];
    cards?: CardType[];
    tableHeadData: TableDataType[];
};

export type OrderDirectionType = 'asc' | 'desc';
