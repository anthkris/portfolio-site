import React from "react";
import {Link} from 'gatsby';
import PersonalCaseStudyAbout from '../components/PersonalCaseStudyAbout.js';
import Layout from '../components/Layout.js';

const Pomodoro = () =>
  <Layout>
    <div className='pt5 case-study'>
      <PersonalCaseStudyAbout
      about='A web-based pomodoro timer for all you productivity fans!'
      projectRole='I acted as Front End Developer and Designer'
      clients='Web Developer, UX Designer'
      tool='jQuery'
      time='About 2 weeks'
      projectLink='https://codepen.io/anthkris/full/MaNZWQ/'
      job='Web Development, Web Design, UI/UX Design, Conceptualising Ideas and Prototyping'
      />
        <div className='ph3 center mw8'>
          <section className='mt3 dib'>
            <div className='w-100 fl'>
              <h2 className='fw3'>Project Development</h2>
              <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
              <p className='fw3 mt4'>As a professional, I've found the pomodoro technique to be an absolute lifesaver, especially on those days where motivation to work is low. As a part of the Free Code Camp Front End certification, I built this web-based pomodoro timer with features to set your own session and break intervals; pause, resume, and stop the timer; and a really nifty tomato progress bar animation!</p>
              <Link className="case-study-link" to="/blog/december-gds-project-pomodoro-timer" title="More on how I built the Pomodoro Timer">Read more about the app development.</Link>
              <p className='fw3 mt4'>More recently, I went back through the FCC curriculum and remade the Pomodoro timer from scratch using React JS. You can <a className="case-study-link" href="https://codepen.io/anthkris/full/JwZbBe" >take a gander at the new version on Codepen.</a></p>
            </div>
            <div className='w-100'>
              <img
                className='mt3'
                src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/Pomodoro/PomodoroSettings"
                alt="Setting the timer session length" />
            </div>
            <div className='w-100'>
              <img
                className='mt3'
                src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/Pomodoro/PomodoroRunning"
                alt="Running timer with a tomato progress bar" />
            </div>
          </section>
        </div>
    </div>
  </Layout>
  
export default Pomodoro;
