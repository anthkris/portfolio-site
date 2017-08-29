import React from 'react'
import Role from './Role'
import Title from './Title'



class Experience extends React.Component {
  render() {
    return (
<section>
<div className="mw8 db-ns dn center ph2 mt4">
<Title text='Past experience'/>
    <div className='pt3 ph2'>
    <div className='dib w-third-ns w-100'>
    <Role jobTitle='Product designer' employer='CrowdScores' img='images/companies/crowdscores-icon.svg' link='https://crowdscores.com/' length='Sep 2015 – Jan 2017 &#8226; 1 yr 5 Mon'/>
            <Role jobTitle='Design intern' employer='Samlabs' img='images/companies/sam-icon.svg' link='https://samlabs.com/' length='Jun 2015 - Aug 2015 &#8226;  1 Month'/>

    </div>
    <div className='dib w-third-ns w-100'>
    <Role jobTitle='Product designer' employer='Numilli' img='images/companies/numilli-icon.svg' link='http://numilli.surge.sh/' length='Feb 2017 - Present &#8226;  7 Months' />
    <Role jobTitle='Product designer' employer='Suggestv' img='images/companies/suggestv-icon.svg' link='https://sugges.tv/' length='Jan 2017 - Apr 2017 &#8226;  4 Months'/>

    </div>

    <div className='dib w-third-ns w-100 v-top'>
    <Role jobTitle='Product designer' employer='YunoJuno' img='images/companies/YunoJuno-icon.svg' link='https://YunoJuno.com/' length='May 2017 - August &#8226;  3 Months'/>

    </div>
</div>
    </div>
</section>
    )
  }
}
export default Experience
