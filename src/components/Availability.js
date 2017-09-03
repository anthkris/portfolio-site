import React from 'react'
import PropTypes from 'prop-types';

class Availability extends React.Component {
  render() {
    return (
      <article className='mt4'>
      <p  className='fw4 w-100 dib v-top ma0 pa0'>
      <span className='bg-red dib mr3' style={{height:'8', width: '8', borderRadius: '50'}}></span>
     Unavailable until -  6 Oct 2017</p>
      </article>
    )
  }
}
export default Availability



