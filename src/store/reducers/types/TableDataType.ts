import { OrderDirectionType } from 'components/common/commonTable/types';

export type TableDataType = {
    id: number;
    title: string;
    isSorted: boolean;
    direction: OrderDirectionType;
    search: string | null;
    type: string;
};
