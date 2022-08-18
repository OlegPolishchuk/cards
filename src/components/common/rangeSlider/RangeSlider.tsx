import React, { ChangeEvent, useEffect, useState } from 'react';

import { Slider, TextField } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import s from 'components/controls/Controls.module.scss';
import { MAX_CARDS_COUNT, MIN_CARDS_COUNT } from 'constants/cardsCount/cardsCountSlider';
import { USE_DEBOUNCE_TIMER } from 'constants/useDebounceTimer/useDebounceTymer';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { useDebounce } from 'hooks/useDebounce/useDebounce';
import { setMaxCardsCountAC, setMinCardsCountAC } from 'store/actions';
import { selectMaxCardCount, selectMinCardsCount } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const RangeSlider = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const minCount = useTypedSelector(selectMinCardsCount);
    const maxCount = useTypedSelector(selectMaxCardCount);

    const minSliderValue = Number(searchParams.get('min')) || minCount;
    const maxSliderVue = Number(searchParams.get('max')) || maxCount;

    const [sliderValue, setSliderValue] = useState([minSliderValue, maxSliderVue]);
    const debouncedValue = useDebounce(sliderValue, USE_DEBOUNCE_TIMER);

    const handleSliderChange = (event: Event, newValue: number | number[]): void => {
        setSliderValue(newValue as number[]);
    };

    const valuetext = (value: number): string => {
        return `${value}`;
    };

    const handleChangeMinCount = (event: ChangeEvent<HTMLInputElement>): void => {
        if (sliderValue[0] < 0) {
            setSliderValue(sliderValue => [MIN_CARDS_COUNT, sliderValue[1]]);
        } else {
            setSliderValue(sliderValue => [Number(event.target.value), sliderValue[1]]);
        }
    };

    const handleChangeMaxCount = (event: ChangeEvent<HTMLInputElement>): void => {
        if (sliderValue[1] > MAX_CARDS_COUNT) {
            setSliderValue(sliderValue => [sliderValue[0], MAX_CARDS_COUNT]);
        }
        setSliderValue(sliderValue => [sliderValue[0], Number(event.target.value)]);
    };

    useEffect(() => {
        dispatch(setMinCardsCountAC(sliderValue[0]));
        dispatch(setMaxCardsCountAC(sliderValue[1]));
        searchParams.set('min', sliderValue[0].toString());
        searchParams.set('max', sliderValue[1].toString());
        setSearchParams(searchParams);
    }, [debouncedValue]);

    return (
        <div className={s.sliderContainer}>
            <TextField
                value={sliderValue[0]}
                variant="outlined"
                size="small"
                className={s.sliderInput}
                onChange={handleChangeMinCount}
            />
            <Slider
                value={sliderValue}
                min={MIN_CARDS_COUNT}
                max={MAX_CARDS_COUNT}
                onChange={handleSliderChange}
                className={s.slider}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
            />
            <TextField
                value={sliderValue[1]}
                variant="outlined"
                size="small"
                className={s.sliderInput}
                onChange={handleChangeMaxCount}
            />
        </div>
    );
};
