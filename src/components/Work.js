import React from 'react'
import Title from './Title'
import WorkTile from './WorkTile'
import WorkTileOut from './WorkTileOut'


class Work extends React.Component {
  render() {
    return (
    <section id='Portfolio'>
        <div className='mw8 mt5 center db ph0-ns ph2'>
        <Title text='Portfolio'/>
        <WorkTile title='CrowdScores' info='Mobile app design' summary='CrowdScores brings you the fastest live scores. It is a social network which allows fans to share in-match events and opinion. Running on both iOS and Android.' img='images/preview/crowdscores-app.jpg' link='/CrowdScores'/>
        <WorkTile title='Suggestv' info='Web app & static site' summary='Suggestv is the inventor of semantic video distribution. Suggestv brings together content sellers and publishes creating a marketplace for online video.' img='images/preview/suggestv-platfom.jpg' link='Suggestv'/>

        <WorkTile title='Numilli' info='Mobile app & atm design' summary='Bitcoin safe and easy. Numilli makes it easy to securely buy and sell bitcoin currency, on the go using a mobile application and ATMs.' img='images/preview/numilli.jpg' link='Numilli'/>
        <WorkTile title='YunoJuno' info='Web app design' summary='YunoJuno connects the best freelancers with great companies. Employers work directly with freelancers with YunoJuno managing contact and payment.' img='images/preview/yunojuno.jpg' link='YunoJuno'/>

        <WorkTileOut title='Numilli' info='Web app - design & development' summary='Web app showing the bitcoin ATM locations - under development' img='images/preview/numilli-site.jpg' link='http://numilli.surge.sh/'/>
        <WorkTileOut title='QuidCo' info='Mobile app design' summary='Quidco is the number one cashback service. Partnering with retailers to help consumers earn cashback every year.' img='images/preview/quidco.jpg' link='https://quidco.com/'/>

        <h1 className='fw4'>Personal projects</h1>
        <p className='mw7'>As a designer there’s always more to learn. These side projects are challenges I’ve set myself to develop new skills and refine my existing abilities</p>

        <WorkTileOut title='Deliverate.co.uk' info='React web app' summary='Front-end for a Delivery rating web app showing the top-rated takeaways in your local area.' img='images/preview/deliverate.svg' link='http://deliverate.co.uk/'/>

        <WorkTileOut title='Working-out.design' info='React CMS' summary='Collection of the best free co-working spots in London. Why not submit a location?' img='images/preview/working-out.svg' link='https://working-out.design/'/>

       </div>
    </section>
    )
  }
}
export default Work

