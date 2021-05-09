import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import aboutImg from '../img/about.png';

const Promo = () => {
  return (
    <section className='promo'>
      <div className='container'>
        <div className='row justify-content-between align-items-center'>
          <div className='col-lg-7'>
            <h1 className='display-1 text-white mb-0' data-aos='fade-up'>
              Hi, I'am Monir
            </h1>
            <p
              className='lead text-white py-30 mb-0'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              I Build built websites are fast loading, accessible, and easy to
              manage.
            </p>
            <div data-aos='fade-up' data-aos-delay='500'>
              <a
                href='https://drive.google.com/file/d/101yDftp48pw6sVr4JsUCu_aLv4fpfsdt/view'
                target='_blank'
                rel='noreferrer'
                className='btn btn-primary mr-20'
              >
                Download Resume
              </a>
              <Link to='/projects' className='btn btn-outline-primary'>
                Projects
              </Link>
            </div>
          </div>
          <div className='col-lg-4 d-md-none'>
            <LazyLoadImage
              className='img-fluid'
              effect='blur'
              min-height='400'
              src={aboutImg}
              alt='Monir Hossain'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
