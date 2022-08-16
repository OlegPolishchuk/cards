import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import s from './Cards.module.scss';

import { BreadCrumbs } from 'components/common';
import { StyledButton } from 'components/header/styles';
import { Title } from 'components/title/Title';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { fetchCardsData } from 'store/middlewares/cards/fetchCardsData';
import { selectIsUserAuth } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Cards = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const { pack_id } = useParams<{ pack_id: string }>();

    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const packName = useTypedSelector(state => state.cards.currentPack.name);

    useEffect(() => {
        if (isUserAuth) {
            if (pack_id) {
                dispatch(fetchCardsData(pack_id));
            }
        }
    }, [isUserAuth, pack_id]);

    return (
        <section className={s.cards}>
            <BreadCrumbs linkTo="packs" spanText="Back to Packs list" />
            <div className={s.header}>
                <Title title={packName} />
                <StyledButton
                    className={s.mainAddBtn}
                    variant="contained"
                    color="primary"
                >
                    Add new pack
                </StyledButton>
            </div>
        </section>
    );
};
