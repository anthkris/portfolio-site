import React from 'react'
import PropTypes from 'prop-types';

class CaseStudyAbout extends React.Component {
  render() {
    return (
      <section className='center mw8'>
        <div className='ph3'>
          <h2 className='fw5 db dn-ns'>About</h2>
          <h1 className='f2-ns f4 fw3 lh-title ma0 mb4' >{this.props.about}</h1>
          <div className='pb3-ns pb3'>
            <div className='w-50-ns w-100 v-top dib'>
              <h2 className='fw3 '>Role Summary</h2>
              <p className='dib fw3 pr5-ns ma0 '>{this.props.role}</p>
            </div>
            <div className='w-50-ns w-100 dib'>
              <h2 className='fw3'>Job Title</h2>
              <p className='fw3'>{this.props.clients}</p>
              <h2 className='fw3 mt4'>Responsibilities</h2>
              <p className='fw3'>{this.props.job}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

CaseStudyAbout.propTypes = {
  about: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  clients: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,

};
export default CaseStudyAbout
