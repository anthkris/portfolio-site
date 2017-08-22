import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js'
import CaseStudyImages from '../components/CaseStudyImages'
import Footer from '../components/Footer'



const Suggestv = () =>
<div className='pt5'>
<CaseStudyAbout
about='The quickest and easiest way to buy bitcoin. Numilli makes it easy to securely buy and sell bitcoins via a mobile application and ATM machine.'
role='My role comprised the design of the native application, web app & ATM machines. '
clients='Freelance Product Designer '
job='UI/UX Research, Wireframing,  UI/UX Design, Icon Design'
/>
<div className='ph5-ns ph2-m ph3 db center'>
  <CaseStudyImages  img='images/numilli/numilli-5.png'/>
  <CaseStudyImages  img='images/numilli/numilli-2.png'/>
  <CaseStudyImages  img='images/numilli/numilli-3.png'/>
  <CaseStudyImages  img='images/numilli/numilli-4.png'/>
  <CaseStudyImages  img='images/numilli/numilli-7.png'/>
  <CaseStudyImages  img='images/numilli/numilli-6.png'/>
</div>
<Footer/>
</div>
export default Suggestv
