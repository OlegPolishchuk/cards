import React, { useEffect, useState } from 'react';

import { TextField } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { USE_DEBOUNCE_TIMER } from 'constants/useDebounceTimer/useDebounceTymer';
import { useAppDispatch } from 'hooks';
import { useDebounce } from 'hooks/useDebounce/useDebounce';
import { setCardsSearchQuestionAC } from 'store/actions/setCardsSearchQuestionAC';
import { ReturnComponentType } from 'types';

export const CardsSearch = (): ReturnComponentType => {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const [value, setValue] = useState('');

    const debouncedValue = useDebounce<string>(value, USE_DEBOUNCE_TIMER);

    useEffect(() => {
        dispatch(setCardsSearchQuestionAC(value));
        searchParams.set('cardQuestion', value);

        setSearchParams(searchParams);
    }, [debouncedValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    return (
        <TextField
            variant="outlined"
            label="Search"
            size="small"
            onChange={handleChange}
        />
    );
};
