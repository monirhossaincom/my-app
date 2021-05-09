import React from 'react';
import emailjs from 'emailjs-com';
function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_ww0s1zg',
      'template_6y5r7ek',
      e.target,
      'user_djGYuinKWe7ZBKADnEbsX'
    )
    .then(
      function (response) {
        //console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        alert('Email sent successfully!');
      },
      function (error) {
        //console.log("FAILED", error);
        alert('FAILED!' + error);
      }
    );
  e.target.reset();
}
const ContactForm = () => {
  return (
    <div className='py-100'>
      <div className='container'>
        <div className='row justify-content-around'>
          <div className='col-lg-7' data-aos='fade-up' data-aos-delay='300'>
            <form className='row contact-form mb-md-30' onSubmit={sendEmail}>
              <div className='col-lg-6 mb-30'>
                <div className='input-group'>
                  <label>Name</label>
                  <input
                    className='form-control'
                    type='text'
                    name='user_name'
                  />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='input-group mb-30'>
                  <label>Email</label>
                  <input
                    className='form-control'
                    type='email'
                    name='user_email'
                  />
                </div>
              </div>

              <div className='input-group mb-30'>
                <label>Message</label>
                <textarea className='form-control' name='message' rows='6' />
              </div>
              <div className='d-grid'>
                <input
                  className='btn py-10 btn-primary'
                  type='submit'
                  value='Submit'
                />
              </div>
            </form>
          </div>
          <div className='col-lg-4' data-aos='fade-up' data-aos-delay='500'>
            <div className='contact-info pa-20 rounded border'>
              <div className='mb-30'>
                <h5>Address</h5>
                <p>Tejkunipara, Tejgaon, Dhaka 1215, Bangladesh</p>
              </div>
              <div className='mb-30'>
                <h5>Email</h5>
                <p>monirair@yahoo.com</p>
              </div>
              <div>
                <h5>Whatsapp</h5>
                <p className='mb-0'>+8801710021512</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
