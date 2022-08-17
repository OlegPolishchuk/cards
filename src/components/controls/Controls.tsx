import React, { ChangeEvent, useEffect, useState } from 'react';

import { Button, ButtonGroup, TextField } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import s from './Controls.module.scss';

import { RangeSlider } from 'components/common/rangeSlider/RangeSlider';
import { USE_DEBOUNCE_TIMER } from 'constants/useDebounceTimer/useDebounceTymer';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { useDebounce } from 'hooks/useDebounce/useDebounce';
import { setPacksNameAC } from 'store/actions';
import { setPacksUserIdAC } from 'store/actions/setPacksUserID';
import { selectUserID } from 'store/selectors/auth/selectUserID/selectUserID';
import { ReturnComponentType } from 'types';

export const Controls = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const user_id = useTypedSelector(selectUserID);

    const [searchParams, setSearchParams] = useSearchParams();

    const [activeBtnAll, setActiveBtnAll] = useState(!searchParams.get('user_id'));

    const [value, setValue] = useState(searchParams.get('packName') || '');
    const debouncedValue = useDebounce<string>(value, USE_DEBOUNCE_TIMER);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    const handleSortMy = (): void => {
        dispatch(setPacksUserIdAC(user_id));
        searchParams.set('user_id', user_id);
        setActiveBtnAll(false);

        setSearchParams(searchParams);
    };

    const handleSortAll = (): void => {
        dispatch(setPacksUserIdAC(''));
        searchParams.set('user_id', '');
        setActiveBtnAll(true);

        setSearchParams(searchParams);
    };

    console.log(searchParams.get('user_id'));
    useEffect(() => {
        dispatch(setPacksNameAC(debouncedValue));
        searchParams.set('packName', debouncedValue);

        setSearchParams(searchParams);
    }, [debouncedValue, searchParams, setSearchParams]);

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
                <Button
                    variant={activeBtnAll ? 'outlined' : 'contained'}
                    className={s.btn}
                    onClick={handleSortMy}
                >
                    My
                </Button>
                <Button
                    variant={activeBtnAll ? 'contained' : 'outlined'}
                    className={s.btn}
                    onClick={handleSortAll}
                >
                    All
                </Button>
            </ButtonGroup>
            <RangeSlider />
        </div>
    );
};
