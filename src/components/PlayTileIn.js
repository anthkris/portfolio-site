
import React from 'react'
import Link from 'gatsby-link'


class PlayTileIn extends React.Component {
  render() {
    return (
<div className='w-third-ns w-100 dib'>
<div className='pa2'>
<Link className='no-underline ' to={this.props.link}>
  <div className='center'>
  <div className='w-100 ph2 pt3 pb2'>
  <img className='h1' src={this.props.type}/>
  <h3 className='ma0 fw5 secondary-text pl2 dib'>{this.props.title}</h3>  </div>
<div className='pa2 dib  relative'>
 <img className='hoverable' src={this.props.img} alt='Open source design'/>
 </div>
</div>
</Link>
</div>
</div>

    )
  }
}


PlayTileIn.propTypes = {
  link: React.PropTypes.string.requiredAny,
  title: React.PropTypes.string.requiredAny,
  type: React.PropTypes.string.requiredAny,
  img: React.PropTypes.string.requiredAny,
};



export default PlayTileIn

