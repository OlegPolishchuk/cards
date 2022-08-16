import React from 'react';

import { MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import s from './CustomSelect.module.scss';

import { CustomSelectType } from 'constants/packSelectValues/types';
import { ReturnComponentType } from 'types';

export const CustomSelect = ({
    values,
    defaultValue,
    callback,
}: CustomSelectType): ReturnComponentType => {
    const value = values.find(value => value === defaultValue);

    const handleChange = (event: SelectChangeEvent): void => {
        callback(event.target.value);
    };

    return (
        <>
            <span>Show</span>
            <Select
                className={s.select}
                size="small"
                autoWidth
                value={`${value}`}
                onChange={handleChange}
            >
                {values.map(value => (
                    <MenuItem key={value} value={value}>
                        {value}
                    </MenuItem>
                ))}
            </Select>
            <span>Cards per Page</span>
        </>
    );
};
