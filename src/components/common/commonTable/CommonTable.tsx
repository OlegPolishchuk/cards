import React from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import s from './CommonTable.module.scss';

import { CardsTableBody } from 'components/common/commonTable/cardsTableBody/CardsTableBody';
import { CommonTableHead } from 'components/common/commonTable/commonTableHead/CommonTableHead';
import { PacksTableBody } from 'components/common/commonTable/packsTableBody/PacksTableBody';
import { CommonTableType } from 'components/common/commonTable/types';
import { ReturnComponentType } from 'types';

export const CommonTable = ({
    packs,
    cards,
    tableHeadData,
}: CommonTableType): ReturnComponentType => {
    return (
        <TableContainer component={Paper} className={s.container}>
            <Table>
                <CommonTableHead tableHeadData={tableHeadData} />
                {packs && <PacksTableBody rows={packs} />}
                {cards && <CardsTableBody rows={cards} />}
            </Table>
        </TableContainer>
    );
};
