import React, { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';

import s from './Learn.module.scss';

import { BreadCrumbs } from 'components/common';
import { LearnBody } from 'components/learn/learnBody/LearnBody';
import { LearnHeader } from 'components/learn/learnHeader/LearnHeader';
import { Title } from 'components/title/Title';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { fetchCardsData } from 'store/middlewares/cards/fetchCardsData';
import { updateGradeTC } from 'store/middlewares/cards/updateGradeTC';
import { fetchCurrentUserPackTC } from 'store/middlewares/packs/fetchCurrentUserPackTC';
import { CardType } from 'store/reducers/types';
import { selectCards, selectCurrentPuckName, selectIsUserAuth } from 'store/selectors';
import { selectIsCurrentPackAdded } from 'store/selectors/packs/selectIsCurrentPackAdded/selectIsCurrentPackAdded';
import { ReturnComponentType } from 'types';
import { getRandomCard } from 'utils/getRandomCard';

const ANSWERS = [
    'Did not know',
    'Forgot',
    'A lot of thought',
    'Confused',
    'Knew the answer',
];

export const Learn = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const { pack_id } = useParams();

    const packID: string = pack_id || '';

    const isUserAuth = useTypedSelector(selectIsUserAuth);
    const cards = useTypedSelector(selectCards);
    const isCurrentPackAdded = useTypedSelector(selectIsCurrentPackAdded);
    const packName = useTypedSelector(selectCurrentPuckName);

    const [grade, setGrade] = useState(ANSWERS[0]);
    const [showAnswers, setShowAnswers] = useState(false);
    const [firstCard, setFirstCard] = useState(true);

    const [currentCard, setCurrentCard] = useState<CardType>({
        _id: '',
        cardsPack_id: '',
        answer: '',
        question: '',
        questionImg: '',
        grade: 0,
        shots: 0,
        type: '',
        rating: 0,
        more_id: '',
        created: '',
        updated: '',
        user_id: '',
    });

    const handleChangeAnswer = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setGrade(e.target.value);
    };

    const handleNextQuestion = (): void => {
        const newGrade = ANSWERS.indexOf(grade) + 1;

        dispatch(updateGradeTC(currentCard._id, newGrade));
        setShowAnswers(false);

        if (cards.length > 0) {
            setCurrentCard(getRandomCard(cards));
        }
    };

    useEffect(() => {
        if (firstCard) {
            setFirstCard(false);
        }

        if (cards.length > 0) setCurrentCard(getRandomCard(cards));
    }, [firstCard, cards]);

    useEffect(() => {
        if (isUserAuth) {
            dispatch(fetchCardsData(packID));
        }
    }, [pack_id, isUserAuth]);

    useEffect(() => {
        if (isUserAuth) {
            if (!isCurrentPackAdded) {
                dispatch(fetchCurrentUserPackTC(packID));
            }
        }
    }, [isUserAuth, isCurrentPackAdded]);

    return (
        <section>
            <BreadCrumbs linkTo="packs" spanText="Back to Packs list" />
            <div className={s.mainContainer}>
                <Title title={`Learn ${packName}`} />
                <div className={s.wrapper}>
                    <LearnHeader card={currentCard} />
                    <LearnBody
                        card={currentCard}
                        showAnswer={showAnswers}
                        answers={ANSWERS}
                        handleChangeAnswer={handleChangeAnswer}
                        grade={grade}
                    />
                    {showAnswers ? (
                        <Button
                            className={s.btn}
                            type="button"
                            variant="contained"
                            onClick={handleNextQuestion}
                        >
                            Next
                        </Button>
                    ) : (
                        <Button
                            className={s.btn}
                            type="button"
                            variant="contained"
                            disabled={cards.length === 0}
                            onClick={() => setShowAnswers(true)}
                        >
                            Show answer
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
};
