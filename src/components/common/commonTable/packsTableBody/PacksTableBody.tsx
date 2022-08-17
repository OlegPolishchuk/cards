import React, { useState } from 'react';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { Button, TableBody, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import s from 'components/common/commonTable/CustomTable.module.scss';
import { PacksTableBodyType } from 'components/common/commonTable/packsTableBody/types';
import { CustomModal } from 'components/common/modals/CustomModal';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setCurrentPuckAC } from 'store/actions/setCurrentPuckAC';
import { deletePackTC } from 'store/middlewares/packs/deletePackTC';
import { PackType } from 'store/reducers/types';
import { selectUserID } from 'store/selectors/auth';
import { ReturnComponentType } from 'types';

export const PacksTableBody = ({ rows }: PacksTableBodyType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [shoeDeleteModal, setShowDeleteModal] = useState(false);
    const [currentPack, setCurrentPack] = useState<PackType>({} as PackType);

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

    const handleShowDeleteModal = (
        e: React.MouseEvent<SVGSVGElement>,
        pack: PackType,
    ): void => {
        e.stopPropagation();
        setCurrentPack(pack);
        setShowDeleteModal(true);
    };

    const handleDeletePack = (): void => {
        dispatch(deletePackTC(currentPack._id));
        setShowDeleteModal(false);
    };

    if (rows.length === 0) {
        return (
            <TableBody>
                <TableRow>
                    <TableCell>There is no packs yet</TableCell>
                </TableRow>
            </TableBody>
        );
    }

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
                                <DeleteOutlineOutlinedIcon
                                    className={s.icon}
                                    onClick={e => handleShowDeleteModal(e, row)}
                                />
                            </>
                        )}

                        <SchoolOutlinedIcon
                            className={s.icon}
                            onClick={e => handleIconClick(e)}
                        />
                    </TableCell>
                </TableRow>
            ))}
            <CustomModal
                open={shoeDeleteModal}
                close={setShowDeleteModal}
                title="delete pack ?"
            >
                <div>
                    <p>
                        Do you really want to remove pack:{' '}
                        <span className={s.packName}>{currentPack.name}</span> ? All cards
                        will be deleted?
                    </p>
                    <Button
                        type="button"
                        variant="contained"
                        color="error"
                        onClick={handleDeletePack}
                    >
                        Delete
                    </Button>
                </div>
            </CustomModal>
        </TableBody>
    );
};
