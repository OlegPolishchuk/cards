import React, { ChangeEvent, useState } from 'react';

import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

import defaultCover from 'assets/images/defaultDeckCover.png';
import s from 'components/modalsStates/cards/addEditCardModal/AddEditCardModal.module.scss';
import { useAppDispatch } from 'hooks';
import { ReturnComponentType } from 'types';
import { convertFileToBase64 } from 'utils/convertFileToBase64';
import { errorHandler } from 'utils/errorHandler';

export type AddNewPackType = {
    callback: (data: AddNewPackFieldType) => void;
};

export type AddNewPackFieldType = {
    name: string;
    isPrivate: boolean;
    deckCover: string;
};

export const AddNewPack = ({ callback }: AddNewPackType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [deckCover, setDeckCover] = useState(defaultCover);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AddNewPackFieldType>({ mode: 'onSubmit' });

    const submit: SubmitHandler<AddNewPackFieldType> = data => {
        const newData = {
            ...data,
            deckCover,
        };

        callback(newData);
        reset();
    };

    const handleUpload = (e: ChangeEvent<HTMLInputElement>): void => {
        try {
            convertFileToBase64(e, (file64: string) => {
                setDeckCover(file64);
            });
        } catch (e) {
            errorHandler(e as Error, dispatch);
        }
    };

    return (
        <form className={s.form} onSubmit={handleSubmit(submit)}>
            <div className={`${s.fieldBox} ${s.addCoverBtnWrapper}`}>
                <label htmlFor="add-pack-cover">
                    <span className={s.addCoverBtn}>
                        Change deck cover
                        <CloudDownloadOutlinedIcon className={s.coverBtnIcon} />
                    </span>
                    <input
                        className={s.addCoverInput}
                        type="file"
                        accept={'image/*'}
                        id="add-pack-cover"
                        onChange={handleUpload}
                    />
                </label>
                <img className={s.deckCoverImg} src={defaultCover} alt="deck cover" />
            </div>
            <div className={s.fieldBox}>
                <span className={s.fieldTitle}>Pack name</span>
                <TextField
                    variant="outlined"
                    size="small"
                    autoFocus
                    {...register('name', { required: true })}
                />
                <span className={s.error}>{errors.name && 'Required'}</span>
            </div>
            <div className={s.fieldBox}>
                <FormControlLabel
                    control={<Checkbox {...register('isPrivate')} />}
                    label="Private pack"
                />
            </div>
            <div className={s.btnGroup}>
                <Button type="button" data-action="close" variant="outlined">
                    Cansel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Add pack
                </Button>
            </div>
        </form>
    );
};
