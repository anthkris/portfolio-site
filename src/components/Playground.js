import React from 'react';
import PlayTile from './PlayTile';
import websiteTool from "./images/tools/website.svg";
import documentTool from "./images/tools/document.svg";
import podcastTool from "./images/tools/podcast.svg";
import courseTool from "./images/tools/course.svg";
import IDQuestions from "./images/preview/ID-questions.svg";

class Playground extends React.Component {
  render() {
    return (
      <section className='center mw8 db ph3'>
        <h1 className='fw3 mt5'>LXD Resources</h1>
        <p className='ma0 pa0 fw3 secondary-text'>I've created a number of open source resources for other ID/LXD newbies, all available for free.</p>
        <div className='pt3 db'>
          <PlayTile title='Hack ID' type={websiteTool} img='http://res.cloudinary.com/dhdaswa6t/image/upload/dpr_auto,q_60/v1530723544/portfolio/preview/hackid.webp' summary='Resources for Self Taught IDs. Made with Jekyll and Github.' link='https://hackid.github.io/'/>
          <PlayTile title='Dear ID' type={podcastTool} img='http://res.cloudinary.com/dhdaswa6t/image/upload/dpr_auto,q_60/v1530723544/portfolio/preview/DearIDtwitter.webp' summary='Podcast about the Instructional Design Journey.' link='http://dearinstructionaldesigner.com/'/>
          <PlayTile title='Go Design Something' type={websiteTool} img='http://res.cloudinary.com/dhdaswa6t/image/upload/dpr_auto,q_60/v1530723544/portfolio/preview/gds-briefs.webp' summary='Project briefs for instructional designers. Made with Angular JS.' link='http://godesignsomething.co/'/>
          <PlayTile  title='ID Interview Questions' type={documentTool} img={IDQuestions} summary='Practice questions for instructional design interviews.' link='https://github.com/anthkris/instructional-design-interview-questions'/>
          <PlayTile  title='Build Your Portfolio Course' type={courseTool} img='http://res.cloudinary.com/dhdaswa6t/image/upload/dpr_auto,q_60/v1530723544/portfolio/preview/gds-courses.webp' summary='Create a case-study-based instructional design portfolio.' link='https://kristinanthony.withcoach.com/go-design-something-building-your-job-winning-portfolio'/>
        </div>
      </section>
    )
  }
}
export default Playground;
