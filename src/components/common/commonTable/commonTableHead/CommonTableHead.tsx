import React from 'react';

import { ArrowDropDown } from '@mui/icons-material';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import s from 'components/common/commonTable/CommonTable.module.scss';
import { OrderDirectionType } from 'components/common/commonTable/types';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setSortPacksAC } from 'store/actions';
import { setPacksTableDataAC } from 'store/actions/setPacksTableDataAC';
import { PacksSortType } from 'store/reducers/types';
import { PackTableDataType } from 'store/reducers/types/PackTableDataType';
import { ReturnComponentType } from 'types';

export const CommonTableHead = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const td = useTypedSelector(state => state.packs.tableData);

    console.log(td);

    const handleClick = (td: PackTableDataType): void => {
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
                {td.map(td => (
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
