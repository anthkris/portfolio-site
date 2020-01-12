import React from 'react'
import PropTypes from 'prop-types';
import '../styles/case-study.scss';

class PersonalCaseStudyAbout extends React.Component {
  render() {
    return (
      <section className='center mw8'>
        <div className='ph3'>
          <h2 className='fw5 db dn-ns'>About</h2>
          <h1 className='f2-ns f4 fw3 lh-title ma0 mb4' >{this.props.about}</h1>
          <div className='pb3-ns pb3'>
            <div className='w-50-ns w-100 v-top dib'>
              <h2 className='fw5'>Development Summary</h2>
              <p className='dib fw3 pr5-ns ma0 '>{this.props.role}</p>
              <h3 className='fw5'>Made With</h3>
              <p className='dib fw3 pr5-ns ma0'>{this.props.tool}</p>
              <h3 className='fw3'>Time in Development</h3>
              <p className='fw3 pr5-ns pb4'>{this.props.time}</p>
              {this.props.projectLink ? (
                <a className='case-study-button' href={this.props.projectLink} target="_blank" rel="noopener noreferrer">View the Project</a>
              ) : (
                null
              )}
            </div>
            <div className='w-50-ns w-100 dib'>
              <h2 className='fw5'>Roles</h2>
              <p className='fw3'>{this.props.clients}</p>
              <h2 className='fw5 mt4'>Responsibilities</h2>
              <p className='fw3'>{this.props.job}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

PersonalCaseStudyAbout.propTypes = {
  about: PropTypes.string.isRequired,
  projectRole: PropTypes.string.isRequired,
  clients: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  tool: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  projectLink: PropTypes.string
};
export default PersonalCaseStudyAbout;
