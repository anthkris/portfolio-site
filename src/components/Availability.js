import React from 'react'
import PropTypes from 'prop-types';

class Availability extends React.Component {
  render() {
    return (
      <article className='mt4'>
      <p  className='fw3 w-100 dib ma0 pa0'>
      <span className='bg-red dib mr2 v-mid' style={{height:'6px', width: '6px', borderRadius: '50%'}}></span>
     Unavailable until -  6 Oct 2017</p>
      </article>
    )
  }
}
export default Availability



