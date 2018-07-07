import React from 'react';
import Link from 'gatsby-link';
import '../styles/how.scss';

class How extends React.Component {
  render() {
    return (
      <section className="how-I-work">
        <div className='center mw8 db ph3 pt3 pb5'>
          <h1 className='fw3'>Truly Custom Development</h1>
          <p className="work-promise">I'll work with you to create truly custom learning experiences that focus on the learner experience and the outcomes you need.</p>
          <Link className="how-button" to="/HowIWork" title="How I Work">Learn More →</Link>
        </div>
      </section>
    )
  }
}
export default How;
