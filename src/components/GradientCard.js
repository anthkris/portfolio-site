import React from 'react'
import PropTypes from 'prop-types';


class GradientCard extends React.Component {
render() {
  return (
    <div className='w-third-ns w-50-m w-100 dib overflow-visible'>
    <article onClick={this.props.clicked} style={{height: 300}}>
    <div className='relative pl5-ns pl6'>
      <div className={`br3 pointer pv2-ns ph3-ns pv1 ph2 ${this.props.gradient}`} style={{height: 200, width: 120, bottom: 100, left: '-50px', borderRadius: '80px 80px 20px 20px', zIndex:'9999'}}>
      <div className="ml5-ns ml6 absolute br4 z-0" style={{height: 170, width: 20, bottom:-83, left:48, backgroundColor: '#d9ac82', zIndex:'-2'}}>
      </div></div></div></article><h2 className='code pl5-ns pl6'>{this.props.title}</h2></div>

    )
  }
}
GradientCard.propTypes = {
  clicked: PropTypes.string.isRequired,
  gradient: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GradientCard

