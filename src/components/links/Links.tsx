import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from 'components/links/Links.module.scss';
import { ReturnComponentType } from 'types';

export const Links = (): ReturnComponentType => {
    return (
        <div className={classes.links}>
            <NavLink to="/login">log</NavLink>
            <NavLink to="/registration">reg</NavLink>
            <NavLink to="/profile">prof</NavLink>
            <NavLink to="/password_recovery">pass_rec</NavLink>
            <NavLink to="/not_found">404</NavLink>
            <NavLink to="/enter_new_password">forgot_pass</NavLink>
            <NavLink to="/">main</NavLink>
        </div>
    );
};
