import React from 'react';
import PlayTile from './PlayTile';

class Playground extends React.Component {
  render() {
    return (
<section>
<h1 className='fw3 mt5'>LXD Resources</h1>
<p className='ma0 pa0 fw3 secondary-text'>I've created a number of open source resources for other ID/LXD newbies, all available for free.</p>
<div className='pt3 db'>
<PlayTile  title='Hack ID' type='images/tools/website.svg' img='images/preview/hackid.png' summary='Resources for Self Taught IDs. Made with Jekyll and Github.' link='https://hackid.github.io/'/>
<PlayTile  title='Dear ID' type='images/tools/podcast.svg' img='images/preview/DearIDtwitter.jpg' summary='Podcast about the Instructional Design Journey.' link='http://dearinstructionaldesigner.com/'/>
<PlayTile  title='Go Design Something' type='images/tools/website.svg' img='images/preview/gds-briefs.png' summary='Project briefs for instructional designers. Made with Angular JS.' link='http://godesignsomething.co/'/>
<PlayTile  title='ID Interview Questions' type='images/tools/document.svg' img='images/preview/ID-questions.svg' summary='Practice questions for instructional design interviews.' link='https://github.com/anthkris/instructional-design-interview-questions'/>
<PlayTile  title='Build Your Portfolio Course' type='images/tools/course.svg'img='images/preview/gds-course.png' summary='Create a case-study-based instructional design portfolio.' link='https://kristinanthony.withcoach.com/go-design-something-building-your-job-winning-portfolio'/>
</div>
</section>
    )
  }
}
export default Playground
