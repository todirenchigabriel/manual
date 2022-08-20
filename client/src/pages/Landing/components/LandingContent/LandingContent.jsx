import React from 'react';
import './landingContent.scss';

const LandingContent = () => {
  return (
    <div className='content'>
      <h3 className='heading-h3'>What we can help with</h3>
      <section className='service-section'>
        <div className='service-section_images'>
          <img
            className='service-section_image'
            src={require('../../../../assets/images/Avatar1.png')}
          />
          <img
            className='service-section_background-image-right'
            src={require('../../../../assets/images/01.png')}
          />
        </div>

        <div className='service-section_description'>
          <span className='section-title'>Hair loss</span>
          <h4 className='heading-h4'>
            Hair loss needn’t be irreversible. We can help!{' '}
          </h4>
          <p className='content-description'>
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
        </div>
      </section>
      <section className='service-section'>
        <div className='service-section_description'>
          <span className='section-title'>Erectile dysfunction</span>
          <h4 className='heading-h4'>
            Erections can be a tricky thing. But no need to feel down!
          </h4>
          <p className='content-description'>
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
        </div>
        <div className='service-section_images'>
          <img
            className='service-section_image'
            src={require('../../../../assets/images/Avatar2.png')}
          />
          <img
            className='service-section_background-image-left'
            src={require('../../../../assets/images/02.png')}
          />
        </div>
      </section>
    </div>
  );
};

export default LandingContent;
