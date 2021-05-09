import React from 'react';
import CountUp from 'react-countup';
const Counterup = () => {
  return (
    <section className='counterup py-100 bg-light'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-lg-3 col-6 pa-20 text-center'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            <h2 className='display-1 mb-30'>
              <CountUp end={30} />
            </h2>
            <h3>Happy Clients</h3>
          </div>
          <div
            className='col-lg-3 col-6 pa-20 text-center'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <h2 className='display-1 mb-30'>
              <CountUp end={3} />
            </h2>
            <h3>Freebies Items</h3>
          </div>
          <div
            className='col-lg-3 col-6 pa-20 text-center'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <h2 className='display-1 mb-30'>
              <CountUp end={3} />
            </h2>
            <h3>Blog Posts</h3>
          </div>
          <div
            className='col-lg-3 col-6 pa-20 text-center'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <h2 className='display-1 mb-30'>
              <CountUp end={0} />
            </h2>
            <h3>YouTube Videos</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counterup;
