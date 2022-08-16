import React from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import { CardsTableBody } from 'components/common/commonTable/cardsTableBody/CardsTableBody';
import s from 'components/common/commonTable/CustomTable.module.scss';
import { CustomTableHead } from 'components/common/commonTable/customTableHead/CustomTableHead';
import { PacksTableBody } from 'components/common/commonTable/packsTableBody/PacksTableBody';
import { CommonTableType } from 'components/common/commonTable/types';
import { ReturnComponentType } from 'types';

export const CustomTable = ({
    packs,
    cards,
    tableHeadData,
}: CommonTableType): ReturnComponentType => {
    return (
        <TableContainer component={Paper} className={s.container}>
            <Table>
                <CustomTableHead tableHeadData={tableHeadData} />
                {packs && <PacksTableBody rows={packs} />}
                {cards && <CardsTableBody rows={cards} />}
            </Table>
        </TableContainer>
    );
};
