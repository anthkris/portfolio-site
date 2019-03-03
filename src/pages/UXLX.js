import React from "react";
import {Link} from 'gatsby';
import PersonalCaseStudyAbout from '../components/PersonalCaseStudyAbout.js';
import '../styles/case-study.scss';
import Layout from '../components/layout';

const UXLX = () =>
  <Layout>
    <div className='pt5 case-study'>
      <PersonalCaseStudyAbout
      about='UXLX is a card-based, xAPI-enabled microlearning app to help LX Designers learn lessons from User Experience Design.'
      projectRole="I acted as the front end developer, designer, and subject matter expert for this project."
      clients='Front End Developer, SME, UX Designer'
      tool='Ionic 3'
      time='About 2 months'
      projectLink='http://www.lxresearch.info/'
      job='LX Design, Front End Development, Web Design, UX Design, Conceptualising Ideas and Prototyping, Microlearning'
      />
        <div className='ph3 center mw8'>
          <section className='mt3 dib'>
            <div className='w-40-l w-100-ns  w-100 fl'>
              <h2 className='fw3'>App Development</h2>
              <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
              <p className='fw3 mt4'>Built with the Ionic framework, UXLX is a progressive web application that is usable offline and downloadable on both the iOS and Android mobile app stores. It tracks user movement across various interactions by sending xAPI statements to a learning record store. From there, such data could be reviewed in context with data from other learning experiences to get a better view of what effective learners do.</p>
              <Link className="case-study-link" to="/blog/uxlx-i-released-an-xapi-enabled-app-on-android-and-ios" title="How I built the app">Read more about the app development.</Link>
            </div>
            <div className='w-20-l w-40-ns w-100 img-center fr'>
              <img
                className='mt3'
                src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/UXLX/UXLXPhoneVideo"
                alt="UX video card in a lesson" />
            </div>
            <div className='w-40-l w-60-ns w-100 fr'>
              <img
                className='mt3'
                src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/UXLX/UXLXTabletLessonStart"
                alt="Lesson start card" />
            </div>
          </section>
          <section className='mt4 dib' id='ux-design'>
            <div className='w-40-l w-100-ns w-100 fr'>
              <h2 className='fw3'>User Experience Design and Content</h2>
              <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
              <p className='fw3 mt4'>Design-wise, I was inspired by card-based microlearning apps like Google’s Primer and Startup Patterns. I knew I wanted a user to be able to choose from a series of lessons and then swipe through cards to go through the lesson. A card might contain text, a video, or a question. I also wanted a person to be able to see their progress inside of a lesson, as well as from the home page, and be able to get back to where they were easily.</p>
            </div>
            <div className='w-20-l w-60-ns w-100 img-center fl'>
              <img
                className='mt3'
                src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/UXLX/UXLXPhoneQuestion"
                alt="Card reflection question" />
            </div>
            <div className='w-40-l w-40-ns w-100 fl'>
              <img
                className='mt3'
                src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/UXLX/UXLXTabletVideo"
                alt="UX video" />
            </div>
            <div className='w-100 img-center'>
              <iframe title="UXLX app demo" width="560" height="315" src="https://www.youtube.com/embed/N39ZQC5WlFk?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </section>
        </div>
    </div>
  </Layout>
  
export default UXLX
