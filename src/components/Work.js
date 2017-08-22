import React from 'react'
import Title from './Title'
import WorkTile from './WorkTile'
import WorkTileOut from './WorkTileOut'


class Work extends React.Component {
  render() {
    return (
    <section id='Portfolio'>
        <div className='mw8 mt5 center db'>
        <Title text='Portfolio'/>
        <WorkTile title='CrowdScores' info='MOBILE APP DESIGN' summary='CrowdScores brings you the fastest live scores, it is a social network which allows fans to share in-match events and opinion. Running on both a iOS and Android.' img='images/preview/crowdscores-app.jpg' link='/CrowdScores'/>
        <WorkTile title='Suggestv' info='WEB APP DESIGN' summary='Suggestv is the inventor of semantic video distribution. Suggestv brings together content sellers and publishes creating a marketplace for online video.' img='images/preview/suggestv-platfom.jpg' link='Suggestv'/>

        <WorkTile title='Numilli' info='MOBILE & ATM DESIGN' summary='Bitcoin safe and easy. Numilli makes it easy to securely buy and sell bitcoin currency, on the go using a mobile application & Automated teller machine.' img='images/preview/numilli.jpg' link='Numilli' live='Case study'/>
        <WorkTileOut title='Suggestv' info='STATIC SITE, TACHYONS' summary='Suggestvs static site gives a explanation of the service Suggestv offers. The purpose of the site is to connect the in-house sales team with prospect clients.' img='images/preview/suggestv-landing.jpg' link='https://www.sugges.tv/'/>

        <WorkTileOut title='Numilli - WebSite' info='WEB APP DESIGN, TACHYONS' summary='Static site under development' img='images/preview/numilli-site.jpg' link='http://numilli.surge.sh/'/>
        <WorkTileOut title='Deliverate' info='REACT APP' summary='Personal project under development' img='images/preview/deliverate.jpg' link='http://deliverate.co.uk/'/>

       </div>
    </section>
    )
  }
}
export default Work

