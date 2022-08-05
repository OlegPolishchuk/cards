import React, { ChangeEvent, useState, KeyboardEvent } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { TextField } from '@mui/material';

import s from './UserDescription.module.css';

import { UserDescriptionType } from 'components/userDescription/type';
import { ReturnComponentType } from 'types';

export const UserDescription = ({
    userName,
    userEmail,
    callback,
}: UserDescriptionType): ReturnComponentType => {
    const [inputValue, setInputValue] = useState(userName);
    const [edit, setEdit] = useState(false);

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.currentTarget.value);
    };

    const changeUserNameHandler = (): void => {
        if (callback) {
            callback(inputValue);
        }

        setEdit(false);
    };

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            changeUserNameHandler();
        }
    };

    return (
        <div>
            <div className={s.editableName}>
                {edit ? (
                    <>
                        <TextField
                            id="outlined-size-small"
                            size="small"
                            value={inputValue}
                            onChange={onChangeInputHandler}
                            onKeyPress={onKeyPressHandler}
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
