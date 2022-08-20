import React from 'react';
import classNames from 'classnames';
import './questionnaireStep.scss';

const QuestionnaireStep = (props) => {
  const {
    question,
    options,
    userAnswer,
    onSelectAnswer,
    onPreviousQuestion,
    onNextQuestion,
  } = props;

  return (
    <div className='questionnaire-step'>
      <div className='questionnaire-step_question'>
        <h4 className='heading-h4'>{question}</h4>
        <div className='questionnaire-step_options'>
          {options.map((option) => (
            <div
              key={option.value}
              className='option-wrapper'
              onChange={onSelectAnswer}>
              <label>
                <input
                  type='radio'
                  value={option.value}
                  checked={`${option.value}` === userAnswer}
                  data-isrejection={option.isRejection}
                />
                <div
                  className={classNames('option', {
                    isSelected: `${option.value}` === userAnswer,
                  })}
                  dangerouslySetInnerHTML={{ __html: option.display }}
                />
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className='questionnaire-step_navigation-buttons'>
        <button className='secondary-button' onClick={onPreviousQuestion}>
          Previous Question
        </button>
        <button className='primary-button' onClick={onNextQuestion}>
          Next Question
        </button>
      </div>
    </div>
  );
};

export default QuestionnaireStep;
