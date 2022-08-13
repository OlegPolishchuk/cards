import { OrderDirectionType } from 'components/common/commonTable/types';

export type PackTableDataType = {
    id: number;
    title: string;
    isSorted: boolean;
    direction: OrderDirectionType;
};
