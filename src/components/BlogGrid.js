import React from 'react';
import proshop from '../img/projects/proshop.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
const BlogGrid = () => {
  return (
    <section className='blog-grid py-100'>
      <div className='container'>
        <div className='row '>
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
  );
};

export default BlogGrid;
