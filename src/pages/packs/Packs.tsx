import React, { useEffect } from 'react';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

import s from './Packs.module.scss';

import { Controls } from 'components/controls/Controls';
import { StyledButton } from 'components/header/styles';
import { Title } from 'components/title/Title';
import { PackTableHeadTitles } from 'constants/PackTableHeadTitles/PackTableHeadTitles';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { setAllPacksTC } from 'store/middlewares/packs/setAllPacksTC';
import { selectIsUserAuth, selectPacks } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Packs = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const packs = useTypedSelector(selectPacks);
    const isUserAuth = useTypedSelector(selectIsUserAuth);

    console.log(packs);

    useEffect(() => {
        if (isUserAuth) {
            dispatch(setAllPacksTC());
        }
    }, [isUserAuth]);

    return (
        <section className={s.packs}>
            <div className={s.container}>
                <div className={s.header}>
                    <Title title="Pack list" />
                    <StyledButton variant="contained" color="primary">
                        Add new pack
                    </StyledButton>
                </div>
                <Controls />
                <div className={s.table}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead className={s.tableHead}>
                                <TableRow>
                                    {PackTableHeadTitles.map(title => (
                                        <TableCell key={`${title}123`}>{title}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {packs.map(pack => (
                                    <TableRow key={pack.name} hover>
                                        <TableCell>{pack.name}</TableCell>
                                        <TableCell>{pack.cardsCount}</TableCell>
                                        <TableCell>{pack.updated}</TableCell>
                                        <TableCell>{pack.created}</TableCell>
                                        <TableCell>
                                            <EditOutlinedIcon className={s.icon} />
                                            <DeleteOutlineOutlinedIcon
                                                className={s.icon}
                                            />
                                            <SchoolOutlinedIcon className={s.icon} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </section>
    );
};
