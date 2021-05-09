import React from 'react';

const Heading = ({ children }) => {
  return (
    <div className='heading text-center'>
      <h2 className='display-4 mb-40' data-aos='fade-up'>
        {children}
      </h2>
    </div>
  );
};

export default Heading;
