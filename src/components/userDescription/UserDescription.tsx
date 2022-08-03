import React, { useState } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { TextField } from '@mui/material';

import s from './UserDescription.module.css';

import { useTypedSelector } from 'hooks';
import { ReturnComponentType } from 'types';

export const UserDescription = (): ReturnComponentType => {
    const userName = useTypedSelector(state => state.auth.name);
    const userEmail = useTypedSelector(state => state.auth.email);

    const [edit, setEdit] = useState(false);

    const changeUserNameHandler = (): void => {
        setEdit(false);
    };

    return (
        <div>
            <div className={s.editableName}>
                {edit ? (
                    <>
                        <TextField
                            id="outlined-size-small"
                            defaultValue="Small"
                            size="small"
                            value={userName}
                        />
                        <SaveIcon className={s.editBtn} onClick={changeUserNameHandler} />
                    </>
                ) : (
                    <>
                        <span className={s.name}>
                            {userName || 'You are not authorised'}
                        </span>
                        <EditIcon className={s.editBtn} onClick={() => setEdit(true)} />
                    </>
                )}
            </div>
            <p>{userEmail}</p>
        </div>
    );
};
