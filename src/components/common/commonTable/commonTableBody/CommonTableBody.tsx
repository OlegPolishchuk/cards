import React from 'react';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { TableBody, TableCell, TableRow } from '@mui/material';

import s from 'components/common/commonTable/CommonTable.module.scss';
import { CommonTableBodyType } from 'components/common/commonTable/commonTableBody/types';
import { useTypedSelector } from 'hooks';
import { selectUserID } from 'store/selectors/auth';
import { ReturnComponentType } from 'types';

export const CommonTableBody = ({ rows }: CommonTableBodyType): ReturnComponentType => {
    const userId = useTypedSelector(selectUserID);

    const handleRowClick = (e: React.MouseEvent<HTMLTableRowElement>): void => {
        e.stopPropagation();
        console.log(e.currentTarget.tagName);
    };

    const handleIconClick = (e: React.MouseEvent<SVGSVGElement>): void => {
        e.stopPropagation();
        console.log('icon click');
    };

    return (
        <TableBody>
            {rows.map(row => (
                <TableRow
                    key={`${row.name}${row.created}`}
                    hover
                    className={s.row}
                    onClick={handleRowClick}
                >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.cardsCount}</TableCell>
                    <TableCell>{row.updated}</TableCell>
                    <TableCell>{row.user_name}</TableCell>
                    <TableCell>
                        {userId === row.user_id && (
                            <>
                                <EditOutlinedIcon className={s.icon} />
                                <DeleteOutlineOutlinedIcon className={s.icon} />
                            </>
                        )}

                        <SchoolOutlinedIcon
                            className={s.icon}
                            onClick={e => handleIconClick(e)}
                        />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
