import React, { ChangeEvent, useState } from 'react';

import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { SubmitHandler, useForm } from 'react-hook-form';

import s from 'components/modalsStates/cards/addEditCardModal/AddEditCardModal.module.scss';
import { useAppDispatch } from 'hooks';
import { ReturnComponentType } from 'types';
import { convertFileToBase64 } from 'utils/convertFileToBase64';
import { errorHandler } from 'utils/errorHandler';

export type AddEditModalFieldsType = {
    question: string;
    answer: string;
    questionImg?: string;
};

export type QuestionType = 'text' | 'img';

export type AddEditModalType = {
    fields?: AddEditModalFieldsType;
    callback: (data: AddEditModalFieldsType) => void;
    btnTitle: string;
};

export const AddEditCardModal = ({
    fields,
    callback,
    btnTitle,
}: AddEditModalType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    console.log(fields);
    const [questionType, setQuestionType] = useState<QuestionType>(
        fields?.questionImg ? 'img' : 'text',
    );
    const [questionImg, setQuestionImg] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AddEditModalFieldsType>({ mode: 'onSubmit' });

    const submit: SubmitHandler<AddEditModalFieldsType> = data => {
        if (questionType === 'img') {
            const newData = {
                ...data,
                questionImg,
            };

            callback(newData);
        } else {
            callback(data);
        }

        reset();
    };

    const handleChangeQuestionType = (event: SelectChangeEvent): void => {
        setQuestionType(event.target.value as QuestionType);
    };

    const handleUpload = (e: ChangeEvent<HTMLInputElement>): void => {
        try {
            convertFileToBase64(e, (file64: string) => {
                setQuestionImg(file64);
            });
        } catch (e) {
            errorHandler(e as Error, dispatch);
        }
    };

    console.log(questionImg);

    return (
        <>
            <div className={s.fieldBox}>
                <InputLabel id="question-type-select-label">Question type</InputLabel>
                <Select
                    className={s.questionTypeSelect}
                    labelId="question-type-select-label"
                    id="question-type-select"
                    size="small"
                    value={questionType}
                    onChange={handleChangeQuestionType}
                >
                    <MenuItem value="text">Text</MenuItem>
                    <MenuItem value="img">Img</MenuItem>
                </Select>
            </div>
            <form onSubmit={handleSubmit(submit)} className={s.form}>
                {questionType !== 'text' && (
                    <>
                        <label
                            htmlFor="card-question-input"
                            className={s.questionTypeBtnWrapper}
                        >
                            <input
                                className={s.addCoverInput}
                                type="file"
                                id="card-question-input"
                                onChange={handleUpload}
                            />
                            <Button
                                variant="outlined"
                                component="span"
                                endIcon={<CloudDownloadOutlinedIcon />}
                                className={s.questionTypeBtn}
                            >
                                Download question
                            </Button>
                        </label>
                        {(questionImg !== '' || fields?.questionImg) && (
                            <img
                                className={s.questionImg}
                                src={questionImg || fields?.questionImg}
                                alt="question"
                            />
                        )}
                    </>
                )}
                {questionType === 'text' && (
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
                )}
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
                        {btnTitle}
                    </Button>
                </div>
            </form>
        </>
    );
};
