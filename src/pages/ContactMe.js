import React from 'react';
import Contact from '../components/Contact.js';
import Social from '../components/Social.js';


const ContactMe = () =>
    <section id="contact-me">
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

export default ContactMe;
