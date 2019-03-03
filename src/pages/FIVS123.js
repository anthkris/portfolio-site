import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js';
import Layout from '../components/Layout.js';

const FIVS123 = () =>
  <Layout>
    <div className='pt5 case-study'>
      <CaseStudyAbout
      about='FIVS123 Introduction to Forensics is a synchronous online course in development for Texas A&M University students by TEEX. I concentrated on using Moodle LMS to its full capacity, integrating readings with engaging, scenario-based learning experiences.'
      projectRole='I was the lead instructional designer, graphic designer, and elearning developer on a team of two for this project.'
      clients='Learning Experience Designer and Developer'
      job='LX Design, eLearning Development, Coding, Conceptualising Ideas and Prototyping'
      />
        <div className='ph3 center mw8'>
          <section className='mt3 dib'>
            <div className='w-100'>
              <h2 className='fw3'>Game Development</h2>
              <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
             <p className='fw3 mt4'>BAC or Consequences is a graded activity for the FIVS123 Introduction to Forensics course in development for Texas A&M University by TEEX. This activity combines all of the previous review into one activity that challenges students to calculate the BAC for an individual after choosing an alcoholic drink to be consumed and the number to be consumed. After BAC is calculated, the activity further promotes thought and synthesis by challenging students to determine whether or not the BAC they calculated would mean that the driver would be intoxicated.</p>
            </div>
            <div className='w-50-ns w-100 fl'>
            <img
              className='mt3'
              src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/FIVS123/BAC_Start.min"
              alt="BAC is Right Game Start" />
            </div>
            <div className='w-50-ns w-100 fl'>
              <img
                className='mt3'
                src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/FIVS123/Gale_BAC.min"
                alt="Calculating the BAC for Gale" />
            </div>
          </section>
          <section className='mt4 dib' id='ux-design'>
            <div className='w-100 mt4 fr'>
              <h2 className='fw3'>Moodle Theming</h2>
              <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
              <p className='fw3 mt4'>As I worked on the Introduction to Forensics course, I wanted to create a mood for the course that would play off of the sexiness and coolness of forensics in television and film, but without being too overwhelming and conflicting with the course content.</p>
              <p>I created this theme using CSS and a little basic PHP, based on the Arialist theme. The background image was designed using stock images and Photoshop.</p>
            </div>
            <div className='w-100 w-50-ns fl'>
              <img
                className='mt3'
                src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/FIVS123/FIVSmoodle_home.min"
                alt="FIVS123 Moodle Theme" />
            </div>
            <div className='w-100 w-50-ns fl'>
              <img
                className='mt3'
                src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/FIVS123/FIVSmoodle_iframeslider"
                alt="Embedded interaction in Moodle" />
            </div>
          </section>
          <section className='mt3 dib'>
            <div className='w-100 mt5'>
              <h2 className='fw3'>Scaffolded Practice</h2>
              <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
              <p className='fw3 mt4 bottom'>The BAC is Right is one of a series of game-like activities that allow students to practice calculating the blood alcohol content (BAC) for people of various genders and weights. This activity was built using a scaffolding technique: students begin with a step-by-step guide through the equation, then try it out with extrinsic feedback, then completely on their own.</p>
            </div>
            <div className='w-100 w-50-ns fl'>
              <img
                className='mt3'
                src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/FIVS123/Edward_scaffold.min"
                alt="Character information" />
            </div>
            <div className='w-100 w-50-ns fl'>
              <img
                className='mt3'
                src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/FIVS123/BAC_is_Right.min"
                alt="BAC is Right game" />
            </div>
          </section>
        </div>
    </div>
  </Layout>
  
export default FIVS123;
