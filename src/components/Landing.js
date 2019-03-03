import React from 'react';
import Social from './Social';
import bg from "./images/bg.svg";
import dev from "./images/undraw-dev.svg";
import {Link} from 'gatsby';
import '../styles/landing.scss';

class Landing extends React.Component {
  render() {
    return (
      <section id='landing' className='center mw8 db ph3'>
        <img className='absolute top-0 right-0 db-ns dn' alt='bg-img' src={bg} style={{zIndex:'-99999', height:'60vh' }}/>
        <div className="dib v-top pr0 pa0 tl-ns tc vh-100">
          <div className='w-50-ns w-100 dib mt4 v-top'>
            <h1 style={{letterSpacing:'-0.85px'}} className='f-subheadline-l mt5-ns'>Web Developer and LX Designer</h1>
            <h2 className='mt4 mb4 fw1 font-1 pr5-ns pr0 about-me' style={{lineHeight: '1.8' }}>Hi I'm Kristin, a Front End developer and Learning Experience Designer. I help create accessible web applications and meaningful, memorable, and motivational learning experiences with a focus on sustainable, accessible, user-centered design</h2>
            <Link className='hire-me' to='/HowIWork' title='How I Work'>Looking for a good web developer?</Link>
            <Social/>
          </div>
          <div className='dib-ns dn w-50 mt5'><img className=' mt4' alt='course and app mockups' src={dev} /></div>
        </div>
      </section>
    )
  }
}
export default Landing
