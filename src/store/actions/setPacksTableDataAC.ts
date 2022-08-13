import { OrderDirectionType } from 'components/common/commonTable/types';
import { SET_PACKS_TABLE_DATA } from 'store/actions/constants';
import { SetPackTableDataType } from 'store/actions/types';

export const setPacksTableDataAC = (
    direction: OrderDirectionType,
    id: number,
): SetPackTableDataType => {
    return {
        type: SET_PACKS_TABLE_DATA,
        payload: { direction, id },
    };
};
