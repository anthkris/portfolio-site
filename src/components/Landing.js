import React from 'react'
import Social from './Social'

class Landing extends React.Component {
  render() {
    return (
<div>
  <section className='overflow-hidden' >
      <div className='mw8 center db pt2'>
          <div className="dib v-top w-50-ns w-100 mt4-ns pa0-ns pa3 mw6 tl-ns tc ">
          <h1 className='fw5 f1 mb2'>Hello!</h1>
          <h2 className='fw3' style={{lineHeight: '1.6'}}>
          I'm James a Digital Product Designer working
          in Berlin. Previously with
          <a className='link hover-red' target='blank' href='https://crowdscores.com/'> CrowdScores</a>,
          <a className='link hover-red' target='blank' href='https://www.yunojuno.com/'> YunoJuno </a> &
          <a className='link hover-red' target='blank' href='https://quidco.com/'> Quico</a>.
          </h2>
          <a className="f6 grow no-underline ph4 pv3 mt4 dib bg-black white mt5 shadow-4" style={{borderRadius:'6px'}} href="#form">Get in touch</a>
          <Social/>
        </div>
        <svg className='DropShadow w-50 dib-ns dn mt4' width="220" height="500" viewBox="0 0 260 560">
        <path fill='#FEFEFE' d='M18.7 46.22L187.43.87a25.2 25.2 0 0 1 30.88 17.88l105.81 396.06a25.3 25.3 0 0 1-17.82 30.97l-168.75 45.35a25.2 25.2 0 0 1-30.88-17.88L.87 77.19a25.3 25.3 0 0 1 17.82-30.97zm92.34-3.31c1.24-.34 2.24-2.07 1.9-3.32-.56-2.13-2.29-3.13-3.53-2.8-2.12.58-3.12 2.31-2.55 4.43.33 1.25 2.06 2.25 4.18 1.69zM97.3 57.8c-1.1.3-1.59 1.06-1.28 2.22.08.28.87.7 1.98.4l30.44-8.18c1.1-.3 1.58-1.05 1.5-1.34-.3-1.16-1.1-1.57-2.2-1.28L97.3 57.81z'/>
        <path fill='#F0F2F5' d='M22.34 94.63L210.6 44.06a1.8 1.8 0 0 1 2.21 1.28l91.12 340.82a1.8 1.8 0 0 1-1.28 2.21L114.4 438.94a1.8 1.8 0 0 1-2.21-1.28L21.06 96.84a1.8 1.8 0 0 1 1.28-2.21z'/>
        <path fill='#FFF' d='M38.66 116.01l166.65-44.89a3.6 3.6 0 0 1 4.4 2.56l11.17 41.88a3.62 3.62 0 0 1-2.54 4.43L51.69 164.88a3.6 3.6 0 0 1-4.4-2.56l-11.17-41.88a3.62 3.62 0 0 1 2.54-4.43zm48.22 2.91a2.71 2.71 0 0 0 1.4 5.24l108.5-29.23a2.71 2.71 0 0 0-1.4-5.23l-108.5 29.22zm3.26 12.22a2.71 2.71 0 0 0 1.4 5.23l66.83-18a2.71 2.71 0 0 0-1.4-5.23l-66.83 18zm-19.78 16.55a13.56 13.56 0 0 0-6.97-26.18 13.56 13.56 0 0 0 6.97 26.18zM68.66 227l166.65-44.89a3.6 3.6 0 0 1 4.4 2.56l11.17 41.88a3.62 3.62 0 0 1-2.54 4.43l-166.65 44.9a3.6 3.6 0 0 1-4.4-2.56l-11.17-41.88a3.62 3.62 0 0 1 2.54-4.43zm48.22 2.91a2.71 2.71 0 0 0 1.4 5.24l108.5-29.23a2.71 2.71 0 0 0-1.4-5.23l-108.5 29.22zm3.26 12.22a2.71 2.71 0 0 0 1.4 5.23l66.83-18a2.71 2.71 0 0 0-1.4-5.23l-66.83 18zm-19.78 16.55a13.56 13.56 0 0 0-6.97-26.18 13.56 13.56 0 0 0 6.97 26.18zM98.66 339l166.65-44.89a3.6 3.6 0 0 1 4.4 2.56l11.17 41.88a3.62 3.62 0 0 1-2.54 4.43l-166.65 44.89a3.6 3.6 0 0 1-4.4-2.56l-11.17-41.88a3.62 3.62 0 0 1 2.54-4.43zm48.22 2.91a2.71 2.71 0 0 0 1.4 5.24l108.5-29.23a2.71 2.71 0 0 0-1.4-5.23l-108.5 29.22zm3.26 12.22a2.71 2.71 0 0 0 1.4 5.23l66.83-18a2.71 2.71 0 0 0-1.4-5.23l-66.83 18zm-19.78 16.55a13.56 13.56 0 0 0-6.97-26.18 13.56 13.56 0 0 0 6.97 26.18zM53.66 171l166.65-44.89a3.6 3.6 0 0 1 4.4 2.56l11.17 41.88a3.62 3.62 0 0 1-2.54 4.43l-166.65 44.9a3.6 3.6 0 0 1-4.4-2.56l-11.17-41.88a3.62 3.62 0 0 1 2.54-4.43zm48.22 2.91a2.71 2.71 0 0 0 1.4 5.24l108.5-29.23a2.71 2.71 0 0 0-1.4-5.23l-108.5 29.22zm3.26 12.22a2.71 2.71 0 0 0 1.4 5.23l66.83-18a2.71 2.71 0 0 0-1.4-5.23l-66.83 18zm-19.78 16.55a13.56 13.56 0 0 0-6.97-26.18 13.56 13.56 0 0 0 6.97 26.18zM83.66 283l166.65-44.89a3.6 3.6 0 0 1 4.4 2.56l11.17 41.88a3.62 3.62 0 0 1-2.54 4.43l-166.65 44.9a3.6 3.6 0 0 1-4.4-2.56l-11.17-41.88a3.62 3.62 0 0 1 2.54-4.43zm48.22 2.91a2.71 2.71 0 0 0 1.4 5.24l108.5-29.23a2.71 2.71 0 0 0-1.4-5.23l-108.5 29.22zm3.26 12.22a2.71 2.71 0 0 0 1.4 5.23l66.83-18a2.71 2.71 0 0 0-1.4-5.23l-66.83 18zm-19.78 16.55a13.56 13.56 0 0 0-6.97-26.18 13.56 13.56 0 0 0 6.97 26.18zm-1.7 79.32l166.65-44.89a3.6 3.6 0 0 1 4.4 2.56l11.17 41.88a3.62 3.62 0 0 1-2.54 4.43l-166.65 44.89a3.6 3.6 0 0 1-4.4-2.56l-11.17-41.88a3.62 3.62 0 0 1 2.54-4.43zm48.22 2.91a2.71 2.71 0 0 0 1.4 5.24l108.5-29.23a2.71 2.71 0 0 0-1.4-5.23l-108.5 29.22zm3.26 12.22a2.71 2.71 0 0 0 1.4 5.23l66.83-18a2.71 2.71 0 0 0-1.4-5.23l-66.83 18zm-19.78 16.55a13.56 13.56 0 0 0-6.97-26.18 13.56 13.56 0 0 0 6.97 26.18z'/>
        <path fill='#FEFEFE' d='M12 91.25L218.17 36 224 57.75 17.83 113z'/>
</svg>

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


