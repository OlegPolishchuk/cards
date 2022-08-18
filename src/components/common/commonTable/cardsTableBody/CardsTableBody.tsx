import React, { useState } from 'react';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { Rating, TableBody, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { CardsTableBodyType } from 'components/common/commonTable/cardsTableBody/types';
import s from 'components/common/commonTable/CustomTable.module.scss';
import { CustomModal } from 'components/common/modals/CustomModal';
import {
    AddEditCardModal,
    AddEditModalFieldsType,
} from 'components/modalsStates/cards/addEditCardModal/AddEditCardModal';
import { DeleteCardModal } from 'components/modalsStates/cards/deleteCard/DeleteCardModal';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { deleteCardTC } from 'store/middlewares/cards/deleteCardTC';
import { editCardTC } from 'store/middlewares/cards/editCardTC';
import { CardType } from 'store/reducers/types';
import { selectUserID } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const CardsTableBody = ({ rows }: CardsTableBodyType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [currentCard, setCurrentCard] = useState({} as CardType);

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const userId = useTypedSelector(selectUserID);

    const handleShowEditModal = (card: CardType): void => {
        setCurrentCard(card);
        setShowEditModal(true);
    };

    const handleEditCard = (data: AddEditModalFieldsType): void => {
        const newData = { ...data, _id: currentCard._id };

        dispatch(editCardTC(newData));
        setShowEditModal(false);
    };

    const handleShowDeleteCard = (card: CardType): void => {
        setCurrentCard(card);
        setShowDeleteModal(true);
    };

    const handleDeleteCard = (): void => {
        dispatch(deleteCardTC(currentCard._id));
        setShowDeleteModal(false);
    };

    const handleNavigateToLearn = (card: CardType): void => {
        navigate(`/learn/${card.cardsPack_id}`);
    };

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
                    className={`${s.row} ${s.cardsRow}`}
                    onClick={() => {}}
                >
                    <TableCell>{row.question}</TableCell>
                    <TableCell>{row.answer}</TableCell>
                    <TableCell>{row.updated}</TableCell>
                    <TableCell>
                        <Rating value={row.grade} precision={0.1} readOnly />
                    </TableCell>
                    <TableCell>
                        {userId === row.user_id && (
                            <>
                                <EditOutlinedIcon
                                    className={s.icon}
                                    onClick={() => handleShowEditModal(row)}
                                />
                                <DeleteOutlineOutlinedIcon
                                    className={s.icon}
                                    onClick={() => handleShowDeleteCard(row)}
                                />
                            </>
                        )}
                        <SchoolOutlinedIcon
                            className={s.icon}
                            onClick={() => handleNavigateToLearn(row)}
                        />
                    </TableCell>
                </TableRow>
            ))}
            <CustomModal open={showEditModal} close={setShowEditModal} title="Edit card">
                <AddEditCardModal
                    callback={handleEditCard}
                    fields={{
                        question: currentCard.question,
                        answer: currentCard.answer,
                        questionType: currentCard.question,
                    }}
                />
            </CustomModal>
            <CustomModal
                open={showDeleteModal}
                close={setShowDeleteModal}
                title="Delete card"
            >
                <DeleteCardModal callback={handleDeleteCard} />
            </CustomModal>
        </TableBody>
    );
};
