import React from 'react';

import { Button } from '@mui/material';

import s from './DeleteCardModal.module.scss';

import { DeleteCardModalType } from 'components/modalsStates/cards/deleteCard/types';
import { ReturnComponentType } from 'types';

export const DeleteCardModal = ({
    callback,
}: DeleteCardModalType): ReturnComponentType => {
    return (
        <div className={s.container}>
            <p>Do you really want to remove this card?</p>
            <div className={s.btnGroup}>
                <Button
                    type="button"
                    variant="contained"
                    color="error"
                    onClick={callback}
                    className={s.deleteBtn}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
};
