import React from 'react';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { TableBody, TableCell, TableRow } from '@mui/material';

import s from 'components/common/commonTable/CommonTable.module.scss';
import { CommonTableBodyType } from 'components/common/commonTable/commonTableBody/types';
import { ReturnComponentType } from 'types';

export const CommonTableBody = ({ rows }: CommonTableBodyType): ReturnComponentType => {
    return (
        <TableBody>
            {rows.map(row => (
                <TableRow key={`${row.name}${row.created}`} hover className={s.row}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.cardsCount}</TableCell>
                    <TableCell>{row.updated}</TableCell>
                    <TableCell>{row.user_name}</TableCell>
                    <TableCell>
                        <EditOutlinedIcon className={s.icon} />
                        <DeleteOutlineOutlinedIcon className={s.icon} />
                        <SchoolOutlinedIcon className={s.icon} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
