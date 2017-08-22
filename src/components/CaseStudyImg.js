import React from 'react'
import PropTypes from 'prop-types';


class CaseStudyImg extends React.Component {
  render() {
    return (
   <div className='w-50-ns w-100 dib'>
    <div className='pv4-ns pv1 ph5-ns ph2'>
      <img className=' hoverable' src={this.props.img} alt='Suggestv-sematic video'/>
   </div>
   </div>
    )
  }
}

CaseStudyImg.propTypes = {
  img: PropTypes.string.isRequired,
};

export default CaseStudyImg

