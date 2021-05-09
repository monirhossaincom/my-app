import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import proshop from '../img/projects/proshop.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
const OneBlog = () => {
  return (
    <>
      <Breadcrumb>
        <h2 className='title display-4'>Getting tickets to the big show</h2>
        <h6 className='mt-40 mb-0 post-date text-white'>
          <FontAwesomeIcon icon={faClock} /> 24 April 2021{' '}
          <span className='mr-20'></span>
          <FontAwesomeIcon icon={faUser} /> Monir Hossain
        </h6>
      </Breadcrumb>
      <section className='single-post py-100'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12'>
              <LazyLoadImage
                effect='blur'
                className='img-fluid'
                src={proshop}
                alt=''
              />
            </div>
            <div className='col-lg-8 mt-40'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                excepturi autem esse suscipit dolorum doloribus iusto libero
                cumque quae, similique nam tenetur perspiciatis in aperiam et
                optio! Ipsa, dolore dolor.
              </p>

              <h4>First, solve the problem. Then write the code.</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OneBlog;
