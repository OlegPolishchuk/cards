import React from 'react';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import s from 'components/common/commonTable/CustomTable.module.scss';
import { PacksTableBodyType } from 'components/common/commonTable/packsTableBody/types';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setCurrentPuckAC } from 'store/actions/setCurrentPuckAC';
import { PackType } from 'store/reducers/types';
import { selectUserID } from 'store/selectors/auth';
import { ReturnComponentType } from 'types';

export const PacksTableBody = ({ rows }: PacksTableBodyType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const userId = useTypedSelector(selectUserID);

    const handleRowClick = (
        e: React.MouseEvent<HTMLTableRowElement>,
        pack: PackType,
    ): void => {
        e.stopPropagation();
        dispatch(setCurrentPuckAC(pack));

        navigate(`${pack._id}`);
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
                    onClick={e => handleRowClick(e, row)}
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
