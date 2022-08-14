import React from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import s from './CommonTable.module.scss';

import { CommonTableBody } from 'components/common/commonTable/commonTableBody/CommonTableBody';
import { CommonTableHead } from 'components/common/commonTable/commonTableHead/CommonTableHead';
import { CommonTableType } from 'components/common/commonTable/types';
import { ReturnComponentType } from 'types';

export const CommonTable = ({
    packs,
    tableHeadData,
}: CommonTableType): ReturnComponentType => {
    return (
        <TableContainer component={Paper} className={s.container}>
            <Table>
                <CommonTableHead tableHeadData={tableHeadData} />
                <CommonTableBody rows={packs} />
            </Table>
        </TableContainer>
    );
};
