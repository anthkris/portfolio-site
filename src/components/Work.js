import React from 'react';
import WorkTile from './WorkTile';
import WorkTileOut from './WorkTileOut';
import FIVS123 from "./images/preview/FIVS123.png";
import DeathInv from "./images/preview/deathInvestigation.png";
import FOCS from "./images/preview/FOCS.png";
import UTakeItPhoto from "./images/preview/UTakeItMobile.png";
import UXLX from "./images/preview/UXLX.png";
import CVAdapt from "./images/preview/CVBikes.png";
import Fitopoly from "./images/preview/Fitopoly.png";
import GameDev from "./images/preview/GameDev.png";


class Work extends React.Component {
  render() {
    return (
    <section className="center mw8 db ph3">
        <h1 className='fw3 f2 mb4'>Recent Works</h1>
        <WorkTile title='UTakeIT' info='Web Application' summary='UTakeIt is a platform built from the ground up for the University of Texas STEM Center to market and sell their professional development offerings.' img={UTakeItPhoto} link='/utakeit'/>
        <WorkTile title='Foundations of Computer Science' info='MOOC' summary='Foundations of Computer Science is MOOC to help Texas Educators become certified to teach computer science.' img={FOCS} link='/FOCS'/>
        <WorkTile title='FIVS123' info='eLearning Course' summary='FIVS123 Introduction to Forensics is a synchronous online course in development for Texas A&M University students by TEEX.' img={FIVS123} link='/FIVS123'/>
        <WorkTile title='Death Investigation' info='eLearning Course' summary='Death Investigation Online was a course converted from one of the popular face-to-face courses into an asychronous online course using Moodle and Lectora Inspire.' img={DeathInv} link='/DeathInvestigation'/>

        <h1 className='fw3'>Personal Projects</h1>
        <WorkTile title='UXLX' info='Mobile Application' summary='A card-based, xAPI enabled microlearning app to give bite-sized lessons on using UX in LX Design.' img={UXLX} link='/UXLX'/>
        <WorkTile title='Column and Veil Bikes' info='eLearning Course' summary='A responsive, one-page course and game build using the free and open source Adapt framework.' img={CVAdapt} link='/CVBikes'/>
        <WorkTile title='Fitopoly' info='Learning Game' summary='A learning game that puts users in the role of a product designer that needs to create a wearable to fit the needs of their target consumer: office workers looking to move more and get fit.' img={Fitopoly} link='/Fitopoly'/>
        <WorkTile title='Game Development' info='General Game Development' summary='A growing repository of games developed with game-specific toolsets.' img={GameDev} link='/GameDev'/>
    </section>
    )
  }
}
export default Work
