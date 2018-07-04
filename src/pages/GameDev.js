import React from "react";
import PersonalCaseStudyAbout from '../components/PersonalCaseStudyAbout.js';

const GameDev = () =>
  <div className='pt5 case-study'>
    <PersonalCaseStudyAbout
    about='I prioritize building my skills as a game developer by regularly building games with Phaser JS and Construct 3.'
    role='For my experimental games, I act as the developer and designer.'
    clients='Game Developer'
    tool='PhaserJS or Construct'
    time='Varies'
    projectLink='https://anthkris.itch.io/'
    job='Game Development, Conceptualising Ideas and Prototyping'
    />
      <div className='ph3 center mw8'>
        <section className='mt3 dib'>
          <div className='w-100 fl'>
            <h2 className='fw3'>Custom Game Development</h2>
            <div className='bg-accent' style={{width: '40px', height:'4px' }}> </div>
            <p className='fw3 mt4'>I continue to regularly work on my game development skills by building and releasing small games using both the Phaser JS framework and Construct 3.</p>
            <p className='fw3 mt4'>Construct 3 is a relatively low-cost tool for creating responsive, HTML5 2D games. The user interface boasts a relatively simple learning curve and amakes it easy for organizations to maintain the games afterward.</p>
            <p className='fw3 mt4'>Phaser JS, on the other hand, is a 2D HTML5 framework for JavaScript developers but it has the advantage of being a free and open source framework. This means that it interactives I create in it are super sustainable as any other developer can pick up the code to maintain it or make changes in the future, no product required.</p>
            <p className='fw3 mt4'>By focusing on regularly creating projects with these tools, I ensure that I can quickly and easily create game prototypes and polished games for clients outside. Game development tools are purpose built and perform better than elearning tools for creating effective game-like experiences.</p>
          </div>
          <div className='w-100'>
            <img
              className='mt3'
              src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723812/portfolio/GameDev/GameDevItch.webp"
              alt="Games on Itch.io page" />
          </div>
        </section>
      </div>
  </div>
export default GameDev
