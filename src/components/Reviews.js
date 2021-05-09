import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Heading from './Heading';

const Reviews = () => {
  return (
    <section className='py-100'>
      <div className='container'>
        <Heading>My Reviews</Heading>
        <div className='row justify-content-center'>
          <div className='col-lg-7'>
            <div
              className='reviews pa-20'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <div className='star mb-20'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className='mb-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas molestias sunt veritatis aspernatur porro iure
                perspiciatis dignissimos reprehenderit repellat ipsa.
              </p>
              <div className='d-flex  justify-content-between align-items-center'>
                <div className=''>
                  <h5>Stive Jobs</h5>
                  <h6>England</h6>
                </div>
                <div className=''>
                  <a href='https://radiobridge.com' className='btn btn-primary'>
                    Visit Website
                  </a>
                </div>
              </div>
            </div>

            <div
              className='reviews pa-20'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <div className='star mb-20'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className='mb-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas molestias sunt veritatis aspernatur porro iure
                perspiciatis dignissimos reprehenderit repellat ipsa.
              </p>
              <div className='d-flex  justify-content-between align-items-center'>
                <div className=''>
                  <h5>Stive Jobs</h5>
                  <h6>England</h6>
                </div>
                <div className=''>
                  <a href='https://radiobridge.com' className='btn btn-primary'>
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
