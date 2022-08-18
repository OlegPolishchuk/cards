import { OrderDirectionType } from 'components/common/commonTable/types';
import { SET_CARDS_TABLE_DATA } from 'store/actions/constants';

export type SetCardsTableDataType = {
    type: typeof SET_CARDS_TABLE_DATA;
    payload: { direction: OrderDirectionType; id: number };
};
