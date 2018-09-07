import React from "react";
import Link from 'gatsby-link';
import PersonalCaseStudyAbout from '../components/PersonalCaseStudyAbout.js';
import '../styles/case-study.scss';

const UXLX = () =>
  <div className='pt5 case-study'>
    <PersonalCaseStudyAbout
    about='The Restaurant Reviews site is a progressive web application built in three parts for the Udacity Mobile Web Specialist nanodegree.'
    role="I acted as the web developer."
    clients='Web Developer, UX Designer'
    tool='ES6'
    time='About 4 months'
    projectLink='https://ka-mws-project.netlify.com/'
    job='Web Development, Web Design, UX Design, Conceptualising Ideas and Prototyping'
    />
      <div className='ph3 center mw8'>
        <section className='mt3 dib'>
          <div className='w-40-l w-100-ns  w-100 fl'>
            <h2 className='fw3'>Udacity Nanodegree</h2>
            <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
            <p className='fw3 mt4'>I was fortunate enough to be selected for a Grow with Google scholarship to complete the Udacity Mobile Web Specialist nanodegree. Besides learning more about building progressive web applications, tooling for web development, ES6, developing for accessibility, and more, the nanodegree was structured such that participants would apply their newfound knowledge to building a restaurant review applicaiton in three parts.</p>
          </div>
          <div className='w-50-l w-100-ns w-100 img-center fr'>
            <img
              className='mt3'
              src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1536361288/portfolio/MWS/UdacityMWSDesktop"
              alt="UX video card in a lesson" />
          </div>
        </section>
        <section className='mt4 dib' id='ux-design'>
          <div className='w-40-l w-100-ns w-100 fr'>
            <h2 className='fw3'>App Design and Development</h2>
            <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
            <p className='fw3 mt4'>The nanodegree experience was very helpful. At each stage of the development, I was able to face a challenge of a desireable difficulty. On the whole, I was able to successfully develop the app by adding the following features:</p>
            <ul>
              <li>Adding accessibility features</li>
              <li>Implementing mobile-first design</li>
              <li>Implementing a service worker with indexedDB to cache files, images, and data</li>
              <li>Implement offline capability so that reviews and favorites could be submitted offline and synced later online</li>
            </ul>
            <a className="case-study-link" href="https://github.com/anthkris/mws-restaurant-stage-1" title="Github project for MWS">Read more about each stage app development in Github.</a>
          </div>
          <div className='w-20-l w-30-ns w-100 img-center fl'>
            <img
              className='mt3'
              src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1536360988/portfolio/MWS/UdacityMWSPhone"
              alt="Card reflection question" />
          </div>
          <div className='w-30-l w-40-ns w-100 fl'>
            <img
              className='mt3'
              src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1536360900/portfolio/MWS/UdacityMWSTablet"
              alt="UX video" />
          </div>
        </section>
      </div>
  </div>
export default UXLX
