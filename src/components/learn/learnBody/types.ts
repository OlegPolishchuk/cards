import React from 'react';

import { CardType } from 'store/reducers/types';

export type LearnBodyType = {
    card: CardType;
    showAnswer: boolean;
    answers: string[];
    handleChangeAnswer: (e: React.ChangeEvent<HTMLInputElement>) => void;
    grade: string;
};
