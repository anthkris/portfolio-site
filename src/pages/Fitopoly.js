import React from "react";
import Link from 'gatsby-link';
import PersonalCaseStudyAbout from '../components/PersonalCaseStudyAbout.js';

const Fitopoly = () =>
  <div className='pt5 case-study'>
    <PersonalCaseStudyAbout
    about='Fitopoly is a serious game project built using Articulate Storyline 2 and animated video trailer built using PowerPoint.'
    role='For this project, I acted as the learning experience designer, game developer, visual designer, and video developer.'
    clients='Learning Experience Designer and Developer'
    tool='Articulate Storyline 2'
    time='About 25 hours'
    projectLink='/showcase/Fitopoly/story.html'
    job='LX Design, eLearning Development, Graphic Design, Animated Video, Conceptualising Ideas and Prototyping'
    />
      <div className='ph3 center mw8'>
        <section className='mt3 dib'>
          <div className='w-100 fl'>
            <h2 className='fw3'>Custom Serious Game Development</h2>
            <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
            <p className='fw3 mt4'>
            Inspired by the edHeads Design a Cell Phone game, over the course of about 2 weeks, I designed a game that puts users in the role of a product designer that needs to create a wearable to fit the needs of their target consumer: office workers looking to move more and get fit. Over the course of the game, the user can review research and design parameters, design and redesign the final product by choosing features that affect cost and battery life, and get feedback from a panel of testers. At the end, they have their product produced and get feedback with sales figures. Importantly, this game utilizes the CCAF framework to motivate users and provide a challenge and meaningful feedback.</p>
            <Link className="case-study-link" to="/blog/engaging-animated-video-in-powerpoint" title="How I built the course">Read more about the project.</Link>
          </div>
          <div className='w-100 w-50-ns fl'>
            <img
              className='mt3'
              src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/Fitopoly/FitopolyResults"
              alt="Research phase to suss out what users want" />
          </div>
          <div className='w-100 w-50-ns fr'>
            <img
              className='mt3'
              src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/Fitopoly/FitopolyResults"
              alt="Results phase after testingt" />
          </div>
        </section>
        <section className='mt4 dib' id='ux-design'>
          <div className='w-100'>
            <h2 className='fw3'>Video Design and Creation</h2>
            <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
            <p className='fw3 mt4'>In the process of interviewing for a position, I had a conversation with another instructional designer about the microlearning video she creates for her organization. From what I understood, the pace of work there meant that, for the most part, what they ended up doing was simply narrating bulleted PowerPoint slides and recording that with Camtasia. That got the old wheels turning as I asked myself, “How would I seek to improve on a product like that?”</p>
            <p className='fw3 mt4'>
            This video demonstrates my approach to taking a rapid microlearning creation process to the next level with conversational narration and animation.</p>
          </div>
          <div className='w-100 img-center'>
            <iframe src="https://player.vimeo.com/video/135416344" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
        </section>
      </div>
  </div>
export default Fitopoly;
