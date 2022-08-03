import React from 'react';

import { Title } from 'components/title/Title';
import { UserPhoto } from 'components/userPhoto/UserPhoto';
import { ReturnComponentType } from 'types';

export const Profile = (): ReturnComponentType => {
    return (
        <div>
            <Title title="Personal information" />
            <UserPhoto variant="standard" />
        </div>
    );
};
