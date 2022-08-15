import { TableDataType } from 'store/reducers/types/TableDataType';
import { AppRootState } from 'store/types';

export const selectPacksTableData = (state: AppRootState): TableDataType[] =>
    state.packs.tableData;
