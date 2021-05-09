import { faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Services = () => {
  return (
    <>
      <div className='col-lg-4'>
        <div
          className='service text-center'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <FontAwesomeIcon icon={faReact} size='4x' />
          <h4 className='py-10'>Frontend Development</h4>
          <p>
            The apperance and usability of application is the way to success. I
            will create for you an app that users will love.
          </p>
        </div>
      </div>
      <div className='col-lg-4'>
        <div
          className='service text-center'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          <FontAwesomeIcon icon={faServer} size='4x' />
          <h4 className='py-10'>Backend Development</h4>
          <p>
            I am expert in full stack of MERN STACK including MongoDB,
            ExpressJs, ReactJS, and NodeJS.
          </p>
        </div>
      </div>
      <div className='col-lg-4'>
        <div
          className='service text-center'
          data-aos='fade-up'
          data-aos-delay='400'
        >
          <FontAwesomeIcon icon={faWordpress} size='4x' />
          <h4 className='py-10'>WordPress Developement</h4>
          <p>
            I will help you to customise your Wordpress Theme and configure it
            according to your demands.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
