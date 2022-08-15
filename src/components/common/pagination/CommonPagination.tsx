import React from 'react';

import { Pagination } from '@mui/material';

import { useTypedSelector } from 'hooks';
import { ReturnComponentType } from 'types';

export const CommonPagination = (): ReturnComponentType => {
    const page = useTypedSelector(state => state.packs.page);
    const pageCount = useTypedSelector(state => state.packs.pageCount);
    // const cardsPackTotalCount = useTypedSelector(state => state.packs.cardPackTotalCount);

    // const totalPageCount = Math.ceil(cardsPackTotalCount / pageCount);

    console.log(page);
    console.log(pageCount);

    return (
        <div>
            <Pagination page={page} count={pageCount} />
        </div>
    );
};
