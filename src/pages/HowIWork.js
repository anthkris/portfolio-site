import React from 'react';
import {Link} from 'gatsby';
import '../styles/how.scss';
import Layout from '../components/Layout.js';

const HowIWork = () =>
    <Layout>
      <div id="how-i-work" className='center mw8 db ph3 pt3 pb5'>
        <h1>How I Work</h1>
        <h2>Going Under the Hood</h2>
        <h3 className="focus-text">I focus on creating meaningful learning experiences by focusing on the right tools for the job.</h3>
        <section className='values'>
          <p>I focus on creating meaningful learning experiences by collaborating with you to view each experience, not as a one-and-done, but as part of a holistic learning journey.</p>
          <p>I believe that learning experience design means looking for the best tool for the job, whether that's considering which tool to develop in or thinking about whether or not a performance support option might be a better solution than a course.</p>
        </section>
        <section className='work-pillars'>
          <div className='pillar dib pa2'>
            <h4>Transparency</h4>
            <ul>
              <li>Project Management</li>
              <li>Built-In Review</li>
              <li>Rapid Prototyping and User Testing</li>
            </ul>
          </div>
          <div className='pillar dib pa2'>
            <h4>Efficiency</h4>
            <ul>
              <li>Focus on Design that Works</li>
              <li>Repeatable Design Processes</li>
              <li>Sprint-based Work Planning</li>
            </ul>
          </div>
          <div className='pillar dib pa2'>
            <h4>Sustainability</h4>
            <ul>
              <li>Open Source and Low Cost Tools</li>
              <li>Documentation for the Future</li>
              <li>Focus on Accessibility</li>
            </ul>
          </div>
        </section>
        <section>
        <div>
          <h2>What You can Expect</h2>
          <h3>Discovery</h3>
          <p>It's important that this process works for you, so we'll start our relationship with a discovery phase. We'll discuss the project and what you view as the performance gaps that led you to want to develop a learning experience as an intervention. With your help, I'll investigate the underlying problem and the best solutions. Then, I'll share options with you that focus on truly effective solutions, not just what I can develop with some elearning tool.</p>
          <h3>Development</h3>
          <p>I bring experience in learning design and development but I can't work without your expertise. Once discovery is over, we'll work together to begin mapping out the work to develop and implement the solution. </p>
          <p>I value transparency, efficiency, and sustainability, which translates into considerations such as what tools would allow you to update any artifacts that are created and working out loud using tools like Trello to make sure that everyone keeps abreast of how the work is moving.</p>
          <h3>De-Lovely</h3>
          <p>We'll prioritize planning solutions that are measurable so that, once the final solution is implemented, you can measure it's effect on the performance change you wanted to see.</p>
        </div>
        </section>
        <h3 className="focus-text">
          <Link to="/ContactMe">Sound interesting? Get in touch with me!</Link>
        </h3>
      </div>
    </Layout>

export default HowIWork;
