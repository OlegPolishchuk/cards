import { TableDataType } from 'store/reducers/types';
import { AppRootState } from 'store/types';

export const selectCardsTableHeadData = (state: AppRootState): TableDataType[] => {
    // console.log('select => cards.tableData');

    return state.cards.tableData;
};
