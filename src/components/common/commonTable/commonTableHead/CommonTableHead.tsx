import React from 'react';

import { ArrowDropDown } from '@mui/icons-material';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import s from 'components/common/commonTable/CommonTable.module.scss';
import { CommonTableHeadType } from 'components/common/commonTable/commonTableHead/types';
import { OrderDirectionType } from 'components/common/commonTable/types';
import { useAppDispatch } from 'hooks';
import { setSortPacksAC } from 'store/actions';
import { setPacksTableDataAC } from 'store/actions/setPacksTableDataAC';
import { PacksSortType } from 'store/reducers/types';
import { TableDataType } from 'store/reducers/types/TableDataType';
import { ReturnComponentType } from 'types';

export const CommonTableHead = ({
    tableHeadData,
}: CommonTableHeadType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = (td: TableDataType): void => {
        const { isSorted, id, direction, search } = td;
        const searchIndex = direction === 'asc' ? '1' : '0';

        const searchTitle = `${searchIndex}${search}` as PacksSortType;

        if (isSorted) {
            const nextDirection: OrderDirectionType =
                direction === 'asc' ? 'desc' : 'asc';

            dispatch(setPacksTableDataAC(nextDirection, id));
            dispatch(setSortPacksAC(searchTitle));

            searchParams.set('sortPacks', searchTitle);
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
