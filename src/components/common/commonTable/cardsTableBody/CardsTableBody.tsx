import React from 'react';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { Rating, TableBody, TableCell, TableRow } from '@mui/material';

import { CardsTableBodyType } from 'components/common/commonTable/cardsTableBody/types';
import s from 'components/common/commonTable/CustomTable.module.scss';
import { ReturnComponentType } from 'types';

export const CardsTableBody = ({ rows }: CardsTableBodyType): ReturnComponentType => {
    if (rows.length === 0) {
        return (
            <TableBody>
                <TableRow>
                    <TableCell>There is no cards yet</TableCell>
                </TableRow>
            </TableBody>
        );
    }

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
                    <TableCell>
                        <Rating value={row.grade} precision={0.1} readOnly />
                    </TableCell>
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
