import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js';

const FOCS = () =>
  <div className='pt5 case-study'>
    <CaseStudyAbout
    about='Foundations of Computer Science is professional development MOOC purpose-built to help Texas educators become certified to teach computer science by preparing for certification exams and modeling good teaching practices.'
    role='I was the lead instructional designer, graphic designer, and elearning developer, and game developer for this project.'
    clients='Learning Experience Designer and Developer'
    job='LX Design, eLearning Development, Coding, Game Development, Documentation, Conceptualising Ideas and Prototyping'
    />
      <div className='ph3 center mw8'>
        <section className='mt3 dib'>
          <div className='w-100 fl'>
            <h2 className='fw3'>Learning Experience Design</h2>
            <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
            <p className='fw3 mt4'>We_TeachCS kicked off in January 2016 in a whirlwind of activity. Learning Sciences was brought on, initially simply to provide input on a pattern that our clients could use in creating their MOOC to help Texas Educators become certified to teach computer science. But, of course, we didn’t stop there. After taking some time to really try and understand the purpose of the course, I and my colleagues embarked on the task of using evidence-based techniques to elevate this course from the standard MOOC (often described as taking the worst part of University, the lecture, and putting it out there) into a focused course full of varied media, including psuedocode simulations, video, text and diagrams; modeling of good instructional techniques and ideas that teachers could use as their own in the classroom, as well as tons of opportunities to actually practice the computer science concepts they would be confronted with on the certification exam.</p>
          </div>
          <div className='w-100'>
            <img
              className='mt3'
              src="http://res.cloudinary.com/dhdaswa6t/image/upload/dpr_auto,q_60/v1530723812/portfolio/FOCS/FOCSCanvasSecond.webp"
              alt="Accordion in Canvas" />
          </div>
          <div className='w-100'>
            <img
              className='mt3'
              src="http://res.cloudinary.com/dhdaswa6t/image/upload/dpr_auto,q_60/v1530723812/portfolio/FOCS/FOCSCanvas.webp"
              alt="Games and Mobile Module in Canvas" />
          </div>
        </section>
        <section className='mt4 dib' id='ux-design'>
          <div className='w-100'>
            <h2 className='fw3'>Custom Interaction Development</h2>
            <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
            <p className='fw3 mt4'>As the course has grown and aged, we've continued to keep the content up to date with the certification exam by adding more subject areas and more engaging interactions. In the interest of sustainability and responsiveness, I began creating interactions using the Phaser JS HTML5 framework. This open source framework outputs clean, standard code using the HTML5 canvas so the interactions are usable on all devices.</p>
          </div>
          <div className='w-100'>
            <video className='mt3' src="https://res.cloudinary.com/dhdaswa6t/video/upload/v1530503736/portfolio/FOCSRobotSim.mp4" width="100%" controls>
              <p>If you are reading this, it is because your browser does not support the HTML5 video element.</p>
            </video>
          </div>
          <div className='w-100'>
            <video className='mt3' src="https://res.cloudinary.com/dhdaswa6t/video/upload/v1530503707/portfolio/FOCSCollisionSim.mp4" width="100%" controls>
              <p>If you are reading this, it is because your browser does not support the HTML5 video element.</p>
            </video>
          </div>
        </section>
        <section className='mt5 dib'>
          <div className='w-100'>
            <h2 className='fw3'>UI Development and Documentation</h2>
            <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
            <p className='fw3 mt4 mb4 bottom'>As course popularity grew, I worked with the STEM Center to move the content from EdX to Canvas LMS, which was better supported by the university. As a part of that move, I strove to create a series of reusable visual language and UI elements for the course. I also provided in-depth documentation of this custom development to ensure that the organization understood the risks and the code for the future. </p>
          </div>
        </section>
      </div>
  </div>
export default FOCS
