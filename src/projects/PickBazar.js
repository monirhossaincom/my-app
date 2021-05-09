import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import proshop from '../img/projects/proshop.jpg';
const PickBazar = () => {
  return (
    <>
      <Breadcrumb>
        <h2 className='title display-4'>
          StoryHub - React Gatsby Blog Template
        </h2>
      </Breadcrumb>
      <section className='single-project py-100'>
        <div className='container'>
          <div className='row '>
            <div className='col'>
              <LazyLoadImage
                className='img-fluid rounded-30'
                effect='blur'
                min-height='600'
                src={proshop}
                alt='Proshop'
              />
              <div className='single-project-info mt-50'>
                <div className='row justify-content-between'>
                  <div className='col-lg-7'>
                    <div className='project-desc'>dfdf</div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='project-links'>
                      <div className='project-card'>
                        <h6>Update</h6>
                        <p>15 Jan 2021</p>
                      </div>
                      <div className='project-card'>
                        <h6>Released</h6>
                        <p>15 Jan 2021</p>
                      </div>
                      <div className='project-card'>
                        <h6>Compatible</h6>
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
                      </div>
                      <div className='row'>
                        <div className='col d-grid'>
                          <a
                            href='d'
                            target='_blank'
                            className='btn btn-primary'
                          >
                            Preview
                          </a>
                        </div>
                        <div className='col d-grid'>
                          <a
                            href='d'
                            target='_blank'
                            className='btn btn-outline-primary'
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PickBazar;
