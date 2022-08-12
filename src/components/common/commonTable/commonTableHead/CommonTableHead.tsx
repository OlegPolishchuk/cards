import React from 'react';

import { TableCell, TableHead, TableRow } from '@mui/material';

import s from 'components/common/commonTable/CommonTable.module.scss';
import { CommonTableHeadType } from 'components/common/commonTable/commonTableHead/types';
import { ReturnComponentType } from 'types';

export const CommonTableHead = ({ titles }: CommonTableHeadType): ReturnComponentType => {
    return (
        <TableHead className={s.tableHead}>
            <TableRow>
                {titles.map(title => (
                    <TableCell key={`${title}123`}>{title}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};
