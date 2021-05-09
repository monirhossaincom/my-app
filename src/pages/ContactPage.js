import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ContactForm from '../components/ContactForm';
import Meta from '../components/Meta';

const ContactPage = () => {
  return (
    <>
      <Meta title={`Contact Monir Hossain`} />
      <Breadcrumb>
        <h1 className='display-1 title'>Contact Me</h1>
      </Breadcrumb>
      <ContactForm />
    </>
  );
};

export default ContactPage;
