import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js'
import CaseStudyImg from '../components/CaseStudyImg'
import Footer from '../components/Footer'



const yunojuno = () =>
<div className='pt5'>
<CaseStudyAbout
about='YunoJuno connects the best freelancers work with great companies. Employers work directly with freelancers with yunojuno managing contact & payment.'
role='My role comprised the design of the web app. Its function was to enable freelancers and employers to connect.'
clients='Product Designer'
job='UI/UX Research, Wireframing, Prototyping,  UI/UX Design '
/>
<section>
  <h1 className='pb2 ma0 ph5-ns ph2 fw4'>Prototyping</h1>
  <div className='pv4 ma0 ph5-ns ph2'>
  <a className='db dim pv2'  target='blank' href='http://yunojuno.surge.sh/availability-menu'>Availability toggle development</a>
  <a className='db dim pv2' target='blank' href='http://yunojuno.surge.sh/freelancer-profile'>Freelancers profile</a>
  <a className='db dim pv2' target='blank' href='http://yunojuno.surge.sh/employers-dashboard-info-copy'>Employers empty states</a>
  </div>

  <h1 className='pv4 ma0 ph5-ns ph2 fw4'>Final designs</h1>
  <CaseStudyImg img='images/yunojuno/1.jpg'/>
  <CaseStudyImg  img='images/yunojuno/2.jpg'/>
  <CaseStudyImg  img='images/yunojuno/3.jpg'/>
  <CaseStudyImg  img='images/yunojuno/4.jpg'/>
  <CaseStudyImg  img='images/yunojuno/5.jpg'/>
  <CaseStudyImg  img='images/yunojuno/6.jpg'/>
</section>
<Footer/>
</div>
export default yunojuno
