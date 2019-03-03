import React from 'react';
import WorkTile from './WorkTile';


class Work extends React.Component {
  render() {
    return (
    <section className="center mw8 db ph3">
        <h1 className='fw3 f2 mb4'>Web Development</h1>
        <WorkTile title='Restaurant Reviews' info='Progressive Web Application' summary='An offline-first progressive web application built for the Udacity Mobile Web Specialist nanodegree.' img='https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1536358364/portfolio/preview/UdacityMWS' link='/MWS'/>
        <WorkTile title='UTakeIT' info='Web Application' summary='UTakeIt is a platform built from the ground up for the University of Texas STEM Center to market and sell their professional development offerings.' img='https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723544/portfolio/preview/UTakeItMobile' link='/UTakeIt'/>
        <WorkTile title='UXLX' info='Mobile Application' summary='A card-based, xAPI-enabled microlearning app to give bite-sized lessons on using UX in LX Design.' img='https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723544/portfolio/preview/UXLX' link='/UXLX'/>
        <WorkTile title='Tribute Page' info='One-Page Website' summary='A responsive website built in tribute to the great soprano, Yma Sumac.' img='https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1536358364/portfolio/preview/sumac-preview' link='/Tribute'/>
        <WorkTile title='Pomodoro Timer' info='Web Application' summary='A web app for increasing productivity using the Pomodoro method.' img='https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1536358364/portfolio/preview/pomodoro-preview' link='/Pomodoro'/>
        <WorkTile title='Simone' info='Web Game' summary='A jQuery-based Simon clone.' img='https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1536358364/portfolio/preview/simone-preview' link='/Simone'/>
        <WorkTile title='Game Development' info='General Game Development' summary='A growing portfolio of tiny games developed with game-specific toolsets.' img='https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723544/portfolio/preview/GameDev' link='/GameDev'/>
        <h1 className='fw3'>Learning Experience Design</h1>
        <WorkTile title='Foundations of Computer Science' info='MOOC' summary='Foundations of Computer Science is MOOC to help Texas Educators become certified to teach computer science.' img='https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723544/portfolio/preview/FOCS' link='/FOCS'/>
        <WorkTile title='FIVS123' info='eLearning Course' summary='FIVS123 Introduction to Forensics is a synchronous online course in development for Texas A&M University students by TEEX.' img='https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723544/portfolio/preview/FIVS123' link='/FIVS123'/>
        <WorkTile title='Death Investigation' info='eLearning Course' summary='Death Investigation Online was a course converted from one of the popular face-to-face courses into an asychronous online course using Moodle and Lectora Inspire.' img='https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723544/portfolio/preview/deathInvestigation' link='/DeathInvestigation'/>
        <WorkTile title='Column and Veil Bikes' info='eLearning Course' summary='A responsive, one-page course and game build using the free and open source Adapt framework.' img='https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723544/portfolio/preview/CVBikes' link='/CVBikes'/>
        <WorkTile title='Fitopoly' info='Learning Game' summary='A learning game that puts users in the role of a product designer that needs to create a wearable to fit the needs of their target consumer: office workers looking to move more and get fit.' img='https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,dpr_auto,q_60/v1530723544/portfolio/preview/Fitopoly' link='/Fitopoly'/>
    </section>
    )
  }
}
export default Work;
