import { OrderDirectionType } from 'components/common/commonTable/types';
import { SET_CARDS_TABLE_DATA } from 'store/actions/constants';
import { SetCardsTableDataType } from 'store/actions/types';

export const setCardsTableDataAC = (
    direction: OrderDirectionType,
    id: number,
): SetCardsTableDataType => {
    return {
        type: SET_CARDS_TABLE_DATA,
        payload: { direction, id },
    };
};
