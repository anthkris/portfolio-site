import React from 'react';
import Contact from '../components/Contact.js';
import Social from '../components/Social.js';
import Layout from '../components/layout';


const ContactMe = () =>
  <Layout>
    <section id="contact-me" className='center mw8 db ph3 pt3 pb5'>
      <div className='center mw8 db ph3 pt3 pb5'>
        <h1>Get at Me</h1>
        <p>Use the form below to send me an email. Or get in touch with me here: kristin@knanthony.com</p>
        <div className='contact-form mb5'>
          <Contact />
        </div>
        <h2>I also Social</h2>
        <p>You can also reach out on social media.</p>
        <Social />
      </div>
    </section>
  </Layout>

export default ContactMe;
