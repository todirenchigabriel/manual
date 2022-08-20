import React from 'react';
import classNames from 'classnames';
import './questionnaireResult.scss';

const QuestionnaireResult = ({ isRejection }) => {
  const result = {
    rejection: (
      <div>
        Unfortunately, we are unable to prescribe this medication for you. This
        is because finasteride can alter the PSA levels, which maybe used to
        monitor for cancer. You should discuss this further with your GP or
        specialist if you would still like this medication.
      </div>
    ),

    success: (
      <div>
        Great news! We have the perfect treatment for your hair loss. Proceed to
        <a href='https://www.manual.com'> www.manual.com</a>, and prepare to say
        hello to your new hair!
      </div>
    ),
  };
  return (
    <div
      className={classNames('questionnaire-result', {
        'dark-theme': isRejection,
      })}>
      {isRejection ? result.rejection : result.success}
    </div>
  );
};

export default QuestionnaireResult;
