import { PackTableDataType } from 'store/reducers/types/PackTableDataType';
import { AppRootState } from 'store/types';

export const selectPacksTableData = (state: AppRootState): PackTableDataType[] =>
    state.packs.tableData;
