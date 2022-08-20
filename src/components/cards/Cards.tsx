import React, { useEffect, useState } from 'react';

import { useParams, useSearchParams } from 'react-router-dom';

import s from './Cards.module.scss';

import { CardsHeader } from 'components/cards/cardsHeader/CardsHeader';
import { BreadCrumbs, CustomPagination, CustomTable } from 'components/common';
import { CustomModal } from 'components/common/modals/CustomModal';
import {
    AddEditCardModal,
    AddEditModalFieldsType,
} from 'components/modalsStates/cards/addEditCardModal/AddEditCardModal';
import { MAX_CARDS_COUNT, MIN_CARDS_COUNT } from 'constants/cardsCount/cardsCountSlider';
import { CARDS_SELECT_VALUE_MIN } from 'constants/cardsSelectValues/cardsSelectValues';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setCardsPageAC } from 'store/actions/setCardsPageAC';
import { setCardsPageCountAC } from 'store/actions/setCardsPageCountAC';
import { setCardsSearchParamsAC } from 'store/actions/setCardsSearchParamsAC';
import { addNewCardTC } from 'store/middlewares/cards/addNewCardTC';
import { fetchCardsData } from 'store/middlewares/cards/fetchCardsData';
import { CardsSortType } from 'store/reducers/types';
import {
    selectCards,
    selectCardsPage,
    selectCardsPageCount,
    selectCardsSelectValues,
    selectCardsTableHeadData,
    selectCardsTotalCount,
    selectIsUserAuth,
} from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Cards = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const [showAddModal, setShowModal] = useState(false);

    const { pack_id } = useParams<{ pack_id: string }>();

    const isUserAuth = useTypedSelector(selectIsUserAuth);

    const cards = useTypedSelector(selectCards);
    const tableHeadData = useTypedSelector(selectCardsTableHeadData);

    const page = useTypedSelector(selectCardsPage);
    const pageCount = useTypedSelector(selectCardsPageCount);
    const cardsTotalCount = useTypedSelector(selectCardsTotalCount);
    const selectValues = useTypedSelector(selectCardsSelectValues);

    const cardQuestionParam = searchParams.get('cardQuestion') || '';
    const sortCardsParam = searchParams.get('sortCards') || '0updated';
    const pageParam = Number(searchParams.get('page')) || 1;
    const pageCountParam =
        Number(searchParams.get('pageCount')) || CARDS_SELECT_VALUE_MIN;
    const minParam = Number(searchParams.get('min')) || MIN_CARDS_COUNT;
    const maxParam = Number(searchParams.get('max')) || MAX_CARDS_COUNT;
    const cardsPack_idParam = pack_id || '';

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
        console.log('useEffect => setSearchParams');
        const searchParams = {
            cardQuestion: cardQuestionParam,
            cardsPack_id: cardsPack_idParam,
            min: minParam,
            max: maxParam,
            sortCards: sortCardsParam as CardsSortType,
            page: pageParam,
            pageCount: pageCountParam,
        };

        if (isUserAuth) {
            dispatch(setCardsSearchParamsAC(searchParams));
        }
    }, [isUserAuth]);

    useEffect(() => {
        if (isUserAuth) {
            if (pack_id) {
                console.log('useEffect => fetching cards');
                dispatch(fetchCardsData(pack_id));
            }
        }
    }, [
        isUserAuth,
        pack_id,
        cardQuestionParam,
        sortCardsParam,
        pageParam,
        pageCountParam,
        minParam,
        maxParam,
    ]);
    console.log('cards rendered');

    return (
        <section className={s.cards}>
            <BreadCrumbs linkTo="packs" spanText="Back to Packs list" />
            <CardsHeader handleShowAddModal={handleShowAddModal} />
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
                <AddEditCardModal btnTitle="Add new card" callback={handleAddNewCard} />
            </CustomModal>
        </section>
    );
};
