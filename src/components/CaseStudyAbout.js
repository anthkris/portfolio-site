import React from 'react'
import PropTypes from 'prop-types';


class CaseStudyAbout extends React.Component {
  render() {
    return (
 <section className=''>
    <div className='ph5-ns ph2'>
    <h1 className='f-large fw3'>{this.props.about}</h1>
    <div className='pb6-ns pb3'>
    <div className='w-50-ns w-100 v-top dib'>
    <h2 className='accent fw5 '>Role Summary</h2>
    <h3 className='dib fw4 pr5-ns ma0 '>{this.props.role}</h3>
    </div>
    <div className='w-50-ns w-100 dib'>
    <h2 className='accent fw5'>Job Title</h2>
    <h3 className='fw4'>{this.props.clients}</h3>
    <h2 className='accent fw5'>Responsibilities</h2>
    <h3 className='fw4'>{this.props.job}</h3>
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

