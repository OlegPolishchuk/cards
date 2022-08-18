import React from 'react';

import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from '@mui/material';

import { LearnBodyType } from 'components/learn/learnBody/types';
import s from 'pages/learn/Learn.module.scss';
import { ReturnComponentType } from 'types';

export const LearnBody = ({
    card,
    answers,
    handleChangeAnswer,
    grade,
    showAnswer,
}: LearnBodyType): ReturnComponentType => {
    return (
        <div className={`${s.answerGroup} ${showAnswer ? s.show : ''}`}>
            {showAnswer && (
                <>
                    <p className={s.answer}>Answer: {card.answer}</p>
                    <FormControl>
                        <FormLabel id="radio-buttons-group-label">
                            Rate yourself:
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={grade}
                            onChange={handleChangeAnswer}
                        >
                            {answers.map(answer => (
                                <FormControlLabel
                                    key={`${answer}`}
                                    value={answer}
                                    control={<Radio />}
                                    label={answer}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </>
            )}
        </div>
    );
};
