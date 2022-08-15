import React, { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import s from './Packs.module.scss';

import { CommonPagination, CommonTable } from 'components/common';
import { Controls } from 'components/controls/Controls';
import { StyledButton } from 'components/header/styles';
import { Title } from 'components/title/Title';
import { DEFAULT_PAGE_COUNT } from 'constants/packsSearchParams/defaultPageCount/defaultPageCount';
import { MAX_CARD_COUNT } from 'constants/packsSearchParams/maxCardCount/maxCardCount';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setPacksSearchParamsAC } from 'store/actions';
import { fetchPackTC } from 'store/middlewares/packs/fetchPackTC';
import { PacksSortType } from 'store/reducers/types';
import { selectIsUserAuth, selectPacks, selectPacksTableData } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Packs = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    const packs = useTypedSelector(selectPacks);
    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const tableHeadData = useTypedSelector(selectPacksTableData);

    const packNameParam = searchParams.get('packName') || '';
    const minParam = Number(searchParams.get('min')) || 0;
    const maxParam = Number(searchParams.get('max')) || MAX_CARD_COUNT;
    const sortPacksParam = searchParams.get('sortPacks') || '0updated';
    const pageParam = Number(searchParams.get('page')) || 1;
    const pageCountParam = Number(searchParams.get('pageCount')) || DEFAULT_PAGE_COUNT;
    const user_idParam = searchParams.get('user_id') || '';

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
            dispatch(setPacksSearchParamsAC(searchParams));
        }
    }, [isUserAuth]);

    useEffect(() => {
        if (isUserAuth) {
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

    return (
        <section className={s.packs}>
            <div className={s.container}>
                <div className={s.header}>
                    <Title title="Pack list" />
                    <StyledButton
                        className={s.mainAddBtn}
                        variant="contained"
                        color="primary"
                    >
                        Add new pack
                    </StyledButton>
                </div>
                <Controls />
                <div className={s.table}>
                    <CommonTable packs={packs} tableHeadData={tableHeadData} />
                </div>
                <CommonPagination />
            </div>
        </section>
    );
};
