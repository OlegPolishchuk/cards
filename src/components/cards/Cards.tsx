import React, { useEffect } from 'react';

import { useParams, useSearchParams } from 'react-router-dom';

import s from './Cards.module.scss';

import { BreadCrumbs, CustomPagination, CustomTable } from 'components/common';
import { StyledButton } from 'components/header/styles';
import { Title } from 'components/title/Title';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setCardsPageAC } from 'store/actions/setCardsPageAC';
import { setCardsPageCountAC } from 'store/actions/setCardsPageCountAC';
import { fetchCardsData } from 'store/middlewares/cards/fetchCardsData';
import {
    selectCards,
    selectCardsTableHeadData,
    selectCurrentPuckName,
    selectIsUserAuth,
} from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Cards = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const { pack_id } = useParams<{ pack_id: string }>();

    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const packName = useTypedSelector(selectCurrentPuckName);

    const cards = useTypedSelector(selectCards);
    const tableHeadData = useTypedSelector(selectCardsTableHeadData);

    const page = useTypedSelector(state => state.cards.page);
    const pageCount = useTypedSelector(state => state.cards.pageCount);
    const cardsTotalCount = useTypedSelector(state => state.cards.cardsTotalCount);
    const selectValues = useTypedSelector(state => state.cards.cardsSelectValues);

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
                    className={s.mainAddBtn}
                    variant="contained"
                    color="primary"
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
        </section>
    );
};
