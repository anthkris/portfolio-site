import React from 'react'
import Role from './Role'
import Title from './Title'



class Experience extends React.Component {
  render() {
    return (
<section>
<div className="mw8 db-ns dn center ph2 mt4">
<Title text='Experience'/>
    <div className='pt3 ph2'>
    <div className='dib w-third-ns w-100'>
    <Role jobTitle='Product designer' employer='CrowdScores' img='images/companies/crowdscores-icon.svg' link='https://crowdscores.com/'/>
    <Role jobTitle='Design intern' employer='Samlabs' img='images/companies/sam-icon.svg' link='https://samlabs.com/'/>

    </div>
    <div className='dib w-third-ns w-100'>
    <Role jobTitle='Product designer' employer='Numilli' img='images/companies/numilli-icon.svg' link='http://numilli.surge.sh/'/>
    <Role jobTitle='Product designer' employer='Suggestv' img='images/companies/suggestv-icon.svg' link='https://sugges.tv/'/>

    </div>

    <div className='dib w-third-ns w-100 v-top'>
    <Role jobTitle='Product designer' employer='YunoJuno' img='images/companies/yunoJuno-icon.svg' link='https://yunojuno.com/'/>
    <Role jobTitle='Mobile designer' employer='Quidco' img='images/companies/quidco-icon.svg' link='https://quidco.com/'/>

    </div>
</div>
    </div>
</section>
    )
  }
}
export default Experience
