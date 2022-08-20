import React from 'react';
import LandingHeader from './components/LandingHeader/LandingHeader';
import LandingContent from './components/LandingContent/LandingContent';
import LandingFooter from './components/LandingFooter/LandingFooter';
import './landingPage.scss';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <title>Manual | Landing</title>
      <LandingHeader />
      <LandingContent />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
