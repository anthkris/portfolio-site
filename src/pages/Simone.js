import React from "react";
import Link from 'gatsby-link';
import PersonalCaseStudyAbout from '../components/PersonalCaseStudyAbout.js';
const Simone = () =>
    <div className='pt5 case-study'>
      <PersonalCaseStudyAbout
      about='A web-based Simon clone. Betcha can&#8217;t beat it!'
      projectRole='I acted as Game Developer'
      clients='Web Developer, Game Designer'
      tool='jQuery'
      time='About 1 week'
      projectLink='https://codepen.io/anthkris/full/WGGAQz/'
      job='Web Development, Web Design, UI/UX Design, Conceptualising Ideas and Prototyping'
      />
        <div className='ph3 center mw8'>
          <section className='mt3 dib'>
            <div className='w-100 fl'>
              <h2 className='fw3'>Project Development</h2>
              <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
              <p className='fw3 mt4'>I've been wanting to be at the intersection of coding in JavaScript and game development and learning experience design for a while. While I'm currently practicing game dev with Phaser JS and ES6, this Simone game, built for the Free Code Camp Front End Certification, was the first framework-less game I'd built on my own and I'm super proud of how it turned out.</p>
              <p>The game features a UI that mimics the physical game, the ability to retry if you mess up, or if you play on strict mode, you have to start all over!</p>
              <Link className="case-study-link" to="/blog/october-gdsproject-free-code-camp-simon-game" title="More on how I built the Simone Game">Read more about the app development.</Link>
            </div>
            <div className='w-100'>
              <img
                className='mt3'
                src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/Simone/Simone"
                alt="Simone game" />
            </div>
          </section>
        </div>
    </div>
export default Simone;
