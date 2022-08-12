import React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';

import s from './BreadCrumbs.module.scss';

import { BreadCrumbsType } from 'components/breadCrumbs/type';
import { ReturnComponentType } from 'types';

export const BreadCrumbs = ({
    spanText,
    linkTo,
}: BreadCrumbsType): ReturnComponentType => {
    return (
        <NavLink to={`/${linkTo}`} className={s.breadcrumbs}>
            <ArrowBackIcon />
            <span>{spanText}</span>
        </NavLink>
    );
};
