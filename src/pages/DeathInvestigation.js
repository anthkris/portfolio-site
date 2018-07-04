import React from "react";
import CaseStudyAbout from '../components/CaseStudyAbout.js';

const DeathInvestigation = () =>
  <div className='pt5 case-study'>
    <CaseStudyAbout
    about='Death Investigation Online is immersive, interactive professional development converted from one of the popular face-to-face courses into an asychronous online course using Moodle and Lectora Inspire.'
    role='I took on the roles of instructional designer, graphic designer, and elearning developer for this project.'
    clients='Learning Experience Designer and Developer'
    job='LX Design, eLearning, Development, Grahic Design, Coding, Conceptualising Ideas and Prototyping'
    />
      <div className='ph3 center mw8'>
        <section className='mt3 dib'>
          <div className='w-100 fl'>
            <h2 className='fw3'>Immersive Scenarios</h2>
            <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
           <p className='fw3 mt4'>During the development of this course, I was able to more fully realize some of the best-practices of course design. An overarching murder case with the participants as the death investigator put all of the lessons in context, allowing participants to apply their new knowledge to different case-related problems.</p>
          </div>
          <div className='w-100 w-50-ns fl'>
          <img
            className='mt3'
            src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/DeathInvestigation/module_title.min.webp"
            alt="Death Investigation Module Title Page" />
          </div>
          <div className='w-100 w-50-ns fr'>
            <img
              className='mt3'
              src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/DeathInvestigation/blood_test.min.webp"
              alt="Blood Test simulation" />
          </div>
        </section>
        <section className='mt4 dib' id='ux-design'>
          <div className='w-100 mt4 fr'>
            <h2 className='fw3'>Context, Challenge, Activity, Feedback</h2>
            <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
            <p className='fw3 mt4'>Page-turning text slides were reduced in favor of a variety of interactive challenges. However, help remained available in the form of a contextual death investigation guide and cumulative field notes journal that kept tabs on the case. Feedback was also enhanced to make it intrinsic, offering realistic consequences for a user’s actions on the case.</p>
          </div>
          <div className='w-100 w-50-ns fl'>
          <img
            className='mt3 mb3'
            src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/DeathInvestigation/field_notesslider.webp"
            alt="Field notes collected over the course of the case" />
          </div>
          <div className='w-100 w-50-ns fr'>
            <img
              className='mt3 mb3'
              src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/DeathInvestigation/evidence_contaminationslider.webp"
              alt="Realistic feedback offering consequences" />
          </div>
        </section>
      </div>
  </div>
export default DeathInvestigation;
