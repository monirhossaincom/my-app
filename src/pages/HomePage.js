import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import proshop from '../img/projects/proshop.jpg';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import Project from '../components/Project';
import Promo from '../components/Promo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import Meta from '../components/Meta';
import Services from '../components/Services';

const HomePage = () => {
  return (
    <>
      <Meta title={`Welcome to Monir's Portfolio`} />
      <Promo></Promo>
      {/* Latest Projects */}
      <section className='py-100'>
        <div className='container'>
          <Heading>Latest Projects</Heading>
          <div className='row'>
            <div className='col-lg-6'>
              <Project>
                <Link to='/pick-bazar'>
                  <LazyLoadImage
                    className='img-fluid'
                    effect='blur'
                    min-height='306'
                    src={proshop}
                    alt='Proshop'
                  />
                </Link>

                <div className='project-info'>
                  <ul className='project-lang'>
                    <li>
                      <span className='lang-dot html'></span>HTML
                    </li>
                    <li>
                      <span className='lang-dot css'></span>CSS
                    </li>
                    <li>
                      <span className='lang-dot bt'></span>Bootstrap
                    </li>
                  </ul>
                  <Link className='project-link' to='/pick-bazar'>
                    <h5>StoryHub - React Gatsby Blog Template</h5>
                  </Link>
                  <p>
                    FireMobile allow users to login/register simply with their
                    mobile number. No more password or email required.
                  </p>
                </div>
              </Project>
            </div>
          </div>
        </div>
      </section>

      <section className='py-100 bg-light testimonial'>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-lg-8' data-aos='fade-up' data-aos-delay='300'>
              <h2 className='display-6 testimonial-content'>
                Monir was absolutely a great help. He delivered a fully working
                website with PHP and database in just half a day. 5 star
                service!
              </h2>
              <div className='star py-30'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>Tom L</h4>
              <p className='lead'>
                Owner of{' '}
                <a href='http://www.travelexpressuk.com/'>Travel Express</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='py-100'>
        <div className='container'>
          <Heading>My Services</Heading>
          <div className='row'>
            <Services />
          </div>
        </div>
      </section>
      <section className='py-100 bg-light testimonial'>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-lg-8' data-aos='fade-up' data-aos-delay='300'>
              <h2 className='display-6 testimonial-content'>
                Super keen. Hard working, fast, flexible, neat code - Monir was
                a pleasure to work and collaborate with on the project. Thanks
                very much,
              </h2>
              <div className='star py-20'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>Javid D</h4>
              <p className='lead'>
                Owner of <a href='http://controlpost.org/'>Control Post</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='py-100'>
        <div className='container'>
          <Heading>Recent Blog</Heading>
          <div className='row'>
            <div className='col-lg-4'>
              <article className='post' data-aos='fade-up' data-aos-delay='300'>
                <Link to='/blog/one-blog'>
                  <LazyLoadImage
                    className='img-fluid'
                    effect='blur'
                    src={proshop}
                    alt=''
                  />
                </Link>
                <div className='post-content'>
                  <Link to='/blog/one-blog' className='post-title'>
                    <h5 className='mb-0'>Getting tickets to the big show</h5>
                  </Link>
                  <h6 className='py-10 mb-0'>
                    <FontAwesomeIcon icon={faClock} /> {''} 24 April 2021
                  </h6>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form...
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
