import React from 'react';

import { Button } from '@mui/material';

import s from 'components/modalsStates/packs/deletePackModal/DeletePackMode.module.scss';
import { DeletePackModalType } from 'components/modalsStates/packs/deletePackModal/types';
import { ReturnComponentType } from 'types';

export const DeletePackModal = ({
    pack,
    callback,
}: DeletePackModalType): ReturnComponentType => {
    return (
        <div className={s.container}>
            <p>
                Do you really want to remove pack:{' '}
                <span className={s.packName}>{pack.name}</span> ? <br />
                All cards will be deleted?
            </p>
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
