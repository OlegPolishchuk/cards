import React from 'react';

import { Button, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

import s from 'components/modalsStates/cards/addEditCardModal/AddEditCardModal.module.scss';
import { ReturnComponentType } from 'types';

export type AddEditModalFieldsType = {
    question: string;
    answer: string;
    questionType?: string;
};

export type AddEditModalType = {
    fields?: AddEditModalFieldsType;
    callback: (data: AddEditModalFieldsType) => void;
};

export const AddEditCardModal = ({
    fields,
    callback,
}: AddEditModalType): ReturnComponentType => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AddEditModalFieldsType>({ mode: 'onSubmit' });

    const submit: SubmitHandler<AddEditModalFieldsType> = data => {
        callback(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={s.form}>
            <div className={s.fieldBox}>
                <span className={s.fieldTitle}>Choose a question format</span>
                <TextField
                    size="small"
                    defaultValue={fields?.questionType}
                    variant="outlined"
                    {...register('questionType', {
                        required: true,
                    })}
                />
                <span className={s.error}>{errors.questionType && 'Required'}</span>
            </div>

            <div className={s.fieldBox}>
                <span className={s.fieldTitle}>Question</span>
                <TextField
                    size="small"
                    defaultValue={fields?.question}
                    variant="outlined"
                    {...register('question', {
                        required: true,
                    })}
                />
                <span className={s.error}>{errors.question && 'Required'}</span>
            </div>

            <div className={s.fieldBox}>
                <span className={s.fieldTitle}>Answer</span>
                <TextField
                    size="small"
                    defaultValue={fields?.answer}
                    variant="outlined"
                    {...register('answer', {
                        required: true,
                    })}
                />
                <span className={s.error}>{errors.answer && 'Required'}</span>
            </div>
            <div className={s.btnGroup}>
                <Button type="button" variant="outlined" data-action="close">
                    Cansel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Add pack
                </Button>
            </div>
        </form>
    );
};
