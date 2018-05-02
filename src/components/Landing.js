import React from 'react'
import Social from './Social'

class Landing extends React.Component {
  render() {
    return (
  <section >
          <img className='absolute top-0 right-0 db-ns dn' alt='bg-img' src='images/bg.svg' style={{zIndex:'-99999', height:'60vh' }}/>
          <div className="dib v-top pr0 pa0 tl-ns tc vh-100">
          <div className='w-60-ns w-100 dib mt4 v-top'>
          <h1 style={{letterSpacing:'-0.85px'}} className='f-subheadline-l mt5-ns'>Digital Product Designer</h1>
          <h3 className='mt4 fw1 font-1 pr5-ns pr0' style={{lineHeight: '1.8' }}>Hi I'm James a Product Desinger based in Berlin, creating meaningful digital experiences with a focus on user-centred design.</h3>
          <Social/>
          </div>
    <div className='dib-ns dn w-40 mt5'><img className=' mt4' alt='iphone-header' src='images/iphone.png'/></div>

          </div>
</section>
    )
  }
}
export default Landing


