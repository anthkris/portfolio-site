import React from "react";
import PersonalCaseStudyAbout from '../components/PersonalCaseStudyAbout.js';
import PhoneVideo from "../components/images/UXLX/UXLXPhoneVideo.png";
import PhoneQuestion from "../components/images/UXLX/UXLXPhoneQuestion.png";
import TabletLessonStart from "../components/images/UXLX/UXLXTabletLessonStart.png";
import TabletVideo from "../components/images/UXLX/UXLXTabletVideo.png";
import '../styles/case-study.scss';

const UXLX = () =>
  <div className='pt5 case-study'>
    <PersonalCaseStudyAbout
    about='UXLX is a card-based, xAPI-enabled microlearning app to help LX Designers learn lessons from User Experience Design.'
    role="I acted as the front end developer, designer, and subject matter expert for this project."
    clients='Front End Developer, SME, UX Designer'
    tool='Ionic 3'
    time='About 2 months'
    job='LX Design, Front End Development, Web Design, UX Design, Conceptualising Ideas and Prototyping, Microlearning'
    />
      <div className='ph3 center mw8'>
        <section className='mt3 dib'>
          <div className='w-40-l w-100-ns  w-100 fl'>
            <h2 className='fw3'>App Development</h2>
            <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
            <p className='fw3 mt4'>This app came out an idea I had originally Ellen Hayes, an ID I interviewed on the Dear Instructional Designer show. As you all know, I’ve been interested in how I and we can facilitate a more hands-on learning, practice, and development experience for ID newbies. I’ve written about using open source and civic tech projects as a way to gain elearning design and development experience and with this project, I had a chance to dive further into generating useful xAPI data as well as experimenting with custom app development for microlearning in organizations. After some research, I decided to use Ionic 3.</p>
            <p className='fw3 mt4'>With Ionic, UXLX is a progressive web application that is usable online and downloadable on both the iOS and Android mobile app stores. It tracks user movement across various interactions by sending xAPI statements to a learning record store. From there, such data could be reviewed in context with data from other learning experiences to get a better view of what effective learners do.</p>
          </div>
          <div className='w-20-l w-40-ns w-100 img-center fr'>
            <img className='mt3' src={PhoneVideo} alt='UX video card in a lesson'/>
          </div>
          <div className='w-40-l w-60-ns w-100 fr'>
            <img className='mt3' src={TabletLessonStart} alt='Lesson start card'/>
          </div>
        </section>
        <section className='mt4 dib' id='ux-design'>
          <div className='w-40-l w-100-ns w-100 fr'>
            <h2 className='fw3'>User Experience Design and Content</h2>
            <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
            <p className='fw3 mt4'>Content-wise, I took from the outline that Ellen Hayes and I had made as well as some of the resources she had gathered. Design-wise, I was inspired by card-based microlearning apps like Google’s Primer and Startup Patterns. I knew I wanted a user to be able to choose from a series of lessons and then swipe through cards to go through the lesson. A card might contain text, a video, or a question. I also wanted a person to be able to see their progress inside of a lesson, as well as from the home page, and be able to get back to where they were easily.</p>
          </div>
          <div className='w-20-l w-60-ns w-100 img-center fl'>
            <img className='mt3' src={PhoneQuestion} alt='Card reflection question'/>
          </div>
          <div className='w-40-l w-40-ns w-100 fl'>
            <img className='mt3' src={TabletVideo} alt='UX video'/>
          </div>
          <div className='w-100 img-center'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/N39ZQC5WlFk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </section>
      </div>
  </div>
export default UXLX
