import React from 'react';

const Breadcrumb = ({ children }) => {
  return (
    <section className='breadcrumb py-120'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='breadcrumb-inner'>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
