import React from 'react';

import { LearnHeaderType } from 'components/learn/learnHeader/types';
import s from 'pages/learn/Learn.module.scss';
import { ReturnComponentType } from 'types';

export const LearnHeader = ({ card }: LearnHeaderType): ReturnComponentType => {
    return (
        <div className={s.header}>
            {card._id === '' ? (
                <h3 className={s.questionTitle}> There is nothing to learn</h3>
            ) : (
                <>
                    <h3 className={s.questionTitle}>{card.question}</h3>
                    <span className={s.tooltip}>Count of shots: {card.shots}</span>
                </>
            )}
        </div>
    );
};
