import React from 'react';

import { useParams } from 'react-router-dom';

import { ReturnComponentType } from 'types';

export const PasswordRecovery = (): ReturnComponentType => {
    const { token } = useParams();

    return <div>Password recovery {token}</div>;
};
