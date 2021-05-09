import React from 'react';
import BlogGrid from '../components/BlogGrid';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';

const BlogPage = () => {
  return (
    <div>
      <Meta title={`Monir's Blog`} />
      <Breadcrumb>
        <h2 className='display-1 title'>My Blog</h2>
      </Breadcrumb>
      <BlogGrid />
    </div>
  );
};

export default BlogPage;
