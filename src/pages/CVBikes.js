import React from "react";
import {Link} from 'gatsby';
import PersonalCaseStudyAbout from '../components/PersonalCaseStudyAbout.js';
import Layout from '../components/Layout.js';

const CVBikes = () =>
  <Layout>
    <div className='pt5 case-study'>
      <PersonalCaseStudyAbout
      about='Column and Veil Bikes is an exprimental responsive course with an HTML5 game built using the free and open source Adapt Framework.'
      projectRole='For this project, I acted as the learning experience designer, coder, and game developer.'
      clients='Learning Experience Designer and Developer'
      tool='Adapt Framework and Phaser JS'
      time='About 2 weeks'
      projectLink='/showcase/candvbikes/index.html#/id/co-05'
      job='LX Design, eLearning Development, Graphic Design, Coding, Game Development, Conceptualising Ideas and Prototyping'
      />
        <div className='ph3 center mw8'>
          <section className='mt3 dib'>
            <div className='w-100 fl'>
              <h2 className='fw3'>Open Source Tools for Learning</h2>
              <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
              <p className='fw3 mt4'>The Adapt Learning Framework caught my attention as soon as I heard about it. This open source, responsive framework works on the concept of modularity, uses contemporary design patterns, and is fully responsive. What got me excited primarily (besides its being open source!) was that here was an elearning authoring tool that actually generated good, well-formed code AND that you could touch and alter and work with in very deep ways. Unlike so many other authoring tool options, I can control every facet of my Adapt course. I was very eager to get my hands on it and create something.</p>
              <p className='fw3 mt4'>
              So, I made some time to install the framework version of the tool and created an employee onboarding course for a (fictional) bespoke bicycle company.</p>
              <Link className="case-study-link" to="/blog/trying-out-kineo-adapt-open-source-elearning-authoring-framework" title="How I built the course">Read more about the project.</Link>
            </div>
            <div className="center">
              <div className='w-100 w-33-ns fl'>
              <img
                className='mt3'
                src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/CVBikes/CVAccordion"
                alt="Content Accordion with check marks" />
              </div>
              <div className='w-100 w-33-ns fl'>
                <img
                  className='mt3'
                  src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/CVBikes/CVImageSlider"
                  alt="Content slider" />
              </div>
              <div className='w-100 w-33-ns fl'>
                <img
                  className='mt3'
                  src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/CVBikes/CVImageClick"
                  alt="Content reveal interaction" />
              </div>
            </div>
          </section>
          <section className='mt4 dib' id='ux-design'>
            <div className='w-100 mt4 fr'>
              <h2 className='fw3'>Custom Game and Plugin Development</h2>
              <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
              <p className='fw3 mt4'>Inspired by the amazing work of the folks at Sponge UK, I also included a mini-game in Phaser JS to test employee knowledge. In order to get the game to act appropriately as a gate (something that would prevent the learner from moving on until completion), I developed a plugin for the framework that allowed the game to send a signal to the course to let it know when the user has finished the game.</p>
            </div>
            <div className='w-100'>
              <img
                className='mt3 mb3'
                src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/CVBikes/CVGame"
                alt="Bike game" />
            </div>
          </section>
        </div>
    </div>
  </Layout>
  
export default CVBikes;
