import React, { useMemo } from 'react';

import { Pagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import s from './CommonPagination.module.scss';

import { useAppDispatch, useTypedSelector } from 'hooks';
import { setPacksPageAC } from 'store/actions/setPacksPageAC';
import { ReturnComponentType } from 'types';

export const CommonPagination = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const page = useTypedSelector(state => state.packs.page);
    const pageCount = useTypedSelector(state => state.packs.pageCount);
    const cardsPackTotalCount = useTypedSelector(
        state => state.packs.cardPacksTotalCount,
    );

    const totalPageCount = useMemo(() => {
        return Math.ceil(cardsPackTotalCount / pageCount);
    }, [cardsPackTotalCount, pageCount]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
        dispatch(setPacksPageAC(value));
        searchParams.set('page', `${value}`);

        setSearchParams(searchParams);
    };

    return (
        <div className={s.container}>
            <Pagination
                page={page}
                count={totalPageCount}
                shape="rounded"
                color="primary"
                onChange={handleChange}
            />
        </div>
    );
};
