import React, { useEffect } from 'react';

import s from './Packs.module.scss';

import { CommonTable } from 'components/common';
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
                    <CommonTable headerTitles={PackTableHeadTitles} packs={packs} />
                </div>
            </div>
        </section>
    );
};
