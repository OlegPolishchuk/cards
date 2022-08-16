import React, { useMemo } from 'react';

import { Pagination } from '@mui/material';

import s from 'components/common/pagination/CustomPagination.module.scss';
import { CustomSelect } from 'components/common/pagination/customSelect/CustomSelect';
import { CommonPaginationType } from 'components/common/pagination/types';
import { ReturnComponentType } from 'types';

export const CustomPagination = ({
    page,
    pageCount,
    itemsTotalCount,
    paginationChangeCallback,
    selectValues,
    selectChangeCallback,
}: CommonPaginationType): ReturnComponentType => {
    const totalPageCount = useMemo(() => {
        return Math.ceil(itemsTotalCount / pageCount);
    }, [itemsTotalCount, pageCount]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
        paginationChangeCallback(value);
    };

    return (
        <div className={s.container}>
            <Pagination
                page={page}
                count={totalPageCount}
                shape="rounded"
                color="primary"
                onChange={handleChange}
                className={s.pagination}
            />
            <CustomSelect
                values={selectValues || []}
                defaultValue={pageCount}
                callback={selectChangeCallback}
            />
        </div>
    );
};
