import React, { ChangeEvent, useEffect, useState } from 'react';

import { Button, ButtonGroup, Slider, TextField } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import s from './Controls.module.scss';

import { USE_DEBOUNCE_TIMER } from 'constants/useDebounceTimer/useDebounceTymer';
import { useAppDispatch } from 'hooks';
import { useDebounce } from 'hooks/useDebounce/useDebounce';
import { setPacksNameAC } from 'store/actions';
import { ReturnComponentType } from 'types';

export const Controls = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const [value, setValue] = useState(searchParams.get('packName') || '');
    const debouncedValue = useDebounce<string>(value, USE_DEBOUNCE_TIMER);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    useEffect(() => {
        console.log(debouncedValue);
        dispatch(setPacksNameAC(debouncedValue));
        searchParams.set('packName', debouncedValue);

        setSearchParams(searchParams);
    }, [debouncedValue]);

    return (
        <div className={s.controls}>
            <TextField
                value={value}
                label="Search"
                variant="outlined"
                size="small"
                className={s.search}
                onChange={handleChange}
            />
            <ButtonGroup className={s.btnContainer}>
                <Button variant="outlined" className={s.btn}>
                    My
                </Button>
                <Button variant="outlined" className={s.btn}>
                    All
                </Button>
            </ButtonGroup>
            <div className={s.sliderContainer}>
                <span className={s.sliderValue} />
                <Slider />
                <span className={s.sliderValue} />
            </div>
        </div>
    );
};
