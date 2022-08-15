import React, { useMemo } from 'react';

import { Pagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import s from './CommonPagination.module.scss';

import { useAppDispatch, useTypedSelector } from 'hooks';
import { setPacksPageAC } from 'store/actions/setPacksPageAC';
import {
    selectCardPacksTotalCount,
    selectPacksPage,
    selectPacksPageCount,
} from 'store/selectors';
import { ReturnComponentType } from 'types';

export const CommonPagination = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const page = useTypedSelector(selectPacksPage);
    const pageCount = useTypedSelector(selectPacksPageCount);
    const cardsPackTotalCount = useTypedSelector(selectCardPacksTotalCount);

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
