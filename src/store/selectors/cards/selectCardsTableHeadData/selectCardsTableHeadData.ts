import { TableDataType } from 'store/reducers/types';
import { AppRootState } from 'store/types';

export const selectCardsTableHeadData = (state: AppRootState): TableDataType[] => {
    return state.cards.tableData;
};
