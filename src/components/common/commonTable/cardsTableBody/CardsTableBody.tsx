import React from 'react';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { TableBody, TableCell, TableRow } from '@mui/material';

import { CardsTableBodyType } from 'components/common/commonTable/cardsTableBody/types';
import s from 'components/common/commonTable/CustomTable.module.scss';
import { ReturnComponentType } from 'types';

export const CardsTableBody = ({ rows }: CardsTableBodyType): ReturnComponentType => {
    return (
        <TableBody>
            {rows.map(row => (
                <TableRow
                    key={`${row._id}${row.created}`}
                    hover
                    className={s.row}
                    onClick={() => {}}
                >
                    <TableCell>{row.question}</TableCell>
                    <TableCell>{row.answer}</TableCell>
                    <TableCell>{row.updated}</TableCell>
                    <TableCell>{row.grade}</TableCell>
                    <TableCell>
                        <EditOutlinedIcon className={s.icon} />
                        <DeleteOutlineOutlinedIcon className={s.icon} />
                        <SchoolOutlinedIcon className={s.icon} onClick={() => {}} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
