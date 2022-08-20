import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../../assets/images/Logo.svg';
import { ROUTES } from '../../../../constants';
import './landingHeader.scss';

const LandingHeader = () => {
  const navigate = useNavigate();

  return (
    <header className='header'>
      <div className='header_logo'>
        <Logo />
      </div>
      <div className='header_container'>
        <h1 className='heading-h1'>Be good to yourself</h1>
        <p className='content-description'>
          We’re working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
        <button
          className='primary-button'
          onClick={() => navigate(ROUTES.QUESTIONNAIRE)}>
          Take Quiz
        </button>
      </div>
    </header>
  );
};

export default LandingHeader;
