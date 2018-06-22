import React from 'react'
import PropTypes from 'prop-types';


class PlayTile extends React.Component {
  render() {
    return (
      <div className='w-third-l w-50-ns w-100 dib pa2'>
        <a className='no-underline ' target='blank' href={this.props.link} >
          <div className='center tile'>
            <div className='w-100 pt3 pb2'>
              <img alt='Design-tool' className='h1' src={this.props.type}/>
              <h4 className='ma0 secondary-text pl3 dib'>{this.props.title}</h4>
            </div>
            <div className='pv2 dib relative'>
              <img className='hoverable' src={this.props.img} alt='Open-source-design'/>
              <div className='absolute download w-20' style={{left:'40%', top: '40%'}}>
              </div>
              <p style={{lineHeight: '24px'}} className='secondary-text pb3 mt2 fw4 f6'>{this.props.summary}</p>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

PlayTile.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};



export default PlayTile
