import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

class WorkTile extends React.Component {
  render() {
    return (
 <div className='w-50-ns w-100 dib pr5-ns pl0-ns mv3 v-top'>
 <Link to={this.props.link}>
 <img className='hoverable br4'src={this.props.img} alt='UX/UI'/>
 </Link>
    <div className='pv2'>
      <h2 className='fw3 mt2 f3 mb1'>{this.props.title}</h2>
      <p className='hint-text fw4 dib f7 pa0 ma0'>{this.props.info}</p>
      <p style={{lineHeight: '24px'}} className='secondary-text pb3 mt2 fw4 f6'>{this.props.summary}</p>

    </div>
</div>

    )
  }
}
WorkTile.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default WorkTile

