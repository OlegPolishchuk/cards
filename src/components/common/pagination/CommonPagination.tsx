import React, { useMemo } from 'react';

import { Pagination } from '@mui/material';

import s from './CommonPagination.module.scss';

import { CommonPaginationType } from 'components/common/pagination/types';
import { ReturnComponentType } from 'types';

export const CommonPagination = ({
    page,
    pageCount,
    itemsTotalCount,
    callback,
}: CommonPaginationType): ReturnComponentType => {
    const totalPageCount = useMemo(() => {
        return Math.ceil(itemsTotalCount / pageCount);
    }, [itemsTotalCount, pageCount]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
        callback(value);
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
