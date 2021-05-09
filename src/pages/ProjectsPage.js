import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import ProjectsGrid from '../components/ProjectsGrid';

const ProjectsPage = () => {
  return (
    <>
      <Meta title={`Projects by Monir Hossain`} />
      <Breadcrumb>
        <h2 className='title display-1'>My Projects</h2>
      </Breadcrumb>
      <ProjectsGrid></ProjectsGrid>
    </>
  );
};

export default ProjectsPage;
