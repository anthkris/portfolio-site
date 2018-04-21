import React from 'react'
import WorkTile from './WorkTile'
import WorkTileOut from './WorkTileOut'


class Work extends React.Component {
  render() {
    return (
    <section>
        <h1 className='fw3 f2 mb4'>Recent Works</h1>
        <WorkTile title='CrowdScores' info='Mobile application' summary='CrowdScores brings you the fastest live scores. It is a social network which allows fans to share in-match events and opinion. Running on both iOS and Android.' img='images/preview/crowdscores-app.jpg' link='/CrowdScores'/>
        <WorkTile title='Suggestv' info='Web application' summary='Suggestv is the inventor of semantic video distribution. Suggestv brings together content sellers and publishes creating a marketplace for online video.' img='images/preview/suggestv-platfom.jpg' link='Suggestv'/>
        <WorkTile title='Numilli' info='Mobile application' summary='Bitcoin safe and easy. Numilli makes it easy to securely buy and sell bitcoin currency, on the go using a mobile application and ATMs.' img='images/preview/numilli.jpg' link='Numilli'/>
        <WorkTile title='YunoJuno' info='Web application' summary='YunoJuno connects the best freelancers with great companies. Employers work directly with freelancers with YunoJuno managing contact and payment.' img='images/preview/yunojuno.jpg' link='YunoJuno'/>
        <WorkTileOut title='Numilli' info='Progressive Web App' summary='Web app showing the bitcoin ATM locations - under development' img='images/preview/numilli-site.jpg' link='https://numilli.surge.sh/'/>
        <WorkTile title='QuidCo' info='Mobile application' summary='Quidco is the number one cashback service. Partnering with retailers to help consumers earn cashback every year.' img='images/preview/quidco.jpg' link='Quidco'/>
        <h1 className='fw3'>Personal projects</h1>
        <WorkTileOut title='Deliverate.co.uk' info='Web application' summary='Front-end for a Delivery rating web app showing the top-rated takeaways in your local area.' img='images/preview/deliverate.svg' link='http://deliverate.co.uk/'/>
        <WorkTileOut title='Working-out.design' info='Content management system' summary='Collection of the best free co-working spots in London. Why not submit a location?' img='images/preview/working-out.svg' link='https://working-out.design/'/>
    </section>
    )
  }
}
export default Work

