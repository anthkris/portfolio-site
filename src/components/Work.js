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

        <WorkTile title='Numilli' info='MOBILE & ATM DESIGN' summary='Bitcoin safe and easy. Numilli makes it easy to securely buy and sell bitcoin currency, on the go using a mobile application & Automated teller machine.' img='images/preview/numilli.jpg' link='Numilli'/>
        <WorkTile title='YunoJuno' info='WEB APP DESIGN' summary='YunoJuno connects the best freelancers work with great companies. Employers work directly with freelancers with yunojuno managing contact & payment.' img='images/preview/yunojuno.jpg' link='YunoJuno'/>


        <WorkTileOut title='Numilli' info='WEB APP DESIGN & DEVELOPMENT ' summary='Web app showing the bitcoin ATM locaitons - under development' img='images/preview/numilli-site.jpg' link='http://numilli.surge.sh/'/>

        <WorkTileOut title='Deliverate' info='REACT APP' summary='Delivary rating web app showing the top rated take abouts in your local area' img='images/preview/deliverate.jpg' link='http://deliverate.co.uk/'/>

       </div>
    </section>
    )
  }
}
export default Work

