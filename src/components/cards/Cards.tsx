import React, { useEffect, useState } from 'react';

import { useParams, useSearchParams } from 'react-router-dom';

import s from './Cards.module.scss';

import { BreadCrumbs, CustomPagination, CustomTable } from 'components/common';
import { CustomModal } from 'components/common/modals/CustomModal';
import { StyledButton } from 'components/header/styles';
import {
    AddEditCardModal,
    AddEditModalFieldsType,
} from 'components/modalsStates/cards/addEditCardModal/AddEditCardModal';
import { Title } from 'components/title/Title';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setCardsPageAC } from 'store/actions/setCardsPageAC';
import { setCardsPageCountAC } from 'store/actions/setCardsPageCountAC';
import { addNewCardTC } from 'store/middlewares/cards/addNewCardTC';
import { fetchCardsData } from 'store/middlewares/cards/fetchCardsData';
import {
    selectCards,
    selectCardsTableHeadData,
    selectCurrentPuckName,
    selectIsUserAuth,
    selectUserID,
    selectPackUserId,
    selectCardsPage,
    selectCardsPageCount,
    selectCardsTotalCount,
    selectCardsSelectValues,
} from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Cards = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const [showAddModal, setShowModal] = useState(false);

    const { pack_id } = useParams<{ pack_id: string }>();

    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const packName = useTypedSelector(selectCurrentPuckName);

    const cards = useTypedSelector(selectCards);
    const tableHeadData = useTypedSelector(selectCardsTableHeadData);

    const userId = useTypedSelector(selectUserID);
    const packUserId = useTypedSelector(selectPackUserId);

    const page = useTypedSelector(selectCardsPage);
    const pageCount = useTypedSelector(selectCardsPageCount);
    const cardsTotalCount = useTypedSelector(selectCardsTotalCount);
    const selectValues = useTypedSelector(selectCardsSelectValues);

    const handlePaginationChange = (value: number): void => {
        dispatch(setCardsPageAC(value));
        searchParams.set('page', value.toString());

        setSearchParams(searchParams);
    };

    const handleSelectChange = (value: string): void => {
        dispatch(setCardsPageCountAC(Number(value)));
        searchParams.set('pageCount', value);

        setSearchParams(searchParams);
    };

    const handleShowAddModal = (): void => {
        setShowModal(true);
    };

    const handleAddNewCard = (data: AddEditModalFieldsType): void => {
        dispatch(addNewCardTC(data));
        setShowModal(false);
    };

    useEffect(() => {
        if (isUserAuth) {
            if (pack_id) {
                dispatch(fetchCardsData(pack_id));
            }
        }
    }, [isUserAuth, pack_id, searchParams]);

    return (
        <section className={s.cards}>
            <BreadCrumbs linkTo="packs" spanText="Back to Packs list" />
            <div className={s.header}>
                <Title title={packName} />
                <StyledButton
                    className={`${s.mainAddBtn} ${
                        userId === packUserId ? '' : s.disabled
                    }`}
                    variant="contained"
                    color="primary"
                    disabled={userId !== packUserId}
                    onClick={handleShowAddModal}
                >
                    Add new card
                </StyledButton>
            </div>
            <div className={s.table}>
                <CustomTable cards={cards} tableHeadData={tableHeadData} />
            </div>
            <CustomPagination
                page={page}
                pageCount={pageCount}
                itemsTotalCount={cardsTotalCount}
                paginationChangeCallback={handlePaginationChange}
                selectValues={selectValues}
                selectChangeCallback={handleSelectChange}
            />
            <CustomModal open={showAddModal} close={setShowModal} title="Add new card">
                <AddEditCardModal callback={handleAddNewCard} />
            </CustomModal>
        </section>
    );
};
