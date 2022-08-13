import { OrderDirectionType } from 'components/common/commonTable/types';
import { SET_PACKS_TABLE_DATA } from 'store/actions/constants';

export type SetPackTableDataType = {
    type: typeof SET_PACKS_TABLE_DATA;
    payload: { direction: OrderDirectionType; id: number };
};
