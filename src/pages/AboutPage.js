import React from 'react';
import AboutOverview from '../components/AboutOverview';
import Breadcrumb from '../components/Breadcrumb';
import Counterup from '../components/Counterup';
import Meta from '../components/Meta';
import Reviews from '../components/Reviews';

const AboutPage = () => {
  return (
    <div>
      <Meta title={`About Monir Hossain`} />
      <Breadcrumb>
        <h2 className='title display-1'>About Me</h2>
      </Breadcrumb>
      <AboutOverview />
      <Counterup />
      <Reviews />
    </div>
  );
};

export default AboutPage;
