import React from 'react';

import { ArrowDropDown } from '@mui/icons-material';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

import s from 'components/common/commonTable/CommonTable.module.scss';
import { OrderDirectionType } from 'components/common/commonTable/types';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setPacksTableDataAC } from 'store/actions/setPacksTableDataAC';
import { ReturnComponentType } from 'types';

export const CommonTableHead = (): ReturnComponentType => {
    const dispatch = useAppDispatch();
    const td = useTypedSelector(state => state.packs.tableData);

    const handleClick = (
        isSorted: boolean,
        direction: OrderDirectionType,
        id: number,
    ): void => {
        if (isSorted) {
            const nextDirection: OrderDirectionType =
                direction === 'asc' ? 'desc' : 'asc';

            dispatch(setPacksTableDataAC(nextDirection, id));
        }
    };

    return (
        <TableHead className={s.tableHead}>
            <TableRow>
                {td.map(td => (
                    <TableCell className={s.td} key={`${td.title}123`}>
                        {td.title}
                        {td.isSorted && (
                            <TableSortLabel
                                active
                                IconComponent={ArrowDropDown}
                                direction={td.direction}
                                onClick={() =>
                                    handleClick(td.isSorted, td.direction, td.id)
                                }
                            />
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};
