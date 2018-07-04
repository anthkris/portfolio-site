import React from "react";
import CaseStudyAbout from '../components/CaseStudyAbout.js';
import PhoneSearch from "../components/images/UTakeIt/UTakeItPhoneCourseSearchsm.png";
import PhonePricing from "../components/images/UTakeIt/UTakeItPhonePricingSm.png";
import TabletCurricula from "../components/images/UTakeIt/UTakeItTabletCurricula.png";
import TabletEvents from "../components/images/UTakeIt/UTakeItTabletEvents.png";
import ProductFilter from "../components/images/UTakeIt/UTakeItProductFilter.png";
import HomePage from "../components/images/UTakeIt/UTakeItHomePage.png";
import '../styles/case-study.scss';

const UTakeIt = () =>
  <div className='pt5 case-study'>
    <CaseStudyAbout
    about='UTakeIt is the fully responsive platform for the University of Texas STEM Center to market and sell face-to-face and online learning experiences and products.'
    role="I have been the front-end developer and accessibility lead for this project since it's start."
    clients='Front End Developer and UX Designer'
    job='LX Design, Front End Development, Web Design, UX Design, Documentation, Conceptualising Ideas and Prototyping, Accessibility'
    />
      <div className='ph3 center mw8'>
        <section className='mt3 dib'>
          <div className='w-40-l w-100-ns  w-100 fl'>
            <h2 className='fw3'>Front End Development</h2>
            <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
            <p className='fw3 mt4'>The University of Texas STEM Center sought to diversify their income streams early in 2017 by creating a series of professional development courses for educators. Along with this, they also wanted a purpose-built web application to help them market and sell these learning experiences. From the very beginning of the project, I have worked with the team as the front-end developer and web designer. </p>
            <p className='fw3 mt4'>As the project has matured, I have worked to institute best practices and consistent coding practices for the front-end across team members and to document the front-end.</p>
          </div>
          <div className='w-20-l w-40-ns w-100 fr'>
            <img className='mt3' src={PhonePricing} alt='Pricing cards'/>
          </div>
          <div className='w-40-l w-60-ns w-100 img-center fr'>
            <img className='mt3' src={TabletCurricula} alt='Curricula page'/>
          </div>
        </section>
        <section className='mt4 dib' id='ux-design'>
          <div className='w-40-l w-100-ns w-100 fr'>
            <h2 className='fw3'>User Experience Design and Accessibility</h2>
            <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
            <p className='fw3 mt4'>As the application has continued to grow, I have served as a user advocate by always considering the point of view of the user and asking lots of questions.</p>
            <p className='fw3 mt4'>I also brought considerable accessibility experience to the project, having been the accessibility team lead on the large open source project, Oppia. I began by performing a site-wide accessibility audit and identifying and documenting best practices to ensure the site was as accessible as possible.</p>
          </div>
          <div className='w-20-l w-40-ns w-100 img-center fl'>
            <img className='mt3' src={PhoneSearch} alt='Showing number of items on display that updates'/>
          </div>
          <div className='w-40-l w-60-ns w-100 fl'>
            <img className='mt3' src={TabletEvents} alt='Easy to use filtering on mobile'/>
          </div>
        </section>
        <section className='mt5 dib'>
            <img className='mt3' src={ProductFilter} alt='Product page with filter'/>
            <img className='mt3' src={HomePage} alt='UTakeIt Home Page'/>
        </section>
      </div>
  </div>
export default UTakeIt
