import React from 'react';
import Project from './Project';
import proshop from '../img/projects/proshop.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

const ProjectsGrid = () => {
  return (
    <section className='project-grid py-100'>
      <div className='container'>
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
  );
};

export default ProjectsGrid;
