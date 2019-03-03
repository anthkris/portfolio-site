import React from "react"
import PersonalCaseStudyAbout from '../components/PersonalCaseStudyAbout.js';
import Layout from '../components/Layout.js';

const Tribute = () =>
  <Layout>
    <div className='pt5 case-study'>
      <PersonalCaseStudyAbout
      about='This responsive tribute page was built for the Free Code Camp Front End Certification.'
      projectRole='I acted as Front End Developer and Designer'
      clients='Web Developer, UX Designer'
      tool='jQuery, Bootstrap'
      time='About 1 week'
      projectLink='https://codepen.io/anthkris/full/qqyLEg/'
      job='Web Development, Web Design, UI Design, Conceptualising Ideas and Prototyping'
      />
        <div className='ph3 center mw8'>
          <section className='mt3 dib'>
            <div className='w-100 fl'>
              <h2 className='fw3'>Project Development</h2>
              <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
              <p className='fw3 mt4'>I first encountered Yma Sumac from a Google Doodle on her birthday. After falling down an internet rabbit-hole, I listened to several of her songs and I fell in love with her sound! I jumped at the chance to build a more modern tribute and information page for this incredible soprano as a part of my work towards the Free Code Camp Front End Certification.</p>
              <p>This site is built using jQuery and the Bootstrap framwork. I derived inspiration for the UI from the (former) website of musician Franky Rizardo.</p>
            </div>
            <div className='w-100'>
              <img
                className='mt3'
                src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/Sumac/Sumac"
                alt="Yma Sumac landing page" />
            </div>
          </section>
        </div>
    </div>
  </Layout>
  
export default Tribute;
