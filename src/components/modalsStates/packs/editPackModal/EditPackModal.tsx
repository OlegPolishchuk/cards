import React from 'react';

import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

import s from 'components/modalsStates/cards/addEditCardModal/AddEditCardModal.module.scss';
import { PackType } from 'store/reducers/types';
import { ReturnComponentType } from 'types';

export type EditPackType = {
    pack: PackType;
    callback: (data: AddNewPackFieldType) => void;
};

export type AddNewPackFieldType = {
    name: string;
    isPrivate: boolean;
    deckCover: string;
};

export const EditPackModal = ({ callback, pack }: EditPackType): ReturnComponentType => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AddNewPackFieldType>({ mode: 'onSubmit' });

    const submit: SubmitHandler<AddNewPackFieldType> = data => {
        callback(data);
        reset();
    };

    console.log(pack.private);

    return (
        <form className={s.form} onSubmit={handleSubmit(submit)}>
            <div className={s.fieldBox}>
                <span className={s.fieldTitle}>Pack name</span>
                <TextField
                    defaultValue={pack.name}
                    variant="outlined"
                    size="small"
                    autoFocus
                    {...register('name', { required: true })}
                />
                <span className={s.error}>{errors.name && 'Required'}</span>
            </div>
            <div className={s.fieldBox}>
                <FormControlLabel
                    control={
                        <Checkbox
                            {...register('isPrivate')}
                            defaultChecked={pack.private}
                        />
                    }
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
