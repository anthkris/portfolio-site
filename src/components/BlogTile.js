import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from "gatsby-image";

class BlogTile extends React.Component {
  render() {
    return (
      <div className='w-33-l w-50-ns w-100 dib pr5-l pr0-l pr2-ns pl2-ns mv3 v-top'>
        <div className='pv2'>
          <Img sizes={this.props.imgSizes} alt=''/>
          <h2 className='mt3 mb0'>{this.props.title}</h2>
          <p className='dib f7 secondary-text'>{this.props.info}</p>
          <p style={{lineHeight: '24px'}} className='secondary-text pb3 mt2 fw4 f6'>{this.props.summary}</p>
        </div>
      </div>
    )
  }
}
BlogTile.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};
export default BlogTile
