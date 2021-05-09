import React from 'react';

const Project = ({ children }) => {
  return (
    <article data-aos='fade-up' data-aos-delay='300'>
      <div className='project'>{children}</div>
    </article>
  );
};

export default Project;
