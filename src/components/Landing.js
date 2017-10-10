import React from 'react'
import Availability from './Availability'
import Social from './Social'


class Landing extends React.Component {
  render() {
    return (
<div>
  <section className='overflow-hidden' >
      <div className='mw8 center db pt2'>
          <div className="dib v-top w-50-ns w-100 mt4-ns pa0-ns pa3 mw6 tl-ns tc ">
          <h1 className='fw5 f1 mb2'>Hello!</h1>
          <h2 className='fw3' style={{lineHeight: '1.5'}}>I'm James Ciclitira, a digital product designer based in London in the process of moving to Berlin. Specialising in native & web apps.
          </h2>
          <a className="f6 grow no-underline ph4 pv3 mt4 dib bg-black white mt5 shadow-4" style={{borderRadius:'6px'}} href="mailto:jciclitira@gmail.com">Get in touch</a>
          <Social/>
        </div>
        <div className='w-50 dib-ns dn'>
        <img className='w-70 ml5' src='images/app.svg'/>
        </div>
      </div>
</section>
<div className='mw8 db center mt5-ns mt3 mb5 overflow-auto ph0-ns ph2'>
<article className='w-50-ns w-100 dib-ns db ph0-ns ph2'>
<h3 className='fw4'>About</h3>
<p className='measure secondary-text'>I create beautiful, usable interfaces through solid design-thinking and thoughtful research, specialising in mobile and web design with experience in front-end development.
</p>
</article>
<article className='w-40-ns w-100 dib v-top fr ph0-ns ph2'>
<h3 className='fw4'>What I Do</h3>
<ul className='ma0 f6 list pa0 secondary-text'>
<li className="lh-copy pv1">UI/UX DESIGN</li>
<li className="lh-copy pv1">MOBILE/WEB APPS</li>
<li className="lh-copy pv1">STATIC WEB DEVELOPMENT</li>
<li className="lh-copy pv1">PROTOTYPING</li>
<li className="lh-copy pv1">USER TESTING</li>
<li className="lh-copy pv1">INTERACTIONS DESIGN</li>
</ul>
</article>
</div>
</div>
    )
  }
}
export default Landing


