import React, { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import s from './Packs.module.scss';

import { CustomPagination, CustomTable } from 'components/common';
import { CustomModal } from 'components/common/modals/CustomModal';
import { Controls } from 'components/controls/Controls';
import { StyledButton } from 'components/header/styles';
import {
    AddNewPack,
    AddNewPackFieldType,
} from 'components/modalsStates/packs/addNewPack/AddNewPack';
import { Title } from 'components/title/Title';
import { DEFAULT_PAGE_COUNT } from 'constants/packsSearchParams/defaultPageCount/defaultPageCount';
import { MAX_CARD_COUNT } from 'constants/packsSearchParams/maxCardCount/maxCardCount';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setPacksSearchParamsAC } from 'store/actions';
import { setPacksPageAC } from 'store/actions/setPacksPageAC';
import { setPacksPageCountAC } from 'store/actions/setPacksPageCountAC';
import { createPackTC } from 'store/middlewares/packs/createPackTC';
import { fetchPackTC } from 'store/middlewares/packs/fetchPackTC';
import { PacksSortType } from 'store/reducers/types';
import {
    selectCardPacksTotalCount,
    selectIsUserAuth,
    selectPacks,
    selectPacksPage,
    selectPacksPageCount,
    selectPacksSelectValues,
    selectPacksTableData,
} from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Packs = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const packs = useTypedSelector(selectPacks);
    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const tableHeadData = useTypedSelector(selectPacksTableData);

    const page = useTypedSelector(selectPacksPage);
    const pageCount = useTypedSelector(selectPacksPageCount);
    const cardsPackTotalCount = useTypedSelector(selectCardPacksTotalCount);

    const selectValues = useTypedSelector(selectPacksSelectValues);

    const [showAddCardModal, setShowAddCardModal] = useState(false);

    const packNameParam = searchParams.get('packName') || '';
    const minParam = Number(searchParams.get('min')) || 0;
    const maxParam = Number(searchParams.get('max')) || MAX_CARD_COUNT;
    const sortPacksParam = searchParams.get('sortPacks') || '0updated';
    const pageParam = Number(searchParams.get('page')) || 1;
    const pageCountParam = Number(searchParams.get('pageCount')) || DEFAULT_PAGE_COUNT;
    const user_idParam = searchParams.get('user_id') || '';

    const handlePaginationChange = (value: number): void => {
        dispatch(setPacksPageAC(value));
        searchParams.set('page', `${value}`);

        setSearchParams(searchParams);
    };

    const handleSelectChange = (value: string): void => {
        const pageCount = Number(value);

        dispatch(setPacksPageCountAC(pageCount));
        searchParams.set('pageCount', value);

        setSearchParams(searchParams);
    };

    const handleShowModal = (): void => {
        setShowAddCardModal(true);
    };

    const handleAddNewPack = (fields: AddNewPackFieldType): void => {
        dispatch(createPackTC(fields));

        setShowAddCardModal(false);
    };

    useEffect(() => {
        const searchParams = {
            packName: packNameParam,
            min: minParam,
            max: maxParam,
            sortPacks: sortPacksParam as PacksSortType,
            page: pageParam,
            pageCount: pageCountParam,
            user_id: user_idParam,
        };

        if (isUserAuth) {
            console.log('useEffect with search params inside if');
            dispatch(setPacksSearchParamsAC(searchParams));
        }
    }, [isUserAuth]);

    useEffect(() => {
        if (isUserAuth) {
            console.log('useEffect with fetchPackTC');
            dispatch(fetchPackTC());
        }
    }, [
        dispatch,
        isUserAuth,
        packNameParam,
        minParam,
        maxParam,
        sortPacksParam,
        pageParam,
        pageCountParam,
        user_idParam,
    ]);
    console.log('packs rendered');

    return (
        <section className={s.packs}>
            <div className={s.container}>
                <div className={s.header}>
                    <Title title="Pack list" />
                    <StyledButton
                        className={s.mainAddBtn}
                        variant="contained"
                        color="primary"
                        onClick={handleShowModal}
                    >
                        Add new pack
                    </StyledButton>
                </div>
                <Controls />
                <div className={s.table}>
                    <CustomTable packs={packs} tableHeadData={tableHeadData} />
                </div>
                <CustomPagination
                    page={page}
                    pageCount={pageCount}
                    itemsTotalCount={cardsPackTotalCount}
                    paginationChangeCallback={handlePaginationChange}
                    selectValues={selectValues}
                    selectChangeCallback={handleSelectChange}
                />
            </div>
            <CustomModal
                open={showAddCardModal}
                close={() => setShowAddCardModal(false)}
                title="test Modal"
            >
                <AddNewPack callback={handleAddNewPack} />
            </CustomModal>
        </section>
    );
};
