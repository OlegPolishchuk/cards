import React from 'react';

import { ArrowDropDown } from '@mui/icons-material';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import s from 'components/common/commonTable/CustomTable.module.scss';
import { CommonTableHeadType } from 'components/common/commonTable/customTableHead/types';
import { OrderDirectionType } from 'components/common/commonTable/types';
import { useAppDispatch } from 'hooks';
import { setSortPacksAC } from 'store/actions';
import { setCardsTableDataAC } from 'store/actions/setCardsTableDataAC';
import { setPacksTableDataAC } from 'store/actions/setPacksTableDataAC';
import { setSortCardAC } from 'store/actions/setSortCardAC';
import { CardsSortType, PacksSortType } from 'store/reducers/types';
import { TableDataType } from 'store/reducers/types/TableDataType';
import { ReturnComponentType } from 'types';

export const CustomTableHead = ({
    tableHeadData,
}: CommonTableHeadType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = (td: TableDataType): void => {
        const { isSorted, id, direction, search, type } = td;
        const searchIndex = direction === 'asc' ? '1' : '0';

        const searchTitle = `${searchIndex}${search}` as PacksSortType & CardsSortType;

        if (isSorted) {
            const nextDirection: OrderDirectionType =
                direction === 'asc' ? 'desc' : 'asc';

            if (type === 'pack') {
                dispatch(setPacksTableDataAC(nextDirection, id));
                dispatch(setSortPacksAC(searchTitle));
            }

            if (type === 'card') {
                dispatch(setCardsTableDataAC(nextDirection, id));
                dispatch(setSortCardAC(searchTitle));
            }

            searchParams.set(type === 'pack' ? 'sortPacks' : 'sortCards', searchTitle);
            setSearchParams(searchParams);
        }
    };

    return (
        <TableHead className={s.tableHead}>
            <TableRow className={s.row}>
                {tableHeadData.map(td => (
                    <TableCell key={`${td.title}123`}>
                        {td.title}
                        {td.isSorted && (
                            <TableSortLabel
                                active
                                IconComponent={ArrowDropDown}
                                direction={td.direction}
                                onClick={() => handleClick(td)}
                            />
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};
