import React from 'react';

import s from 'components/cards/Cards.module.scss';
import { CardsSearch } from 'components/cards/cardsSearch/CardsSearch';
import { StyledButton } from 'components/header/styles';
import { Title } from 'components/title/Title';
import { useTypedSelector } from 'hooks';
import { selectCurrentPuckName, selectPackUserId, selectUserID } from 'store/selectors';
import { ReturnComponentType } from 'types';

export type CardsHeaderType = {
    handleShowAddModal: () => void;
};

export const CardsHeader = ({
    handleShowAddModal,
}: CardsHeaderType): ReturnComponentType => {
    const userId = useTypedSelector(selectUserID);
    const packUserId = useTypedSelector(selectPackUserId);
    const packName = useTypedSelector(selectCurrentPuckName);

    return (
        <div className={s.header}>
            <Title title={packName} />
            <div className={s.controls}>
                <CardsSearch />
                <StyledButton
                    className={`${s.mainAddBtn} ${
                        userId === packUserId ? '' : s.disabled
                    }`}
                    variant="contained"
                    color="primary"
                    disabled={userId !== packUserId}
                    onClick={handleShowAddModal}
                >
                    Add new card
                </StyledButton>
            </div>
        </div>
    );
};
