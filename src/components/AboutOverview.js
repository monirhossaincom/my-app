import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import aboutImg from '../img/about.png';
const AboutOverview = () => {
  return (
    <section className='py-100'>
      <div className='container'>
        <div className='row justify-content-around align-items-center'>
          <div className='col-lg-4 mb-md-30 text-center'>
            <LazyLoadImage
              className='img-fluid mx-auto'
              effect='blur'
              src={aboutImg}
              alt='Monir'
            />
          </div>
          <div className='col-lg-6' data-aos='fade-up'>
            <div className='about-me'>
              <h6>About Me</h6>
              <h3 className='mb-30'>Monir Hossain</h3>
              <p>
                I am a Freelance website developer from Bangladesh. I Build
                built websites are fast loading, accessible, and easy to manage.
                My design partners will help you improve conversion rates and
                user engagement.
              </p>
              <p>
                I truly live by the motto "work smarter, not harder." I feel
                that is the best way to deliver a client what they need in the
                shortest amount of time possible.
              </p>

              <ul className='project-lang mb-30'>
                <li>
                  <span className='lang-dot  html'></span> HTML
                </li>
                <li>
                  <span className='lang-dot  css'></span> CSS
                </li>
                <li>
                  <span className='lang-dot  js'></span> JavaScript
                </li>
                <li>
                  <span className='lang-dot  mdb'></span> MongoDB
                </li>
                <li>
                  <span className='lang-dot  sass'></span> Sass
                </li>
              </ul>

              <a
                href='https://drive.google.com/file/d/101yDftp48pw6sVr4JsUCu_aLv4fpfsdt/view'
                target='_blank'
                rel='noreferrer'
                className='btn btn-primary'
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
