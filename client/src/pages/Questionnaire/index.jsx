import React, { useState } from 'react';
import QuestionnaireResult from './components/QuestionnaireResult';
import QuestionnaireStep from './components/QuestionnaireStep';
import JSON_DATA from '../../data';
import './questionnairePage.scss';

const QUESTIONNAIRE_START_INDEX = 0;
const QUESTIONNAIRE_END_INDEX = 2;
const IS_REJECTION_ATTRIBUTE = 'data-isrejection';

const QuestionnairePage = () => {
  const [questions, setQuestions] = useState(
    JSON_DATA.questions.map((question) => ({ ...question, userAnswer: null }))
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    QUESTIONNAIRE_START_INDEX
  );
  const [isCompleted, setIsCompleted] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  const navigateToNext = () => {
    const hasUnansweredQuestions =
      questions.find((question) => question.userAnswer === null) !== undefined;

    if (
      currentQuestionIndex !== QUESTIONNAIRE_END_INDEX &&
      hasUnansweredQuestions
    ) {
      return setCurrentQuestionIndex(
        (currentQuestionIndex) => currentQuestionIndex + 1
      );
    }

    if (!hasUnansweredQuestions) {
      // show result page
      setIsCompleted(true);
    }
  };

  const navigateToPrevious = () => {
    if (currentQuestionIndex !== QUESTIONNAIRE_START_INDEX) {
      setCurrentQuestionIndex(
        (currentQuestionIndex) => currentQuestionIndex - 1
      );
    }
  };

  const handleSelectAnswer = (event) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].userAnswer = event.target.value;
    const isRejection = event.target.getAttribute(IS_REJECTION_ATTRIBUTE);

    if (isRejection === 'true') {
      return setIsRejected(true);
    }

    setQuestions(updatedQuestions);
    navigateToNext();
  };

  return (
    <div>
      <title>Manual | Questionnaire</title>
      {(isCompleted || isRejected) && (
        <QuestionnaireResult isRejection={isRejected} />
      )}
      {!isCompleted && !isRejected && (
        <QuestionnaireStep
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          userAnswer={questions[currentQuestionIndex].userAnswer}
          onSelectAnswer={handleSelectAnswer}
          onNextQuestion={navigateToNext}
          onPreviousQuestion={navigateToPrevious}
        />
      )}
    </div>
  );
};

export default QuestionnairePage;
