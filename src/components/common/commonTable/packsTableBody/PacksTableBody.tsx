import React, { useState } from 'react';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import defaultDeckCover from 'assets/images/defaultDeckCover.png';
import s from 'components/common/commonTable/CustomTable.module.scss';
import { PacksTableBodyType } from 'components/common/commonTable/packsTableBody/types';
import { CustomModal } from 'components/common/modals/CustomModal';
import { AddNewPackFieldType } from 'components/modalsStates/packs/addNewPack/AddNewPack';
import { DeletePackModal } from 'components/modalsStates/packs/deletePackModal/DeletePackModal';
import { EditPackModal } from 'components/modalsStates/packs/editPackModal/EditPackModal';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setCurrentPuckAC } from 'store/actions/setCurrentPuckAC';
import { deletePackTC } from 'store/middlewares/packs/deletePackTC';
import { updatePackTC } from 'store/middlewares/packs/updatePackTC';
import { PackType } from 'store/reducers/types';
import { selectUserID } from 'store/selectors/auth';
import { ReturnComponentType } from 'types';

export const PacksTableBody = ({ rows }: PacksTableBodyType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [shoeDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

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

    const handleShowEditModal = (
        e: React.MouseEvent<SVGSVGElement>,
        pack: PackType,
    ): void => {
        e.stopPropagation();
        setCurrentPack(pack);
        setShowEditModal(true);
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

    const handleEditPack = (data: AddNewPackFieldType): void => {
        const newData = { ...data, _id: currentPack._id };

        dispatch(updatePackTC(newData));
        setShowEditModal(false);
    };

    const handleRedirectToLearn = (
        e: React.MouseEvent<SVGSVGElement>,
        pack: PackType,
    ): void => {
        e.stopPropagation();

        dispatch(setCurrentPuckAC(pack));

        navigate(`/learn/${pack._id}`);
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
                    <TableCell
                        className={s.deckCoverWrapper}
                        style={{
                            backgroundImage: `url(${
                                row.deckCover ? row.deckCover : defaultDeckCover
                            })`,
                        }}
                    >
                        {/* <img */}
                        {/*    src={row.deckCover !== '' ? row.deckCover : defaultDeckCover} */}
                        {/*    alt="deck cover" */}
                        {/*    className={s.deckCover} */}
                        {/* /> */}
                        {row.name}
                    </TableCell>
                    <TableCell>{row.cardsCount}</TableCell>
                    <TableCell>{row.updated}</TableCell>
                    <TableCell>{row.user_name}</TableCell>
                    <TableCell>
                        {userId === row.user_id && (
                            <>
                                <EditOutlinedIcon
                                    className={s.icon}
                                    onClick={e => handleShowEditModal(e, row)}
                                />
                                <DeleteOutlineOutlinedIcon
                                    className={s.icon}
                                    onClick={e => handleShowDeleteModal(e, row)}
                                />
                            </>
                        )}

                        <SchoolOutlinedIcon
                            className={s.icon}
                            onClick={e => handleRedirectToLearn(e, row)}
                        />
                    </TableCell>
                </TableRow>
            ))}
            <CustomModal
                open={shoeDeleteModal}
                close={setShowDeleteModal}
                title="delete pack ?"
            >
                <DeletePackModal pack={currentPack} callback={handleDeletePack} />
            </CustomModal>
            <CustomModal open={showEditModal} close={setShowEditModal} title="Edit pack?">
                <EditPackModal pack={currentPack} callback={handleEditPack} />
            </CustomModal>
        </TableBody>
    );
};
